import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "tiendatyyy2005@gmail.com", // Email đích bạn muốn nhận
      subject,
      html: `
        <h3>Bạn có tin nhắn mới từ Portfolio</h3>
        <p><strong>Tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Chủ đề:</strong> ${subject}</p>
        <p><strong>Nội dung:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Email send failed", error });
    }

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
