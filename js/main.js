let abrirCerrar= 0;
function nav (){
    if(abrirCerrar === 0){
        document.getElementById("openClose").style.display="block";
        abrirCerrar = 1;
    }else{
        document.getElementById("openClose").style.display="none";
        document.getElementById("openClose").style.display=null;
        abrirCerrar = 0;
    }
    
}