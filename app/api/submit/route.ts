// app/api/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: NextRequest) {
  console.log("API route hit!"); // Debug log

  try {
    const body = await request.json();
    console.log("Received body:", body); // Debug log

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.numberOfGuests) {
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
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // Generate ticket number
    const ticketNumber = body.ticketNumber || `DCLM-${Date.now()}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    const registrationId = ticketNumber;
    const registrationDate = new Date().toISOString().split('T')[0];
    const registrationTimestamp = new Date().toISOString();

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:T1", // Expanded range to accommodate all new fields (A to U = 21 columns)
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            ticketNumber,                          // A: Ticket Number
            registrationId,                        // B: Registration ID
            body.fullName,                         // C: Full Name
            body.email,                            // D: Email
            body.phone,                            // E: Phone
            body.address || "",                    // F: Address
            body.city || "",                       // G: City
            body.state || "",                      // H: State
            body.zipCode || "",                    // I: Zip Code
            body.numberOfGuests,                   // J: Number of Guests
            body.hearAbout || "",                  // K: How Did You Hear
            body.prayerRequest || "",              // L: Prayer Request
            body.visitingGuests || "",             // M: Passport Number
            body.country || "",                    // N: Country of Origin
            body.expectedArrivalDate || "",        // P: Expected Arrival Date
            registrationDate,                      // Q: Registration Date
            registrationTimestamp,                 // R: Registration Timestamp
            body.agreeToTerms ? "Yes" : "No",      // S: Agreed to Terms
            "Pending",                             // T: Check-in Status
            "Confirmed"                            // U: Registration Status
          ],
        ],
      },
    });

    console.log("Google Sheets response:", response.data);

    // Return the ticket information for confirmation
    return NextResponse.json({
      success: true,
      message: "Registration saved successfully",
      data: {
        ...response.data,
        ticketNumber: ticketNumber,
        registrationId: registrationId,
        registrationDate: registrationDate,
        fullName: body.fullName,
        email: body.email,
      },
    });
  } catch (error: any) {
    console.error("Google Sheets API Error:", error);
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 },
    );
  }
}

// Optional: Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: "GET method not allowed. Use POST instead." },
    { status: 405 },
  );
}