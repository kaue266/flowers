// escreve o textinho bonitinho
const text = "Você é a batida perfeita da minha playlist. "; 
const animatedText = document.getElementById("animated-text");
const flowersWrapper = document.getElementById("flowers-wrapper");

let charIndex = 0;

function typeText() {
    if (charIndex < text.length) {
        if (text[charIndex] === "\n") {
            animatedText.innerHTML += "<br>"; // Insere quebra de linha
        } else {
            animatedText.innerHTML += text[charIndex];
        }
        charIndex++;
        setTimeout(typeText, 150); // Chama a próxima letra
    }
}

const volumeControl = document.getElementById("volumeControl");
const audioPlayer = document.getElementById("audioPlayer");


// Atualiza o volume com base na posição do controle
volumeControl.addEventListener("input", function () {
    audioPlayer.volume = this.value / 50; // Define o volume (0 a 1)
});

function setVolume() {
  audioPlayer.volume = volumeControl.value; // Ajusta o volume com o valor do slider
}



// gera os coração funcionar
function createFallingHeart() {
  const heartsContainer = document.getElementById("falling-hearts");
  const heart = document.createElement("div");
  heart.className = "heart";

  heart.style.left = Math.random() * 100 + "vw"; 

  const animationDuration = Math.random() * 3 + 2; 
  heart.style.animationDuration = animationDuration + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, animationDuration * 1000); 
}



// Armazena o último tempo exibido
let lastTime = 0;

const timeDisplay = document.getElementById("time-display"); // Display para o tempo

// Sincroniza a letra com o áudio
function syncLyrics() {
  const currentTime = audioPlayer.currentTime;
  timeDisplay.textContent = formatTime(currentTime) + " / " + formatTime(audioPlayer.duration);
      lastTime = currentTime;
  }

// Função para formatar o tempo no formato minutos:segundos
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Toca a música e inicia a sincronização
function playMusic() {
  audioPlayer.play();
  setInterval(syncLyrics, 500); // Chama a sincronização de 500ms em 500ms
}

// let. faz o coração do  dev bater mais forte.
document.getElementById("heart").addEventListener("click", function() {
    this.style.animation = "explode 1s forwards";
    this.style.transform = "scale(2)"; 
  
    document.body.style.background = "linear-gradient(to bottom, #a2c2e4, #f6a1c1, #8d89a1)";


    setTimeout(function() {
      document.getElementById("pagina-rosa").style.display = "block";
      document.getElementById("abertura-coracao").style.display = "none";
      playMusic();
      typeText();
      setInterval(createFallingHeart, 300);
    }, 1000);
  });
