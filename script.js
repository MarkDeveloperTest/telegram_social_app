// Initialize Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Expand the app to full height

const posts = [
  { username: "mark_dev", image: "https://source.unsplash.com/random/600x400?sig=1", caption: "Loving this view! 🌄" },
  { username: "anna_10", image: "https://source.unsplash.com/random/600x400?sig=2", caption: "Coffee vibes ☕" },
  { username: "f1_fanatic", image: "https://source.unsplash.com/random/600x400?sig=3", caption: "Ready for the race! 🏎️" }
];

const feed = document.getElementById("feed");
const template = document.getElementById("post-template");

posts.forEach(post => {
  const postClone = template.content.cloneNode(true);
  postClone.querySelector(".username").textContent = post.username;
  postClone.querySelector(".post-image").src = post.image;
  postClone.querySelector(".post-caption").textContent = post.caption;

  const commentInput = postClone.querySelector(".comment-input");
  const commentsList = postClone.querySelector(".comments-list");

  commentInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && commentInput.value.trim() !== "") {
      const comment = document.createElement("div");
      comment.textContent = commentInput.value;
      commentsList.appendChild(comment);
      commentInput.value = "";
    }
  });

  feed.appendChild(postClone);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-btn")) {
    e.target.textContent = e.target.textContent === "❤️" ? "💖" : "❤️";
  }
});