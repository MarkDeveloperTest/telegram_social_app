// AUTO LOGIN if user info is saved
const savedUser = localStorage.getItem("tgUser");

if (savedUser) {
    const user = JSON.parse(savedUser);
    showUser(user);
}

// This function is called automatically AFTER Telegram login success
function onTelegramAuth(user) {
    // Save login permanently
    localStorage.setItem("tgUser", JSON.stringify(user));

    // Update the UI
    showUser(user);
}

// Updates UI and hides login button
function showUser(user) {
    const displayName = user.first_name + (user.last_name ? " " + user.last_name : "");

    // Show user name in header
    document.getElementById("user-info").textContent = "Signed in as: " + displayName;

    // Hide login widget
    document.getElementById("telegram-login-container").style.display = "none";

    // Show main app
    document.getElementById("app-content").style.display = "block";
}