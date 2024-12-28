let myLanding = document.querySelector(".landing");
let nextBtn = document.querySelector(".landing .fa-angle-double-right");
let prevBtn = document.querySelector(".landing .fa-angle-double-left");
let myList = document.querySelector(".list");
let myLis = document.querySelectorAll(".list li");
let SliderIndex = 1 ;

let MyContent = [
    {
        urlImage : "imgs/imageSlider-1.jpg",
    },
    {
        urlImage : "imgs/imageSlider-2.jpg",
    },
    {
        urlImage : "imgs/imageSlider-3.jpg",
    },
    {
        urlImage : "imgs/imageSlider-4.jpg",
    },
    {
        urlImage : "imgs/imageSlider-5.jpg",
    }
]




let myPage = document.querySelector('[lang="en"]');
if (myPage.getAttribute('dir') === "ltr"){
    nextBtn.onclick = sliderNext;
    prevBtn.onclick = sliderPrev;
}else{
    nextBtn.onclick = sliderPrev;
    prevBtn.onclick = sliderNext;
}


function sliderNext(){
    SliderIndex++;
    if(SliderIndex > MyContent.length){
        SliderIndex = 1
    }
    theShecker();
}

function sliderPrev(){
    SliderIndex--;
    if(SliderIndex < 1){
        SliderIndex = MyContent.length ;
    }
    theShecker();
}

myLis.forEach((li) =>{
    li.addEventListener("click" , (e)=>{
        SliderIndex = parseInt(e.target.getAttribute("data-index"));
        theShecker();
    })
})

function theShecker(){
    myLis.forEach((li) =>{
        li.classList.remove("active");
    })

    myLanding.style.backgroundImage = `url(${MyContent[SliderIndex -1].urlImage})`;

    myList.children[SliderIndex - 1].classList.add("active");
}
theShecker();

// portfolio
let myLiss = document.querySelectorAll(".portfolio .links li");
let iteams = document.querySelectorAll(".portfolio .box");
myLiss.forEach(li =>{
    li.addEventListener("click", (e)=>{
        //remove class active all ele
        myLiss.forEach(li =>{
            li.classList.remove("active");
        });
        //add class active on ele current
        e.target.classList.add("active");

        iteams.forEach(iteam =>{
            iteam.style.display = "none";
        });

        document.querySelectorAll(e.target.dataset.cat).forEach(el =>{
            el.style.display = "block";
        });
    })
});






// btnScroll Top
let btnScrollUp = document.querySelector(".btn-backUp");

window.addEventListener("scroll" , () =>{
    if(scrollY >= 600){
        btnScrollUp.style.display = "block"
    }else{
        btnScrollUp.style.display = "none"
    }
})

btnScrollUp.addEventListener("click" , ()=>{
    window.scrollTo({
        top : 0 ,
        left : 0 ,
        behavior : "smooth",
    })
})



// getFullYear Denamic
let myYear = document.getElementById("fullYear");
let dateNow = new Date();
let yearNow = dateNow.getFullYear();
myYear.innerHTML = yearNow;






















