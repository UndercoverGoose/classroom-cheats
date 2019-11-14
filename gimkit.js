/*
* Made by: ConnorCoder
* Prove it Oskar
*/

function gcn(x,y){return document.getElementsByClassName(x)[y]}
function cre(t,c,s,i){let x=document.createElement(t);x.className=c,x.style=s,x.innerHTML=i;return x;}
function app(v){document.body.appendChild(v)}
function appd(v){document.getElementsByClassName('hckcntnt')[1].appendChild(v)}

let newstyle = document.createElement('style');
newstyle.textContent='.fkLxCm {box-sizing: border-box;font-size: 17px;color: white;font-weight: bold;text-align: center;display: inline-block;user-select: none;cursor: pointer;padding: 12px 16px;background: rgb(0, 85, 255);transition: background 0.2s ease 0s;border-radius: 4px;font-family: "Product Sans", sans-serif;}';
app(newstyle);

let j=JSON[Object.keys(JSON)],qs=[],as=[];
for(let x=0;x<j.length;x++){qs.push(j[x].text),as.push(j[x].answers[0].text);}

let hlinterval;
let bainterval;

let f = [0, 0, 0, 0, 0];
let b = cre('div',"sc-bdVaJa fkLxCm hckcntnt","position: fixed; z-index: 1000000; left: 5px; bottom: 5px; width: 100px; height: 40px;","Menu");
b.onclick=function(){if(f[0]===0){gcn('hckcntnt',1).style.display="block",f[0]=1,gcn('hckcntnt',0).innerHTML="X",gcn('hckcntnt',0).style.background="#ff0000";}else{gcn('hckcntnt',1).style.display="none",f[0]=0,gcn('hckcntnt',0).innerHTML="Menu",gcn('hckcntnt',0).style.background="";}};app(b);

app(cre("div","sc-bdVaJa fkLxCm hckcntnt","position:fixed;z-index:10000;left:5px;bottom:5px;width:300px;height:600px;display:none",""));

let h = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:200px;height:40px;background:#aa3333","Highlight Answers");
h.onclick=function(){if(f[1]===0){gcn('hckcntnt',2).style.background="#33aa33";f[1]=1;hlinterval=setInterval(highlight,0);}else{gcn('hckcntnt',2).style.background="#aa3333";f[1]=0;clearInterval(hlinterval);}}
appd(h);

let ab = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:200px;height:40px;margin-top:3px;background:#aa3333","Big Answer Box");
ab.onclick=function(){if(f[2]===0){gcn('hckcntnt',3).style.background="#33aa33";f[2]=1;bainterval=setInterval(biganswer,0);}else{gcn('hckcntnt',3).style.background="#aa3333";f[2]=0;clearInterval(bainterval);}}
appd(ab);

let ia = cre("div","sc-bdVaJa fkLxCm hckcntnt","width:200px;height:40px;margin-top:3px;background:#aa3333","Input Answer");
ia.onclick=function(){if(f[3]===0){gcn('hckcntnt',4).style.background="#33aa33";f[3]=1;iainterval=setInterval(inputanswer,0);}else{gcn('hckcntnt',3).style.background="#aa3333";f[3]=0;clearInterval(iainterval);}}
appd(ia);

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
window.onkeydown=function(e){
  if(e.key==="c"){
    if(f[4]===0){
      f[4]=1;
      document.getElementsByClassName('hckcntnt')[0].style.display="none"
    }else {
      f[4]=0;
      document.getElementsByClassName('hckcntnt')[0].style.display=null;
    }
  }
}
