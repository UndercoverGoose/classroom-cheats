/*
* Made by: UndercoverGoose
* Version: 1.3.3
* Features: Highlighting,
            Auto input,
            Bigger answer boxes,
            Hidden answer,
            Keybinds,
            Themes without buying them
*
* Upcoming Features: Instant Purchases
*/

// Function to simplify the creation, appending, and getting of objects/elements
function gcn(x,y){return document.getElementsByClassName(x)[y]}
function cre(t,c,s,i){let x=document.createElement(t);x.className=c,x.style=s,x.innerHTML=i;return x;}
function app(v){document.body.appendChild(v)}
function appd(v){document.getElementsByClassName('hckcntnt')[1].appendChild(v)}
function apps(v){document.getElementsByClassName('hckcntnt')[7].appendChild(v)}

// Applies default button color and look without having to purchase an upgrade to update the style
let newstyle = document.createElement('style');
newstyle.textContent='.fkLxCm {box-sizing: border-box;font-size: 17px;color: white;font-weight: bold;text-align: center;display: inline-block;user-select: none;cursor: pointer;padding: 12px 16px;background: rgb(0, 85, 255);transition: background 0.2s ease 0s;border-radius: 4px;font-family: "Product Sans", sans-serif;}';
app(newstyle);

// Gets answers/questions
let j=JSON[Object.keys(JSON)],qs=[],as=[];
for(let x=0;x<j.length;x++){qs.push(j[x].text),as.push(j[x].answers[0].text);}

// Cheat toggles and "Menu" button creation
let f = [0, 0, 0, 0, 0, 0];
let hconfig = {
  keybinds:{
    hidemenu: 67,
    highlight: 72,
    biganswer: 66,
    inputanswer: 73,
    hiddenanswer: 79
  },
  theme:{
    active:"thanos",
    night:[[0,10,18],[38,50,56],[55,71,79],[69,90,100],[84,110,122]],
    thanos:[[13,0,25],[34,0,68],[51,0,102],[62,0,124],[79,23,135]],
    ocean:[[0,0,99],[40,53,147],[7,98,150],[2,119,189],[21,101,192]],
    forest:[[76,61,51],[56,86,69],[66,92,73],[65,86,65],[76,99,73]],
    sunset:[[127,116,150],[224,111,90],[237,113,45],[122,89,106],[232,171,60]],
    retro:[[156,0,34],[0,29,59],[255,174,82],[254,89,99],[167,28,148]],
    gold:[[],[],[],[],[]]
  }
}
let b = cre('div',"sc-bdVaJa fkLxCm hckcntnt","position: fixed; z-index: 1000000; left: 5px; bottom: 5px; width: 100px; height: 40px;","Menu");
b.onclick=function(){if(f[0]===0){gcn('hckcntnt',1).style.display="block",f[0]=1,gcn('hckcntnt',0).innerHTML="X",gcn('hckcntnt',0).style.background="#ff0000";}else{gcn('hckcntnt',1).style.display="none",f[0]=0,gcn('hckcntnt',0).innerHTML="Menu",gcn('hckcntnt',0).style.background="";}};app(b);

// Area for cheat buttons
app(cre("div","sc-bdVaJa fkLxCm hckcntnt","position:fixed;z-index:10000;left:5px;bottom:5px;width:300px;height:600px;display:none",""));

// Toggles/creates highlight answers cheat
let h = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:200px;height:40px;background:#aa3333","Highlight Answers");
h.onclick=function(){if(f[1]===0){gcn('hckcntnt',2).style.background="#33aa33";f[1]=1;hlinterval=setInterval(highlight,0);}else{gcn('hckcntnt',2).style.background="#aa3333";f[1]=0;clearInterval(hlinterval);}}
appd(h);

// Toggles/creates big answer cheat
let ab = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:200px;height:40px;margin-top:3px;background:#aa3333","Big Answer Box");
ab.onclick=function(){if(f[2]===0){gcn('hckcntnt',3).style.background="#33aa33";f[2]=1;bainterval=setInterval(biganswer,0);}else{gcn('hckcntnt',3).style.background="#aa3333";f[2]=0;clearInterval(bainterval);}}
appd(ab);

