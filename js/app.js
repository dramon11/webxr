document.addEventListener("DOMContentLoaded", () => {
  const sceneEl = document.querySelector("a-scene");

  sceneEl.addEventListener("targetFound", (evt) => {
    const index = evt.detail.targetIndex;
    console.log("Marcador detectado:", index);

    if (index === 3) {
      const content = document.querySelector("#destino-content");
      if (content) content.setAttribute("visible", "true");

      const sound = document.querySelector("#arrival-sound");
      if (sound && sound.components.sound) {
        sound.components.sound.playSound();
      }
    }
  });

  sceneEl.addEventListener("targetLost", (evt) => {
    const index = evt.detail.targetIndex;
    if (index === 3) {
      const content = document.querySelector("#destino-content");
      if (content) content.setAttribute("visible", "false");
    }
  });
});
