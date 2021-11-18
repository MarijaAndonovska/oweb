

const likeButtons = document.getElementsByClassName('fa-thumbs-up');
const dislikeButtons = document.getElementsByClassName('fa-thumbs-down');
const likeValues = document.getElementsByClassName('likeValue');


let counter = [0,0,0,0,0,0,0,0,0];

for(let i=0; i<9; i++)
{
  likeButtons[i].addEventListener("click", function(){
      counter[i]++;
      likeValues[i].textContent = counter[i];
  })
} 
for(let i=0; i<9; i++)
{
  dislikeButtons[i].addEventListener("click", function(){
      counter[i]--;
      likeValues[i].textContent = counter[i];
  })
} 

const form1 = document.querySelector("#comm");  // samo prvoto e selektirano 
const comment = document.querySelector("#postComment");
const sub = document.querySelector("#submitComment");
const commSection = document.querySelector(".commentSection");

form1.addEventListener("submit", function(e){
    e.preventDefault();
    const newPar = document.createElement('p');       
    newPar.textContent = "username:" + input.value;
    commSection.appendChild(newPar);
})