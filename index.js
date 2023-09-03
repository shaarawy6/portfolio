// project clicks
//airbnb
document.querySelector("#airbnb .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Airbnb/","_blank");
});
document.querySelector("#airbnb .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Airbnb/","_blank");
});
//acme
document.querySelector("#acme .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Acme/","_blank");
});
document.querySelector("#acme .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Acme/","_blank");
});
// nasrr
document.querySelector("#nasrr .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Nasrr/","_blank");
});
document.querySelector("#nasrr .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Nasrr/","_blank");
});
// fem1
document.querySelector("#fem1 .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/1.frontendmentor-RSC/","_blank");
});
document.querySelector("#fem1 .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/1.frontendmentor-RSC/","_blank");
});
// fem2
document.querySelector("#fem2 .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/2.frontendmentor-PPCC/","_blank");
});
document.querySelector("#fem2 .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/2.frontendmentor-PPCC/","_blank");
});
// fem3
document.querySelector("#fem3 .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/3.frontendmentor-NIRC/","_blank");
});
document.querySelector("#fem3 .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/3.frontendmentor-NIRC/","_blank");
});
// nike
document.querySelector("#nike .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/NIKE/","_blank");
});
document.querySelector("#nasrr .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/NIKE/","_blank");
});
// weatherapp
document.querySelector("#weatherapp .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Weather-Web/","_blank");
});
document.querySelector("#weatherapp .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/Weather-Web/","_blank");
});
// todolist
document.querySelector("#todolistapp .image").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/to-do-list/","_blank");
});
document.querySelector("#todolistapp .text").addEventListener("click",function(){
    window.open("https://shaarawy6.github.io/to-do-list/","_blank");
});


// image and h2 scale when hover
const projects = document.querySelectorAll(".projects .project");
const image = document.querySelectorAll(".projects .image img");

for(let i = 0; i < projects.length; i++){ 
    projects[i].addEventListener("mouseover",function(){
        image[i].style.transform = "scale(1.05)";
    });
    projects[i].addEventListener("mouseout",function(){
        image[i].style.transform = "scale(1)";
    });

    projects[i].addEventListener("mouseover",function(){
        image[i].style.transform = "scale(1.05)";
    });
    projects[i].addEventListener("mouseout",function(){
        image[i].style.transform = "scale(1)";
    });

}


// add font-awesome animation aand action
const icon = document.querySelectorAll(".icon");

for(let i = 0; i< icon.length; i++){
    icon[i].addEventListener("mouseover",function(){
        icon[i].classList.add("fa-beat");
    });
    icon[i].addEventListener("mouseout",function(){
        icon[i].classList.remove("fa-beat");
    });
    icon[i].addEventListener("click",function clicked(evt){
        if(i == 0){
            window.open("https://www.facebook.com/mohamed.elsharawy6666");
        }
        else if(i == 1){
            window.open("https://www.instagram.com/mohamedshaarawy6/");
        }
        else if(i == 2){
            window.open("https://twitter.com/vfvf967972");
        }
        else if(i == 3){
            window.open("#");
        }
    });
}