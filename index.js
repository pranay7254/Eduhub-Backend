const express = require('express');
const multer = require('multer');
const app = express();
app.use(express.json());

// Upload PDF
app.post('/upload', multer().single('pdfFile'), (req, res) => {
  // Save PDF logic
});

// Get PDF
app.post('/get-materials', (req, res) => {
  // Send PDF logic
});

app.listen(process.env.PORT || 3000);
