let strong=document.querySelectorAll("strong");

function highlight() {
    //Write your code here
    
     strong.forEach((item) => {
        item.addEventListener("mouseover",() => {
            item.style.color="rgb(0, 128, 0)"
        });
     });

}


function return_normal() {
    //Write your code here
      strong.forEach((item) => {
        item.addEventListener("mouseout",() => {
            item.style.color="rgb(0, 0, 0)";
        });
     });
    
}
