// Şifreyi göster/gizle fonksiyonu
function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Giriş formu kontrolü
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önler

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "admin@example.com" && password === "123456") {
        alert("Giriş başarılı!");
    } else {
        alert("Hatalı e-posta veya şifre!");
    }
});
