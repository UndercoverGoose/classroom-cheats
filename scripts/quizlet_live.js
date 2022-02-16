(async function () {
  const pin = prompt("Enter PIN, like: 123-456", "").match(/[0-9]/g).join("");
  if (pin.length !== 6) {
    alert("Invalid Pin, try again");
    return;
  }
  let gameId = await fetch(
    `https://quizlet.com/webapi/3.2/game-instances?filters={"gameCode":${pin},"isInProgress":true,"isDeleted":false}&perPage=500`
  );
  gameId = await gameId.json();
  const set = gameId.responses[0].models.gameInstance[0]?.itemId;
  if (!set) {
    alert("Set not found, make sure the pin is correct and try again");
    return;
  }
  let setPage = await fetch(`https://quizlet.com/${set}`);
  setPage = await setPage.text();

  try {
    eval(
      setPage.slice(
        setPage.indexOf('(function(){window.Quizlet["setPageData"]'),
        setPage.indexOf("setPageData") +
          setPage.slice(setPage.indexOf("setPageData")).indexOf("</script>")
      )
    );
  } catch {}

  const mapping = Quizlet.setPageData?.termIdToTermsMap;
  if (!mapping) {
    alert("Set data didn't load properly, try again");
    return;
  }
  let terms = {};
  let definitions = {};
  for (const item of Object.values(mapping)) {
    terms[item.word] = item.definition;
    definitions[item.definition] = item.word;
  }

  setInterval(function () {
    try {
      const question = document.getElementsByClassName(
        "FormattedText notranslate StudentPrompt-text lang-en"
      )[0].textContent;
      const answers = Array.from(
        document.getElementsByClassName(
          "FormattedText notranslate StudentAnswerOption-text lang-en"
        )
      );
      if (question in terms) {
        answers.forEach((box) => {
          if (box.textContent === terms[question])
            box.style.fontWeight = "bolder";
        });
      } else if (question in definitions) {
        answers.forEach((box) => {
          if (box.textContent === definitions[question])
            box.style.fontWeight = "bolder";
        });
      }
    } catch {}
  }, 100);
})();
