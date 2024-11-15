const express = require("express");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;
const ARTICLE_PATH = "./public/artykul.txt";
const OUTPUT_PATH = "./public/artykul.html";
const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
 console.error("Brak API Key w zmiennych środowiskowych.");
 process.exit(1);
}

app.get("/generate.html", async (req, res) => {
 try {
  if (!fs.existsSync("./public")) {
   fs.mkdirSync("./public");
  }

  if (!fs.existsSync(ARTICLE_PATH)) {
   return res.status(400).send("Plik artykul.txt nie istnieje.");
  }

  const article = fs.readFileSync(ARTICLE_PATH, "utf-8").trim();

  if (!article) {
   return res.status(400).send("Plik artykul.txt jest pusty.");
  }

  const prompt = `
      Przekształć poniższy artykuł na kod HTML. Wskazówki: 
      1. Użyj odpowiednich tagów HTML do strukturyzacji treści.
      2. Dodaj <img src='image_placeholder.jpg'> w miejscach, gdzie warto dodać grafikę. Każdy tag <img> powinien zawierać atrybut alt z krótkim opisem grafiki (sugestią do jej stworzenia).
      3. Pod każdą grafiką dodaj podpis w tagu <figcaption>.
      4. Kod powinien zawierać tylko treści, które wstawia się między <body> i </body> – bez <html>, <head> ani <body>.
      
      Artykuł:
      ${article}
    `;

  const response = await axios.post(
   "https://api.openai.com/v1/chat/completions",
   {
    model: "gpt-3.5-turbo",
    messages: [
     {
      role: "system",
      content: "Jesteś pomocnym asystentem do generowania kodu HTML."
     },
     { role: "user", content: prompt }
    ],
    max_tokens: 2000,
    temperature: 0.7
   },
   {
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${API_KEY}`
    }
   }
  );

  const htmlContent = response.data.choices?.[0]?.message?.content?.trim();

  if (!htmlContent) {
   console.error("Brak wygenerowanego kodu HTML:", response.data);
   return res.status(500).send("Nie udało się wygenerować kodu HTML.");
  }

  fs.writeFileSync(OUTPUT_PATH, htmlContent);
  res.send("Plik artykul.html został wygenerowany i zapisany!");
 } catch (error) {
  if (error.response) {
   console.error("Błąd API:", error.response.data);
  } else {
   console.error("Błąd:", error.message);
  }
  res.status(500).send("Wystąpił błąd podczas generowania HTML.");
 }
});

app.listen(PORT, () => {
 console.log(`Serwer działa na porcie ${PORT}`);
});
