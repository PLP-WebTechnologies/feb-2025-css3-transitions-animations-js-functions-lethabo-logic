function setMood(mood) {
  localStorage.setItem("mood", mood);
  const display = document.getElementById("currentMood");
  display.textContent = `Your mood: ${mood}`;

  // Remove animations from all buttons
  document.querySelectorAll("button").forEach(btn => {
    btn.classList.remove("pulse", "shake");
  });

  const btn = document.getElementById(mood);

  // Trigger different animations
  if (mood === "happy") {
    btn.classList.add("pulse");
  } else if (mood === "sad") {
    btn.classList.add("shake");
  }
}

// Load saved mood on page load
window.onload = function () {
  const mood = localStorage.getItem("mood");
  if (mood) {
    setMood(mood);
  }
};

