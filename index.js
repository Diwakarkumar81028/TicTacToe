const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let arr=[0,0,0,0,0,0,0,0,0];  
function winner(){
    for(let i=0;i<8;i++){
        let id1=win[i][0],id2=win[i][1],id3=win[i][2];
        if(arr[id1]==arr[id2] && arr[id1]!=0){
            if(arr[id1]==arr[id3]) return true;
        }
    }
    return false;
}
const wn=document.getElementById('win');
////////////////
function tie(){
    let c=0;
    for(let i=0;i<9;i++){
        if(arr[i]==0) c++;
    }
    if(c==0) return true;
    return false;
}
//******************* */
const cont=document.getElementById('container');
let ch='O';
function restart(event){
          if(ch==='O'){
            const ele=document.getElementById(event.target.id);
            let id=Number(event.target.id);
            if(arr[id]===0) {
               ele.innerHTML="O";
               ch='X';
               arr[id]='O';
               if(winner()) {
                wn.innerHTML=`Winner Is O`;
                cont.removeEventListener('click',restart);
               }
               if(tie() && wn.innerHTML==""){
                  wn.innerHTML="Match is Tie";
                  cont.removeEventListener('click',restart);
               }
            }
        }
        else{
            const ele=document.getElementById(event.target.id);
            let id=Number(event.target.id);
            if(arr[id]===0){
               ele.innerHTML="X";
               ch='O';
               arr[id]='X';
               if(winner()) {
                wn.innerHTML=`Winner Is X`;
                cont.removeEventListener('click',restart);
               }
                if(tie() && wn.innerHTML==""){
                  wn.innerHTML="Match is Tie";
                  cont.removeEventListener('click',restart);
               }
            } 
        }
}
//*********************** */
const start=document.getElementById('start');
start.addEventListener('click',(event)=>{
    //restart;
    for(let i=0;i<=8;i++){
        arr[i]=0;
    }
    let boxes=document.querySelectorAll('.cell');
    boxes=Array.from(boxes);
    boxes.forEach(box=>box.innerHTML="");
    wn.innerHTML="";
    //
    cont.addEventListener('click',restart);
});
