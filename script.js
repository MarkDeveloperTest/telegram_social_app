// Check if user is already saved -> Auto Login
const savedUser = JSON.parse(localStorage.getItem("telegramUser"));

if (savedUser) {
  showUser(savedUser);
}

// TELEGRAM WIDGET CALLBACK
function onTelegramAuth(user) {
  // Save login to localStorage (remember forever)
  localStorage.setItem("telegramUser", JSON.stringify(user));

  // Update UI
  showUser(user);
}

// Update UI with logged-in user
function showUser(user) {
  const displayName = user.first_name + (user.last_name ? " " + user.last_name : "");
  document.getElementById("usernameDisplay").textContent = displayName;

  // Hide login widget
  document.getElementById("login-container").style.display = "none";

  // Show app content
  document.getElementById("app-content").style.display = "block";
}