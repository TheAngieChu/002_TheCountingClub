let counter = document.getElementById("counter");
let decrease = document.getElementById("button__decrease");
let increase = document.getElementById("button__increase");
let count = 0;
let startOver = document.getElementById("reset");

decrease.addEventListener('click', ()=>{
    console.log('going down');
    count--;
    counter.innerHTML = count;
})

increase.addEventListener("click", ()=>{
    console.log('going up');
    count++;
    counter.innerHTML = count;
})

startOver.addEventListener('click', ()=>{
    counter.innerHTML = 0;
    count = 0;
})