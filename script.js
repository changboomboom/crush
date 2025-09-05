const messages = [
  "Anh biết lỗi rồi ạ, mong bé tha lỗi cho anh nhaaaa 🥺🙏💖",
  "Anh hứa sẽ không làm bé buồn nữa đâu 😭💔👉👈",
  "Tha cho anh đi mà, bé iu dễ thương nhất trên đời 🥹💕",
  "Anh thương bé nhất quả đất này, đừng giận anh nữa nha 😢❤️",
  "Nếu bé tha thứ, anh sẽ chở bé đi ăn trà sữa liền 😍🧋💞",
  "Anh xin lỗi thiệt nhiều nhiều nhiều luôn 😭💘💖",
  "Bé iu ơi, cho anh cơ hội sửa sai nha 🥺🌹",
  "Anh nhớ bé quá, đừng giận anh lâu mà 😢💞",
  "Anh biết lỗi rồi ạ, mong bé tha lỗi cho anh nhaaaa 🥺🙏💖",
  "Xin lỗi công chúa nhỏ của anh, tha cho anh đi mà 👑🥺💖"
];

let index = 0;
let denySize = 1;
let acceptSize = 1;

const messageEl = document.getElementById("message");
const denyBtn = document.getElementById("denyBtn");
const acceptBtn = document.getElementById("acceptBtn");
const loveSection = document.getElementById("loveSection");

denyBtn.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  typeWriter(messages[index]);

  denySize *= 0.9; // nhỏ lại
  acceptSize *= 1.1; // to lên

  denyBtn.style.transform = `scale(${denySize})`;
  acceptBtn.style.transform = `scale(${acceptSize})`;
});

acceptBtn.addEventListener("click", () => {
  loveSection.classList.remove("hidden");
  spawnHearts();
});

function typeWriter(text) {
  let i = 0;
  messageEl.innerHTML = "";
  const speed = 50;
  function typing() {
    if (i < text.length) {
      messageEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function spawnHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}
