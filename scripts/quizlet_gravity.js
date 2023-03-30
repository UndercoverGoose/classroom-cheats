(function () {
  if (!window.gooseGravity) {
    window.gooseGravity = true;
    const matches = {};
    Quizlet.gravityModeData.terms.forEach((term) => {
      matches[term.word] = term.definition;
    });
    const reversed = {};
    for (const term in matches) {
      reversed[matches[term]] = term;
    }
    setInterval(function () {
      const asteroids = Array.from(document.querySelectorAll(".TermText"));
      if (asteroids.length === 0) return;

      asteroids.forEach((asteroid) => {
        const term = asteroid.textContent;
        if (asteroid.gooseAnswered) return;
        if (term in matches) {
          asteroid.textContent = matches[term];
          asteroid.gooseAnswered = true;
        } else if (term in reversed) {
          asteroid.textContent = reversed[term];
          asteroid.gooseAnswered = true;
        }
      });
    }, 100);
  }
})();
