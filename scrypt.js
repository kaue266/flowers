// escreve o textinho bonitinho
const text = "O amor floresce no tempo certo";
const animatedText = document.getElementById("animated-text");
const flowersWrapper = document.getElementById("flowers-wrapper");

let charIndex = 0;

const audioPlayer = document.getElementById('audioPlayer');

// Função para tocar a música
// Função para tocar a música
function playMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play(); // Inicia a reprodução do áudio
}
  
// Evento para chamar a função ao clicar em qualquer lugar na tela
 document.body.addEventListener('click', playMusic);
  
// Evento para chamar a função ao clicar em qualquer lugar na tela
document.body.addEventListener('click', playMusic);
  

function typeText() {
  if (charIndex < text.length) {
    animatedText.textContent += text[charIndex];
    charIndex++; 
  }
  
  if (charIndex < text.length) {
    setTimeout(typeText, 150); 
  }
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



// let. faz o coração do  dev bater mais forte.
typeText();
setInterval(createFallingHeart, 300);
playMusic()
