const tg = window.Telegram?.WebApp;

if (!tg) {
    document.body.innerHTML = "<h2>Please open this page inside the Telegram app.</h2>";
} else {
    tg.expand();

    const user = tg.initDataUnsafe?.user;

    if (!user) {
        document.getElementById("user-info").textContent = "User data not available yet.";
    } else {
        const container = document.getElementById("user-info");
        let html = "";

        if (user.photo_url) html += `<img src="${user.photo_url}" alt="Profile photo">`;
        html += `<p><strong>ID:</strong> ${user.id}</p>`;
        html += `<p><strong>First Name:</strong> ${user.first_name}</p>`;
        html += `<p><strong>Last Name:</strong> ${user.last_name || "N/A"}</p>`;
        html += `<p><strong>Username:</strong> ${user.username || "N/A"}</p>`;
        html += `<p><strong>Language:</strong> ${user.language_code || "N/A"}</p>`;

        container.innerHTML = html;
    }
}