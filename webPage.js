

const likeButtons = document.getElementsByClassName('fa-thumbs-up');
const dislikeButtons = document.getElementsByClassName('fa-thumbs-down');
const likeValues = document.getElementsByClassName('likeValue');

var username = window.prompt("Enter your name:");

let counter1 = [0,0,0,0,0,0,0,0,0];

for(let i=0; i< likeButtons.length; i++)
{
  likeButtons[i].addEventListener("click", function(){
      counter1[i]++;
      likeValues[i].textContent = counter1[i];
  })
} 
for(let i=0; i<dislikeButtons.length; i++)
{
  dislikeButtons[i].addEventListener("click", function(){
      counter1[i]--;
      likeValues[i].textContent = counter1[i];
  })
} 

const forms = document.getElementsByClassName('comm'); 
const comments = document.getElementsByClassName('postComment');
//const sub = document.getElementsByClassName('submitComment');
const commSections = document.getElementsByClassName('commentSection');

for(let i=0; i<commSections.length; i++)
{
    forms[i].addEventListener("submit", function(e){
      e.preventDefault();
      const newPar = document.createElement('p');   
      newPar.innerHTML = "<b>" + username + "</b> says: " + comments[i].value + "<br>";
      commSections[i].appendChild(newPar);
    })
}

const icon = document.getElementById('postPic');

const form2 = document.getElementById('hideShow');
const divElFeed = document.querySelector(".instafeed");

icon.addEventListener("click", function(e){
  if(form2.style.display === "none")
      form2.style.display = "block";
  else 
      form2.style.display = "none";
})


const image_input = document.querySelector("#image_input");

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const pic = new Image();
        pic.src = reader.result;
        pic.classList.add("newlyAddedImage");

        const divCont = document.createElement('div');
        divCont.classList.add("containPic");
        divCont.appendChild(pic);

        const divComm = document.createElement('div');
        const divComm2 = document.createElement('div');
        const h4El = document.createElement('h4');
        
        divComm2.classList.add("commentSection");
        h4El.innerText = "Comment Section:";
        divComm.classList.add("textCommSect");
        divComm.appendChild(h4El);
        divComm.appendChild(divComm2);

        const divLike = document.createElement('div');
        divLike.classList.add("likeSystem");

        const span1 = document.createElement('span');
        const item1 = document.createElement('i');
        span1.classList.add("childLS");
        item1.classList.add("fa","fa-thumbs-up");
        span1.appendChild(item1);

        const span2 = document.createElement('span');
        const parag2 = document.createElement('p');
        parag2.innerHTML = "Upvotes: ";
        span2.classList.add("childLS");
        span2.appendChild(parag2);

        const span3 = document.createElement('span');
        const item3 = document.createElement('i');
        span3.classList.add("childLS");
        item3.classList.add("fa", "fa-thumbs-down");
        span3.appendChild(item3);

        divLike.append(span1, span2, span3);

        const divForm = document.createElement('form');
        const span4 = document.createElement('span');
        const span5 = document.createElement('span');
        span4.classList.add("childComm");
        span5.classList.add("childComm");
        const textar = document.createElement('textarea');
        textar.cols = 25; textar.rows = 3; textar.classList.add("postComment");
        const butt1 = document.createElement('button');
        butt1.classList.add("submitComment");
        butt1.innerText = "Comment";
        span4.appendChild(textar);
        span5.appendChild(butt1);
        divForm.action = "";
        divForm.classList.add("comm");
        divForm.append(span4,span5);

        
        divCont.append(divComm, divLike, divForm);

        divElFeed.prepend(divCont);

    });
     reader.readAsDataURL(this.files[0]);

});
