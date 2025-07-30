const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
const nums=["E","E","E","E","E","E","E","E","E"];
function winner(){
  for(let i=0;i<8;i++){
    let idx1=arr[i][0],idx2=arr[i][1],idx3=arr[i][2];
    //cond;
    if(nums[idx1]===nums[idx2] && nums[idx1]!="E"){
        if(nums[idx1]===nums[idx3]) return true;
    }
  }
  return false;
}
//
function tie(){
    let c=0;
    for(let i=0;i<9;i++){
        if(nums[i]=="E") c++;
    }
    if(c>0) return false;
    else return true;
}
//
const img1=document.getElementById('player0');
const img2=document.getElementById("playerx");
const win=document.getElementById('win');
const cont=document.getElementById('container');
//
function helper(event){
     if(event.target.className=="cell"){
        img1.style.transform="scale(1.2)";
        img2.style.transform="scale(0.8)";
        //human
        const id=Number(event.target.id);
        if(nums[id]==="E"){
            nums[id]="O";
            const ele1=document.getElementById(`${id}`);
            ele1.innerHTML="O";
            if(winner()) {win.innerHTML="You Won";cont.removeEventListener('click',helper);}
            if(tie() && win.innerHTML=="") {win.innerHTML="Match Tie";
                cont.removeEventListener('click',helper);
                img1.style.transform="scale(1)";
                img2.style.transform="scale(1)";
            }
            cont.removeEventListener('click',helper);
        }
        //anonyms;
        setTimeout(()=>{
            if(win.innerHTML==""){
            let idx=-1;
            img1.style.transform="scale(0.8)";
            img2.style.transform="scale(1.2)";
            while(true){
                idx=(Math.floor(Math.random()*41))%9;
                if(nums[idx]=="E") break;
            }
            const ele2=document.getElementById(`${idx}`);
            ele2.innerHTML="X";
            nums[idx]="X";
            cont.addEventListener('click',helper);
            if(winner()) {win.innerHTML="You Lose"; cont.removeEventListener('click',helper);}
            if(tie() && win.innerHTML=="") {
                win.innerHTML="Match Tie";
                cont.removeEventListener('click',helper);
                img1.style.transform="scale(1)";
                img2.style.transform="scale(1)";
            }
        }
        },2000)
     }
}

//
cont.addEventListener('click',helper);

const restart=document.getElementById('start');
restart.addEventListener('click',(event)=>{
    //end game;
    cont.removeEventListener('click',helper);
    //empty nums;
    for(let i=0;i<9;i++){
        nums[i]="E";
    }
    let eles=document.querySelectorAll(".cell");
     eles=Array.from(eles);
     eles.forEach((ele)=>{
        ele.innerHTML="";
     })
    
    //img
    img1.style.transform="scale(1)";
    img2.style.transform="scale(1)";
    win.innerHTML="";
    //start game;
    cont.addEventListener('click',helper);
})