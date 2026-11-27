// Plano B caso o arquivo de vídeo não carregue
const LINK_RESERVA = "https://youtu.be/0i9FNcX6xB0";

// 1º botão: mostra a mensagem e o presente
function sim() {
  document.getElementById("painel").classList.add("revelado");

  // Já começa a carregar o vídeo enquanto ela lê a mensagem
  const video = document.getElementById("video");
  video.preload = "auto";
  video.load();
}

// 2º botão (presente): abre o vídeo na própria página
function abrirSurpresa() {
  const video = document.getElementById("video");
  const cinema = document.getElementById("cinema");

  document.getElementById("presente").classList.add("aberto");
  cinema.classList.add("aberto");
  cinema.setAttribute("aria-hidden", "false");

  video.currentTime = 0;
  const tocando = video.play();
  if (tocando) {
    tocando.catch(() => {
      // Se o navegador bloquear, mostra os controles para ela dar play
      video.controls = true;
    });
  }
}

function fecharVideo() {
  const video = document.getElementById("video");
  const cinema = document.getElementById("cinema");

  video.pause();
  cinema.classList.remove("aberto");
  cinema.setAttribute("aria-hidden", "true");
  document.getElementById("presente").classList.remove("aberto");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("video").addEventListener("error", () => {
    window.location.href = LINK_RESERVA;
  });
});
