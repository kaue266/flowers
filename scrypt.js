// escreve o textinho bonitinho
const text = "Você é a batida perfeita da minha playlist. "; 
const animatedText = document.getElementById("animated-text");
const flowersWrapper = document.getElementById("flowers-wrapper");



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

// Chamar a função
typeText();

const audioPlayer = document.getElementById('audioPlayer');

function playMusic() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play(); // Inicia a reprodução do áudio
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


