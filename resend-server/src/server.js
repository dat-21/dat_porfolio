import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import { fileURLToPath } from "url"; //Dùng để xác định đường dẫn tuyệt đối (cần thiết khi dùng ES module).
import path from "path";

dotenv.config();
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

// Cấu hình đường dẫn tuyệt đối (dùng khi deploy)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  //API gửi mail vẫn giữ nguyên, chạy bình thường.
  const { name, email, subject, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "tiendatyyy2005@gmail.com",
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

// ======================
//  SERVE FRONTEND (React build)
// ======================
app.use(express.static(path.join(__dirname, "../dist"))); //Cho phép Express phục vụ các file React đã build.

app.get("*", (req, res) => {
  //Nếu người dùng vào bất kỳ route nào (VD: /about), React Router vẫn hoạt động.
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
