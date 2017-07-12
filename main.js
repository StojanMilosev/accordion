//get accordion element through class name
var accordion  = document.getElementsByClassName("accordion");

for(var i =0;i<accordion.length;i++){
    accordion[i].onclick = function(){
        this.classList.toggle("active");
    }
} 