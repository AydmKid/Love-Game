    :root {
  --bg1: #ffd6e7;
  --bg2: #ffeedd;
  --card: #ffffff;
  --text: #2f1f26;
  --yes: #35c759;
  --no: #ff3b30;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Tahoma, Arial, sans-serif;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--bg1), var(--bg2));
  color: var(--text);
  overflow: hidden;
}

.name-background {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.floating-name {
  position: absolute;
  font-weight: 700;
  letter-spacing: 1px;
  color: rgba(233, 30, 99, 0.42);
  text-shadow: 0 0 16px rgba(233, 30, 99, 0.3);
  white-space: nowrap;
  animation-name: driftName, pulseName;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

.card {
  width: min(90vw, 420px);
  background: var(--card);
  border-radius: 22px;
  padding: 28px 20px 24px;
  text-align: center;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 10;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

.hint {
  margin: 10px 0 18px;
  opacity: 0.8;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  min-height: 56px;
  position: relative;
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 12px 28px;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  transition: transform 0.18s ease;
  user-select: none;
}

.btn:hover {
  transform: scale(1.06);
}

.yes {
  background: var(--yes);
}

.no {
  background: var(--no);
}

.no:hover {
  transform: scale(1.06);
}

.message {
  margin-top: 18px;
  min-height: 26px;
  font-size: 1.1rem;
  font-weight: 700;
}

.message-show {
  animation: popIn 420ms ease;
  color: #e91e63;
  text-shadow: 0 0 10px rgba(233, 30, 99, 0.25);
}

.heart-pop {
  position: fixed;
  z-index: 1200;
  pointer-events: none;
  color: #ff2d55;
  text-shadow: 0 4px 12px rgba(255, 45, 85, 0.35);
  animation-name: floatHeart;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.8);
  }
  70% {
    opacity: 1;
    transform: translateY(-1px) scale(1.06);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes floatHeart {
  0% {
    opacity: 0.95;
    transform: translate(0, 0) scale(0.7);
  }
  100% {
    opacity: 0;
    transform: translate(var(--drift-x), var(--drift-y)) scale(1.25);
  }
}

@keyframes driftName {
  0% {
    transform: translate3d(0, 0, 0) rotate(-3deg);
  }
  50% {
    transform: translate3d(0, -24px, 0) rotate(3deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(-3deg);
  }
}

@keyframes pulseName {
  0% {
    opacity: 0.4;
    filter: blur(0px);
  }
  50% {
    opacity: 0.8;
    filter: blur(0.4px);
  }
  100% {
    opacity: 0.4;
    filter: blur(0px);
  }
}
