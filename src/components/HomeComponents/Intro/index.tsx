import { Box, Divider, Grid, Paper, Typography } from '@mui/material';

const BenefitsInfo = [
  {
    path: '/images/IntroIcons/plans.png',
    title: 'Створення планів',
  },
  {
    path: '/images/IntroIcons/analytics.png',
    title: 'Аналітика',
  },
  {
    path: '/images/IntroIcons/development.png',
    title: 'Планування розвитку',
  },
  {
    path: '/images/IntroIcons/insights.png',
    title: 'Пошук інсайтів',
  },
  {
    path: '/images/IntroIcons/account.png',
    title: 'Особистий кабінет',
  },
  {
    path: '/images/IntroIcons/security.png',
    title: 'Безпека та конфіденційність',
  },
];

export default function Intro() {
  return (
    <Box sx={{ maxWidth: '2000px', m: '0 auto' }}>
      <Box
        sx={{
          bgcolor: 'primary.light',
          padding: '130px 50px 100px 50px',
          maxWidth: '700px',
        }}
      >
        <Typography variant="h1" display="flex" fontSize="2.2rem">
          <img src="/images/logo.svg" width="40px" />
          <Divider
            orientation="horizontal"
            variant="middle"
            sx={{
              color: 'text.primary',
              margin: '0 17px',
              padding: '0',
              borderColor: 'white',
              borderWidth: '1px',
            }}
          />
          Your Business Adviser
        </Typography>
        <Typography sx={{ mt: '50px' }}>
          Привіт, вітаємо вас на нашому інноваційному веб-сервісі для створення та аналізу планів виробництва та продажу
          - вашому незамінному інструменті для оптимізації бізнес-процесів та досягнення успіху. Наша місія - зробити
          ваш бізнес ефективнішим та прибутковішим завдяки ретельній аналітиці та оптимізації діяльності.
        </Typography>

        <Box>
          <Typography component="div" sx={{ m: '80px 0 40px 0' }}>
            Основні функції нашого сервісу:
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {BenefitsInfo.map((benefit, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <img src={benefit.path} alt={benefit.title} style={{ maxWidth: '90px' }} />
                  <Typography textAlign="center" sx={{ mt: '10px', fontSize: '14px' }}>
                    {benefit.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
