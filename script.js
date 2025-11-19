// Ensure the app only works inside Telegram Web App
if (!window.Telegram || !window.Telegram.WebApp) {
    document.body.innerHTML = `
        <h2>Please open this link inside the Telegram app.</h2>
        <p><a href="https://t.me/app_test_app_bot">Open in Telegram</a></p>
    `;
} else {
    const tg = window.Telegram.WebApp;

    // Expand to full height
    tg.expand();

    // Get Telegram user info
    const user = tg.initDataUnsafe?.user;

    if (!user) {
        alert("Unable to get Telegram user info. Make sure you opened the app inside Telegram.");
    } else {
        // Display all available user info
        const container = document.getElementById("user-info");

        let html = "";

        if (user.photo_url) {
            html += `<img src="${user.photo_url}" alt="Profile photo">`;
        }

        html += `<p><strong>ID:</strong> ${user.id}</p>`;
        html += `<p><strong>First Name:</strong> ${user.first_name}</p>`;
        html += `<p><strong>Last Name:</strong> ${user.last_name || "N/A"}</p>`;
        html += `<p><strong>Username:</strong> ${user.username || "N/A"}</p>`;
        html += `<p><strong>Language Code:</strong> ${user.language_code || "N/A"}</p>`;

        container.innerHTML = html;
    }
}