const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

function moveNoButton() {
  noBtn.style.position = "fixed";
  noBtn.style.zIndex = "999";

  const margin = 10;
  const maxX = window.innerWidth - noBtn.offsetWidth - margin;
  const maxY = window.innerHeight - noBtn.offsetHeight - margin;
  const x = Math.max(margin, Math.floor(Math.random() * maxX));
  const y = Math.max(margin, Math.floor(Math.random() * maxY));

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function isPointerClose(event) {
  const rect = noBtn.getBoundingClientRect();
  const buttonCenterX = rect.left + rect.width / 2;
  const buttonCenterY = rect.top + rect.height / 2;
  const dx = event.clientX - buttonCenterX;
  const dy = event.clientY - buttonCenterY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < 10;
}

function launchHearts(originX, originY) {
  for (let i = 0; i < 14; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-pop";
    heart.textContent = "❤";

    const size = 16 + Math.random() * 18;
    const driftX = -90 + Math.random() * 180;
    const driftY = -120 - Math.random() * 140;
    const duration = 900 + Math.random() * 700;

    heart.style.left = `${originX}px`;
    heart.style.top = `${originY}px`;
    heart.style.fontSize = `${size}px`;
    heart.style.setProperty("--drift-x", `${driftX}px`);
    heart.style.setProperty("--drift-y", `${driftY}px`);
    heart.style.animationDuration = `${duration}ms`;

    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

yesBtn.addEventListener("click", () => {
  const rect = yesBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  message.textContent = "! 💖 Love you too";
  message.classList.remove("message-show");
  void message.offsetWidth;
  message.classList.add("message-show");

  launchHearts(centerX, centerY);
});

noBtn.addEventListener("mouseenter", moveNoButton);

document.addEventListener("mousemove", (event) => {
  if (isPointerClose(event)) {
    moveNoButton();
  }
});

window.addEventListener("resize", moveNoButton);
