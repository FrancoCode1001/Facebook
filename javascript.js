window.onload=mostrar;
function mostrar(){
    var btnLogin = document.getElementById('btnLogin');
    btnLogin.addEventListener('click', Saludos);
}
function Saludos(){
    alert('Hola, Gracias por probar mi codigo')
}