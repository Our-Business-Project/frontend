import { Box, Container } from "@mui/material";

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
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            height: "500px",
            width: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "200px",
          }}
        >
          <Box>
            <h1>Hello, gays</h1>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            height: "500px",
            width: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "200px",
          }}
        >
          <Box>
            <h1>Hello, gays</h1>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            height: "500px",
            width: "800px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "200px",
          }}
        >
          <Box>
            <h1>Hello, gays</h1>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
