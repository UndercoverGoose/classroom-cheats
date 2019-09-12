let a=parseInt(document.getElementsByClassName('UIDiv SetPageTermsHeader-termsListTitle')[0].childNodes[0].childNodes[0].textContent.match(/[0-9]/g).join(""));
let t=[];
let d=[];
for (let x=0;x<a;x++) {
  t.push(document.getElementsByClassName('SetPageTerm-wordText')[x].textContent);
  d.push(document.getElementsByClassName('SetPageTerm-definitionText')[x].textContent);
}
localStorage.setItem('c.js/t',t.join('\\a'));
localStorage.setItem('c.js/d',d.join('\\a'));
let s=document.getElementsByClassName('SetPageModeButton')[5].href.split('/');
s[4]="micromatch";
document.getElementsByClassName('SetPageModeButton')[5].href=s.join('/');
