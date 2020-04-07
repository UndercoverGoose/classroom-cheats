/* Made By UndercoverGoose V1-Beta */

let autoclick = false;
if(location.href.indexOf("flashcards") !== -1) {
  (function(){ //Grabs quizizz answers (requires flashcards)
    answers=[];
    questions=[];
    function xr(x){
      if(document.getElementsByClassName("question-text")[x].parentNode.childNodes[1]!==undefined){
        return document.getElementsByClassName("question-text")[x].parentNode.childNodes[1].src.split("?")[0];
      }else{
        return "";
      }
    };
    function mat(x){
      let o="";
      if(x.match(/[a-z,0-9-~!-?-@-^-%]/gi)!==null){
        o = x.match(/[a-z,0-9-~!-?-@-^]/gi).join("");
      }
      return o;
    }
    for(let x=0;x<document.getElementsByClassName("question-text").length;x++){
      questions.push(xr(x)+mat(document.getElementsByClassName("question-text")[x].textContent));
    }
    for(let x=0;x<document.getElementsByClassName("answer-text").length;x++){
      answers.push(mat(document.getElementsByClassName("answer-text")[x].textContent));
    }
    localStorage.setItem("_answers", answers.join("\\n"));
    localStorage.setItem("_questions", questions.join("\\n"));
    alert(`Quizizz Flashcards Saved\n\n${answers.length} Answers : ${questions.length} Questions`);
  })();
}else {
  (function(){
    answers=localStorage.getItem("_answers").split("\\n");
    questions=localStorage.getItem("_questions").split("\\n");
    function mat(x){
      let o="";
      if(x.match(/[a-z,0-9-~!-?-@-^-%]/gi)!==null){
        o=x.match(/[a-z,0-9-~!-?-@-^]/gi).join("");
      }
      return o;
    };
    function xr(){
      if(document.getElementsByClassName("question-media")[0]!==undefined){
        return document.getElementsByClassName("question-media")[0].childNodes[0].src.split("?")[0];
      }else{
        return "";
      }
    };
    function foreva(){
      try{
        let grabbed=xr()+mat(document.getElementsByClassName("resizeable question-text-color")[0].textContent);
        for(let x=1;x<document.getElementsByClassName("option").length+1;x++){
          let choice=mat(document.getElementsByClassName("resizeable")[x].textContent);
          if(choice===answers[questions.indexOf(grabbed)]){
            document.getElementsByClassName("option")[x-1].childNodes[0].childNodes[0].style.background="black";
            if(autoclick) {
              document.getElementsByClassName("option")[x-1].childNodes[0].childNodes[0].click();
            }
          }
        }
      }
      catch(error){}
    }
    setInterval(foreva,0);
  })();
}
window.onkeypress = function(e) {
  autoclick = (e.key === "a");
}


