import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In a production environment, you would use a service like Nodemailer,
    // SendGrid, or AWS SES to send the email to m.produced6@gmail.com

    console.log("Sending email with data:", data)

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Order request submitted successfully",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
