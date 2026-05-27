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
        "https://www.googleapis.com/auth/spreadsheets", // You only need this for sheets
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:K1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.fullName,
            body.email,
            body.phone,
            body.address || "",
            body.city || "",
            body.state || "",
            body.zipCode || "",
            body.numberOfGuests,
            body.hearAbout || "",
            body.prayerRequest || "",
            body.agreeToTerms ? "Yes" : "No",
          ],
        ],
      },
    });

    console.log("Google Sheets response:", response.data);

    return NextResponse.json({
      success: true,
      message: "Registration saved successfully",
      data: response.data,
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
