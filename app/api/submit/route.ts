// app/api/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest) {
  console.log("API route hit!");

  try {
    const body = await request.json();
    console.log("Received body:", body);

    // Validate required fields
    if (
      !body.fullName ||
      !body.email ||
      !body.phone ||
      !body.numberOfGuests ||
      !body.gender ||
      !body.ageGrade ||
      !body.placeOfOrigin
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Check for environment variables
    if (
      !process.env.GOOGLE_CLIENT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 },
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    const ticketNumber =
      body.ticketNumber ||
      `DCLM-${Date.now()}-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
    const registrationId = ticketNumber;
    const registrationDate = new Date().toISOString().split("T")[0];
    const registrationTimestamp = new Date().toISOString();

    // Columns A–T (20 columns)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:T1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            ticketNumber,                          // A: Ticket Number
            registrationId,                        // B: Registration ID
            body.fullName,                         // C: Full Name
            body.gender,                           // D: Gender
            body.ageGrade,                         // E: Age Grade
            body.email,                            // F: Email
            body.phone,                            // G: Phone
            body.address || "",                    // H: Address
            body.city || "",                       // I: City
            body.state || "",                      // J: State
            body.zipCode || "",                    // K: Zip Code
            body.numberOfGuests,                   // L: Number of Guests
            body.placeOfOrigin || "",              // M: Place of Origin
            body.expectedArrivalDate || "",        // N: Expected Arrival Date
            body.hearAbout || "",                  // O: How Did You Hear
            body.prayerRequest || "",              // P: Prayer Request
            registrationDate,                      // Q: Registration Date
            registrationTimestamp,                 // R: Registration Timestamp
            body.agreeToTerms ? "Yes" : "No",      // S: Agreed to Terms
            "Confirmed",                           // T: Registration Status
          ],
        ],
      },
    });

    console.log("Google Sheets response:", response.data);

    return NextResponse.json({
      success: true,
      message: "Registration saved successfully",
      data: {
        ...response.data,
        ticketNumber,
        registrationId,
        registrationDate,
        fullName: body.fullName,
        email: body.email,
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Something went wrong";
    console.error("Google Sheets API Error:", error);
    return NextResponse.json({ message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "GET method not allowed. Use POST instead." },
    { status: 405 },
  );
}
