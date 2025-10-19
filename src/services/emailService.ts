import { BASE_URL } from "../config/apiConfig";


export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Error sending email" };
  }
};
