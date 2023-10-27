import { Box, Typography } from "@mui/material";

export default function Intro() {
  return (
    <Box sx={{ maxWidth: "2000px", m: "0 auto" }}>
      <Box
        sx={{
          bgcolor: "primary.light",
          padding: "90px 50px",
          maxWidth: "800px",
        }}
      >
        <Typography variant="h1">Your Business Adviser</Typography>
        <Typography sx={{ my: "50px" }}>
          Привіт, вітаємо вас на нашому інноваційному веб-сервісі для створення
          та аналізу планів виробництва та продажу - вашому незамінному
          інструменті для оптимізації бізнес-процесів та досягнення успіху. Наша
          місія - зробити ваш бізнес ефективнішим та прибутковішим завдяки
          ретельній аналітиці та оптимізації діяльності.
        </Typography>
        <Typography sx={{ mt: "100px" }}>
          Основні функції нашого сервісу:
        </Typography>
        <ol>
          <li>Створення планів</li>
          <li>Аналітика</li>
          <li>Планування розвитку</li>
          <li>Пошук інсайтів</li>
          <li>Особистий кабінет</li>
          <li>Безпека та конфіденційність</li>
        </ol>
      </Box>
    </Box>
  );
}
