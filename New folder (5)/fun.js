const selbtn = document.querySelector("#btn");
function fun1(){
    const txt = "Moh i luv you";
    const newElement = document.createElement("p");
    newElement.textContent = txt;
    document.body.appendChild(newElement);
}

function fun2(){
    // const memes = "C:\Users\kemer\OneDrive\Desktop\New folder (5)\Memes\Romantic-Pick-Up-Lines-6.jpg";
    const imgs = ["Memes/m1.jpg","Memes/m2.jpg","Memes/m3.jpg","Memes/m4.jpg","Memes/m5.jpg"];
    const newElement = document.createElement("img");
    const rnd = Math.floor(Math.random()*5)
    newElement.setAttribute("src",imgs[rnd]);
    newElement.setAttribute("width","300px");
    const container = document.querySelector(".memss")
    container.appendChild(newElement);
    console.log(rnd);
}
function we(){
    const ourpic = ["us/k1.jpg","us/k2.jpg","us/k3.jpg","us/k4.jpg","us/k5.jpg","us/k6.jpg","us/k7.jpg","us/k8.jpg","us/k9.jpg","us/k10.jpg","us/k11.jpg","us/k12.jpg","us/k13.jpg","us/k14.jpg","us/k15.jpg","us/k16.jpg","us/mohBG.jpg","us/mohpro.jpg",];
    const newImg = document.createElement("img");
    const rnd = Math.floor(Math.random()*(ourpic.length))
    newImg.setAttribute("src",ourpic[rnd]);
    newImg.setAttribute("width","300px");
    const container2 = document.querySelector(".memss2")
    container2.appendChild(newImg);
    console.log(rnd);
}
function sup(){
   const text = "Not surprise anymore coz i told u kdm😭 ,u got scholarship in UOP....congrats habibi🎉🎉🎉  welcome mate,cls will start on Aug27  " ;
   const sthh = document.createElement("p");
   sthh.textContent = text;
   document.body.appendChild(sthh);
   var link = document.createElement("a");
link.setAttribute("href", "https://your.uopeople.edu/login");
link.innerHTML = "Link";
document.body.appendChild(link);
const text2 = "click the above link ☝️   use email: mohibro37@yahoo.com  password: Moha@58335833  " ;
   const sthh2 = document.createElement("p");
   sthh2.textContent = text2;
   document.body.appendChild(sthh2);

}

function doo(){
    // const memes = "C:\Users\kemer\OneDrive\Desktop\New folder (5)\Memes\Romantic-Pick-Up-Lines-6.jpg";
    const imgs = ["duaa/OIP (1).jpeg","duaa/OIP (2).jpeg","duaa/OIP.jpeg","duaa/R (1).jpeg","duaa/R (2).jpeg","duaa/R (3).jpeg","duaa/R (4).jpeg","duaa/R (5).jpeg","duaa/R (6).jpeg","duaa/R.jpeg"];
    const newElement = document.createElement("img");
    const rnd = Math.floor(Math.random()*(imgs.length));
    newElement.setAttribute("src",imgs[rnd]);
    newElement.setAttribute("width","300px");
    const container = document.querySelector(".memss4");
    container.appendChild(newElement);
    console.log(rnd);
}
function funny(){
    // const memes = "C:\Users\kemer\OneDrive\Desktop\New folder (5)\Memes\Romantic-Pick-Up-Lines-6.jpg";
    const imgs = ["funny/f1.jpg","funny/f2.jpg","funny/f3.jpg","funny/f4.jpg","funny/f5.jpg","funny/f6.jpg","funny/f7.jpg","funny/f8.jpg","funny/f9.jpg","funny/f10.jpg"];
    const newElement = document.createElement("img");
    const rnd = Math.floor(Math.random()*(imgs.length))
    newElement.setAttribute("src",imgs[rnd]);
    newElement.setAttribute("width","300px");
    const container = document.querySelector(".memss5")
    container.appendChild(newElement);
    console.log(rnd);
}



