let cerrar = document.querySelectorAll('.btn-close')[0];
let abrir = document.querySelectorAll('.modal-open')[0];
let modal = document.querySelectorAll('.modal-content')[0];
let fondoModal = document.querySelectorAll('.container-section')[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    fondoModal.style.visibility  = "visible";
   
});

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.transform = "translateY(0%)"
    
        
});
/*
cerrar.addEventListener("click", function(e){
    e.preventDefault();
    modal.style.transform = "translateY(-200%)"
    
        
});*/
cerrar.addEventListener('click', function(){
    
    modal.style.transform = "translateY(-200%)"

    setTimeout(function(){
        fondoModal.style.visibility  = "hidden"
    },500)
})
/*
fondoModal.addEventListener('click', function(){
    modal.style.transform = "translateY(-200%)"
    setTimeout(function(){
        fondoModal.style.visibility  = "hidden"
        },500)
})*/