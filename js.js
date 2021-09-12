let sliders=document.querySelectorAll(".part1");
let sliders1=document.querySelectorAll(".part2")
let left =document.querySelector(".left");
let right=document.querySelector(".right");
for(let i=1;i<sliders.length;i++){
    sliders[i].style.display="none";
    sliders1[i].style.display="none"
}
let index=0;
right.addEventListener('click',function(){
    
    function z(v){
        v.style.display="none";
    }
    sliders.forEach(z);
    sliders1.forEach(z);
    index++;
    if(index==sliders.length){
        index=0;
    }
    sliders[index].style.display="flex";
    sliders1[index].style.display="block";
})
left.addEventListener('click',function(){
   function z(v){
       v.style.display="none"
   }
   sliders.forEach(z);
   sliders1.forEach(z);
   index--;
   if(index<0){
       index=sliders.length-1;
   }
   sliders[index].style.display="flex";
   sliders1[index].style.display="block";
})
let hamb=document.querySelector('.hamb');
let clos=document.querySelector('.close');
let nav=document.querySelector('ul');
let room=document.querySelector('.room');
let main1=document.querySelector('.main1');
hamb.addEventListener('click',function(){
    nav.classList.add('active');
    hamb.style.display='none';
    room.style.display='none';
    clos.style.display='block';
});
clos.addEventListener('click',function(){
    nav.classList.remove('active');
    hamb.style.display='block';
    room.style.display='block';
    clos.style.display='none';
})
