document.addEventListener("DOMContentLoaded", function () {
    // Yönetici giriş işlemi (API ile doğrulama yapılıyor)
    async function loginAdmin() {
        const username = document.getElementById("admin-username").value;
        const password = document.getElementById("admin-password").value;
        const loginMessage = document.getElementById("login-message");

        try {
            const response = await fetch("https://keysoftbilisim.github.io/kuyum:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("authToken", data.token);
                document.getElementById("login-panel").style.display = "none";
                document.getElementById("admin-panel").style.display = "block";
                loginMessage.textContent = "Giriş başarılı!";
                loginMessage.style.color = "green";
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            loginMessage.textContent = error.message;
            loginMessage.style.color = "red";
        }
    }
    
    // Yönetici çıkış işlemi
    function logoutAdmin() {
        localStorage.removeItem("authToken");
        document.getElementById("admin-panel").style.display = "none";
        document.getElementById("login-panel").style.display = "block";
        document.getElementById("admin-username").value = "";
        document.getElementById("admin-password").value = "";
    }
    
    // Fonksiyonları global alana ekliyoruz
    window.loginAdmin = loginAdmin;
    window.logoutAdmin = logoutAdmin;

    // Burada ek olarak dinamik veri güncelleme, saat ve tarih gibi işlemler de eklenebilir.
});
