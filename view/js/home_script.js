function acessar(){
    var user = document.getElementById("cxLogin").value;
    var senha = document.getElementById("cxSenha").value;

    if (user == "gyovanna" || senha == "123"){
        alert("Acesso Permitido");
        window.location.href = "../menu.php";
        
    }else{
        alert("Acesso Negado");
    }

}