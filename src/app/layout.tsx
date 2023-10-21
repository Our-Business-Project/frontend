import type { Metadata } from "next";
import ThemeRegistry from "@/core/theme/ThemeRegistry";

export const metadata: Metadata = {
  title: "Your Business Adviser | Калькулятор для Вашого Успішного Бізнесу",
  description:
    "Отримайте професійні бізнес-консультації та скористайтеся унікальним калькулятором бізнесу для підвищення ефективності вашої компанії",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
