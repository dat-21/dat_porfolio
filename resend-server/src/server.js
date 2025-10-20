import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Absolute path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Cấu hình CORS chính xác cho domain frontend
app.use(
  cors({
    origin: [
      "https://dat-porfolio-web.onrender.com", // FE Render
      "http://localhost:5173", // Cho local dev (tùy chọn)
    ],
    methods: ["GET", "POST"],
    credentials: false,
  })
);

app.use(express.json());

// =======================
// 📩 API gửi email
// =======================
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["tiendatyyy2005@gmail.com"],
      subject: subject || "Portfolio Contact Message",
      html: `
        <h2>Bạn có tin nhắn mới từ Portfolio 💌</h2>
        <p><strong>Tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Chủ đề:</strong> ${subject}</p>
        <p><strong>Nội dung:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Send email failed:", error);
      return res.status(403).json({
        success: false,
        message:
          "Không thể gửi email. Vui lòng kiểm tra email hoặc domain trong Resend (403 Forbidden).",
        error,
      });
    }

    res.status(200).json({
      success: true,
      message: "✅ Email đã được gửi thành công!",
      data,
    });
  } catch (err) {
    console.error("💥 Internal error:", err);
    res
      .status(500)
      .json({ success: false, message: "Lỗi server khi gửi email." });
  }
});

// =======================
// 🌐 SERVE FRONTEND (React build)
// =======================
const frontendPath = path.join(__dirname, "../../dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
