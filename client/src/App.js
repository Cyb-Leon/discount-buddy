import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import ChatInterface from "./components/ChatInterface";
import BudgetTracker from "./components/BudgetTracker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import i18nLang from "./i18n";
import { Select, MenuItem } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light", // Toggle to 'dark' for high-contrast
  },
});

function App() {
  const [deals, setDeals] = useState([]);
  const { t } = useTranslation();
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    i18nLang.changeLanguage(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" align="center" gutterBottom>
            {t("title")}
          </Typography>
          <ChatInterface setDeals={setDeals} deals={deals} setLabel={t("searchLabel")} />
          <BudgetTracker setBudgetTitle={t("budgetTitle")}/>
        </Box>
      </Container>
      <Select value={language} onChange={handleLanguageChange}>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="zu">Zulu</MenuItem>
      </Select>
    </ThemeProvider>
  );
}

export default App;
