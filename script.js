// Ensure the app only works inside Telegram Web App
 const tg = window.Telegram.WebApp;

    // Expand to full height inside Telegram
    tg.expand();

    // Get Telegram user info
    const user = tg.initDataUnsafe?.user;
    if (!user) {
        alert("Unable to get Telegram user info. Make sure you opened the app in Telegram.");
    } else {
        // Display user name at top
        document.getElementById("user-name").textContent = `Hello, ${user.first_name}${user.username ? " (@" + user.username + ")" : ""}!`;
    }