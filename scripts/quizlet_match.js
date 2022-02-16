(function () {
  const matches = {};
  Quizlet.matchModeData.terms.forEach((term) => {
    matches[term.word] = term.definition;
  });
  let css = "FormattedText notranslate TermText MatchModeQuestionGridTile-text";
  if (document.getElementsByClassName(css).length === 0)
    css = "MatchModeQuestionScatterTile";
  const tiles = Array.from(document.getElementsByClassName(css));
  const colors = [
    "#f93640",
    "#f98836",
    "#f9e936",
    "#3df936",
    "#36f9d9",
    "#3650f9",
    "#7e36f9",
    "#dc36f9",
    "#ffffff",
    "#a3a3a3",
    "#424242",
  ];
  Array.from(
    document.getElementsByClassName("MatchModeQuestionGridTile-image")
  ).forEach((image) => {
    image.style.display = "none";
  });

  let colorIndex = 0;
  for (const term in matches) {
    const definition = matches[term];
    tiles.forEach((tile) => {
      if (tile.textContent === term) {
        tiles.forEach((box) => {
          if (box.textContent === definition) {
            box.style.background = colors[colorIndex];
            box.style.color = "black";
          }
        });
        tile.style.background = colors[colorIndex];
        tile.style.color = "black";
        colorIndex++;
      }
    });
  }
})();
