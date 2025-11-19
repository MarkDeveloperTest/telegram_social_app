// Function called by Telegram Login Widget
function onTelegramAuth(user) {
    // Save user info in localStorage (one-time login)
    localStorage.setItem("tgUser", JSON.stringify(user));

    // Redirect to main app page
    window.location.href = "home.html";
}

// Check if user is already logged in
window.addEventListener("DOMContentLoaded", () => {
    const storedUser = localStorage.getItem("tgUser");
    if (storedUser) {
        // User already logged in, redirect immediately
        window.location.href = "home.html";
    }
});