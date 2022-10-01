let card=document.querySelectorAll("#line3>div");

console.log(card);


card.forEach(function(el){

    el.addEventListener("click",function(){
        buy(el)
    })

})


function buy(){
    console.log("hello");
}