// Toggles/creates input answer cheat
let ia = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:200px;height:40px;margin-top:3px;background:#aa3333","Input Answer");
ia.onclick=function(){if(f[3]===0){gcn('hckcntnt',4).style.background="#33aa33";f[3]=1;iainterval=setInterval(inputanswer,0);}else{gcn('hckcntnt',4).style.background="#aa3333";f[3]=0;clearInterval(iainterval);}}
appd(ia);

// Toggles/creates hidden answer cheat
let ha = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:200px;height:40px;margin-top:3px;background:#aa3333","Hidden Answer");
ha.onclick=function(){if(f[5]===0){gcn('hckcntnt',5).style.background="#33aa33";f[5]=1;hainterval=setInterval(hiddenanswer,0);}else{gcn('hckcntnt',5).style.background="#aa3333";f[5]=0;clearInterval(hainterval);document.title="Play Gimkit! - Enter game code here";}}
appd(ha);

// Creates settings button
let se = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:170px;height:40px;margin-top:3px;background:#333333;position:absolute;bottom:0px;right:0px","Settings");
se.onclick=function(){if(f[6]===0){gcn('hckcntnt',7).style.display="block";f[6]=1;}else{f[6]=0;gcn('hckcntnt',7).style.display="none";}}
appd(se);

// Creates setttings placeholder
let sep = cre("div","sc-bdVaJa fkLxCm hckcntnt","position: fixed; z-index: 10000; left: 310px; bottom: 5px; width: 300px; height: 600px; display: none;","");
app(sep);

let setxt = document.createElemend('span');
setxt.appendChild(document.createTextNode('Themes'));
apps(setxt);

// Functions that make the cheats work
function highlight(){
  try{
    let d=document.getElementsByClassName('notranslate lang-en'),q=d[0].innerHTML,a=[d[1].innerHTML,d[2].innerHTML,d[3].innerHTML,d[4].innerHTML],i=a.indexOf(as[qs.indexOf(q)])+1;
    d[i].parentNode.parentNode.style.background="white",d[i].style.color="black";
  }catch(err){}
}

function biganswer(){
  try{
    let d=document.getElementsByClassName('notranslate lang-en'),q=d[0].innerHTML,a=[d[1].innerHTML,d[2].innerHTML,d[3].innerHTML,d[4].innerHTML],i=a.indexOf(as[qs.indexOf(q)])+1;
    d[i].parentNode.parentNode.parentNode.style="position:fixed;left:5px";
  }catch(err){}
}
function inputanswer(){
  try{
    let q=document.getElementsByClassName('notranslate lang-en')[0].innerHTML;
    document.getElementsByClassName('sc-jhAzac egTZap')[0].value=as[qs.indexOf(q)];
  }catch(err){}
}
function hiddenanswer(){
  try {
    let d=document.getElementsByClassName('notranslate lang-en'),q=d[0].innerHTML,a=[d[1].innerHTML,d[2].innerHTML,d[3].innerHTML,d[4].innerHTML],i=a.indexOf(as[qs.indexOf(q)])+1;
    document.title=i + "lay Gimkit! - Enter game code here";
  }catch(err){}
}

// Theme changer
function themechanger(){
  try{
    gcn('sc-bwzfXH',0).style.background="rgb("+hconfig.theme[hconfig.theme.active][0].join(",")+")";
    gcn('hckcntnt',1).style.background="rgb("+hconfig.theme[hconfig.theme.active][4].join(",")+")";
    gcn('hckcntnt',7).style.background="rgb("+hconfig.theme[hconfig.theme.active][2].join(",")+")";
    for(let x=0;x<5;x++){
      gcn('sc-Rmtcm',x).style.background="rgb("+hconfig.theme[hconfig.theme.active][x+1].join(",")+")";
    }
  }catch(err){}
}setInterval(themechanger, 0);

// Key events for added features
window.onkeydown=function(e){
  if(e.keyCode===hconfig.keybinds.hidemenu){
    if(f[4]===0){
      f[4]=1;
      document.getElementsByClassName('hckcntnt')[0].style.display="none"
    }else {
      f[4]=0;
      document.getElementsByClassName('hckcntnt')[0].style.display=null;
    }
  }else if(e.keyCode===hconfig.keybinds.highlight){
    highlight();
  }else if(e.keyCode===hconfig.keybinds.biganswer){
    biganswer();
  }else if(e.keyCode===hconfig.keybinds.inputanswer){
    inputanswer();
  }else if(e.keyCode===hconfig.keybings.hiddenanswer){
    hiddenanswer();
  }
}
