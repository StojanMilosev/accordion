//preuzimanje elementa sa klasom "accordion"
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    //menjane osobina elementa prilikom klika
    acc[i].onclick = function(){
        //menjane postojanja klase "active" u atributu class="" elementa 
        this.classList.toggle("active");
        //menjane osobina panel elementa koji je sledece dete u odnosu na element accordion
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            //ako je panel prikazan menjanjem osobine display ga sakrivamo
            panel.style.display = "none";
        } else {
            //ako je panel sakriven menjanjem osobine display ga prikazujemo
            panel.style.display = "block";
        }
    }
}