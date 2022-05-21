let user = [
  {
    name: "Jonny Doe",
    photo: "assets/team-1.png",
    profession: "Designer",
  },
  {
    name: "Jone Doe",
    photo: "assets/team-2.png",
    profession: "Designer",
  },
  {
    name: "Johnathan Doe",
    photo: "assets/team-3.png",
    profession: "Designer",
  },
];
let tech = [
  {
    icon: "./assets/icons8-lightning-bolt-50.png",
    color: "#f1c40f",
    name: "Fast Servece",
    discription: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: "./assets/icons8-cloud-50.png",
    color: "#0faff1",
    name: "Cloud Servers",
    discription: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: "./assets/icons8-change-50.png",
    color: "#95a5a6",
    name: "Domain Transfer",
    discription: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    icon: "./assets/icons8-messages-50(1).png",
    color: "#f1540f",
    name: "Live Suport",
    discription: "Lorem ipsum dolor sit amet consectetur",
  },
];

let containerCard = document.getElementById("user");
createCards(user, containerCard);

function createCards(arr, container) {
  arr.forEach((el) => {
    container.innerHTML += 
    `<article class="card">
          <img class="userPhoto" src="${el.photo}"></img>
          <h4>${el.name}</h4>
          <p>${el.profession}</p>
          <div class="cardIcon">
          <a href=""><img width="15px"  src="./assets/icons8-facebook-f-48(3).png"> </a></a>
          <a href=""><img width="15px" src="./assets/icons8-twitter-24.png"> </a>
          <a href=""><img width="15px" src="./assets/icons8-star-24.png"> </a>
        </div>
       </article>
        
        `;
  });
}

let containerTech = document.getElementById("containerTech");
createCard(tech, containerTech);

function createCard(data, container) {
  data.forEach((el) => {
    let article = document.createElement("article");
    article.className = "card";
    let div = document.createElement("div");
    div.className = "circulIcon";
    div.style.backgroundColor = el.color;
    let img = document.createElement("img");
    img.src = `${el.icon}`;
    img.alt = "imgIcon";
    div.append(img);
    let h3 = document.createElement("h3");
    h3.innerText = el.name;
    let p = document.createElement("p");
    p.innerText = el.discription;
    article.append(div, h3, p);
    container.append(article);
  });
}

let button = Array.from(document.getElementsByClassName("button"));


function activity (buttonArr){
  let isViewPage = true;
  
  buttonArr.map((el) => {
    el.addEventListener("click", function () {
       isViewPage = false;
    });
    
  });
   if(isViewPage){
  
    setTimeout(function(){
      document.getElementsByTagName("header")[0].style.display = "none"
      document.getElementsByTagName("main")[0].style.display = "none";
    }, 5000)
   }
   else{
     document.getElementsByTagName("header")[0].style.display = "none"
     document.getElementsByTagName("main")[0].style.display = "none";
     
   }
    
}
activity (button);

 
 