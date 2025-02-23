const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Örnek yönetici bilgileri (Gerçek sistemde DB kullanılmalı)
const adminUser = "admin";
const adminPass = "12345";

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    
    if (username === adminUser && password === adminPass) {
        res.json({ success: true, message: "Giriş başarılı", token: "secure-token" });
    } else {
        res.status(401).json({ success: false, message: "Hatalı kullanıcı adı veya şifre" });
    }
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor...`);
});
