let strong=document.querySelectorAll("strong");
let a=document.querySelector("a");
function highlight() {
    //Write your code here
    
     strong.forEach((item) => {
        a.addEventListener("mouseover",() => {
            item.style.color="rgb(0, 128, 0)"
        });
     });

}


function return_normal() {
    //Write your code here
      strong.forEach((item) => {
        a.addEventListener("mouseout",() => {
            item.style.color="rgb(0, 0, 0)";
        });
     });
    
}
