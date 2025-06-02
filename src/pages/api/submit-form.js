import { google } from "googleapis";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const selectedWeek = formData.get("selectedWeek");
    const selectedPrice = formData.get("selectedPrice");
    const guests = formData.get("guests");

    // Initialize the Google Sheets API
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Add the form data as a new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:I", // Adjust range based on your sheet
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            name,
            email,
            phone || "",
            message || "",
            selectedWeek || "",
            guests || "",
            selectedPrice || "",
            "New", // Status
          ],
        ],
      },
    });

    // Send email notifications using Resend
    const emailList = process.env.NOTIFICATION_EMAILS.split(",");

    for (const recipientEmail of emailList) {
      await resend.emails.send({
        from: "forms@sea-reach.com",
        to: recipientEmail.trim(),
        subject: "New Property Rental Inquiry",
        html: `
          <h2>New Rental Inquiry Received!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Guests:</strong> ${guests || "Not provided"}</p>
          <p><strong>Rate:</strong> ${selectedPrice || "Not provided"}</p>
          <p><strong>Week:</strong> ${selectedWeek || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          <p>
            <a href="https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}" 
               style="display: inline-block; padding: 10px 20px; background-color: #2e8b8b; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px;">
              View in Google Sheets
            </a>
          </p>
        `,
        text: `
          New rental inquiry received!
          
          Name: ${name}
          Email: ${email}
          Phone: ${phone || "Not provided"}
          Message: ${message || "No message provided"}
          
          Submitted at: ${new Date().toLocaleString()}
          
          View in Google Sheets: https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}
        `,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);

    return new Response(
      JSON.stringify({ success: false, message: "Failed to submit form" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
