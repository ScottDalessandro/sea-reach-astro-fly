import { GoogleSpreadsheet } from "google-spreadsheet";

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

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(import.meta.env.GOOGLE_SHEET_ID);

    // Authenticate with service account
    await doc.useServiceAccountAuth({
      client_email: import.meta.env.GOOGLE_CLIENT_EMAIL,
      private_key: import.meta.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });

    // Load the document properties and worksheets
    await doc.loadInfo();

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0];

    // Add the form data as a new row
    await sheet.addRow({
      Timestamp: new Date().toISOString(),
      Name: name,
      Email: email,
      Phone: phone || "",
      Message: message || "",
      Week: selectedWeek || "",
      Guests: guests || "",
      Rate: selectedPrice || "",
      Status: "New",
    });

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
