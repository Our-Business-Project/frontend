import { Box, Container, Typography} from "@mui/material";
import Intro from "@/components/Intro";
import CalcInput from "@/components/CustomElemnts/CalcInput";

import * as React from "react";

export default function Home() {
  return (
    <Box
      sx={{
        padding: "0",
        margin: "0",
        backgroundImage: `url(https://cdn.comss.net/img/092022/microsoft-edge.jpg?aspect_ratio=3:2)`,
        backgroundSize: "cover",
        backgroundPosition: " center center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        backgroundAttachment: "fixed",
      }}
    >
      <Intro />
      <Box sx={{ height: "1000px", bgcolor: "background.default" }}>
        <Container>
          <Typography
            variant="h2"
            sx={{
              color: "text.secondary",
            }}
          >
            odjdoc
          </Typography>
          <Box>
            <CalcInput measure="шт" label="План виробництва"></CalcInput>
            <CalcInput measure="грн" label="Собівартість товару"></CalcInput>
            <CalcInput measure="грн" label="Ціна за одиницю товару"></CalcInput>
            <CalcInput measure="грн" label="Бажаю заробити"></CalcInput>
          </Box>
          <CalcInput measure="шт" label="План виробництва"></CalcInput>
          <CalcInput measure="грн" label="Собівартість товару"></CalcInput>
          <CalcInput measure="грн" label="Ціна за одиницю товару"></CalcInput>
          <CalcInput measure="грн" label="Бажаю заробити"></CalcInput>
        </Container>
      </Box>
    </Box>
  );
}
