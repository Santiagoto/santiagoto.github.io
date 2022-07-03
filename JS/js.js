const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
})

(function(){
    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');
    var validarNombre = function(e){
        if(formulario.nombre.value == 0) {
            alert("Completa el campo nombre")
            e.preventDefault();
        }
    };
    var validarEmail = function(e) {
        if(formulario.email.value == 0){
            alert("Completa el campo email")
            e.preventDefault();
        }
    };
    var validarContraseña = function(e) {
        if(formulario.contraseña.value == 0){
            alert("Completa el campo contraseña")
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarEmail(e);
        validarContraseña(e);
    };
    formulario.addEventListener('submit', validar);
}())