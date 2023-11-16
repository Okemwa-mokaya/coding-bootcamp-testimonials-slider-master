const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const sliderEl = document.querySelector(".slider");

const articlesEl = document.querySelectorAll("article");

let index = 0
display(index)
function display(index){
    articlesEl.forEach(article=>{
        article.style.display = "none";
    });
    articlesEl[index].style.display = "flex";
}

nextEl.addEventListener("click", ()=>{
    index++
    if(index > articlesEl.length - 1){
        index = 0;
     }else if(index < 0){
        index = articlesEl.length - 1;  
     }
    display(index);
});

prevEl.addEventListener("click", ()=>{
    index--
    if(index > articlesEl.length - 1){
        index = 0;
     }else if(index < 0){
        index = articlesEl.length - 1;  
     }
    display(index);
});



