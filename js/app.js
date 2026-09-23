document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("#example-target");
  const statusText = document.querySelector("#status-text");

  // Evento disparado quando o cartão é detectado
  target.addEventListener("targetFound", () => {
    statusText.textContent = "Cartão Reconhecido!";
    statusText.style.color = "#4ade80"; // Verde
  });

  // Evento disparado quando a câmera perde o cartão
  target.addEventListener("targetLost", () => {
    statusText.textContent = "Aponte a câmera para o cartão";
    statusText.style.color = "#cbd5e1";
  });
});
