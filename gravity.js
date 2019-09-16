let t = [];
let d = [];
let i = document.getElementsByClassName('GravityTypingPrompt-input js-keymaster-allow')[0];

for(let x=0; x<Quizlet.gravityModeData.terms.length; x++) {
  t.push(Quizlet.gravityModeData.terms[x].word);
  d.push(Quizlet.gravityModeData.terms[x].definition);
}

function loop() {
  let c;
  try {
    c = document.getElementsByClassName('GravityTerm-content')[0].childNodes[0].childNodes[0].textContent;
  }catch(err){c = false};
  if (c !== false) {
    if (t.indexOf(c) > -1) {
      i.focus();
      i.value = d[t.indexOf(c)];
    }else if (d.indexOf(c) > -1) {

    }
  }

}setInterval(loop, 0);
