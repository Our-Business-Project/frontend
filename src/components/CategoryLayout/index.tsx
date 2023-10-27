import { Box, Typography } from "@mui/material";


export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          pt: "50px",
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        Загальна інформація (обов'язково)
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          padding: "0",
          margin: "0",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {children}
        
      </Box>
    </Box>
  );
}