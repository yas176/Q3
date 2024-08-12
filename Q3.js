const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Q3.html'));
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;

    // Regular expression to validate phone number format
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (phoneRegex.test(phone)) {
        res.send(`Hello, ${name}. Your phone number ${phone} is valid.`);
    } else {
        res.send(`Hello, ${name}. Your phone number ${phone} is invalid. It should be in the format ddd-ddd-dddd.`);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
