const user = document.getElementById("usuario")
const pass = document.getElementById("contra")
const login = document.getElementById("login")
login.addEventListener("click", (e) => {
    e.preventDefault()
    const datos = {
    user: user.value,
    pass: pass.value
   
}
usuario = user.value
contrasena = pass.value
console.log(usuario)
console.log(contrasena)
console.log(datos)
if (usuario==="Coder" && contrasena==="123") {
    window.location.href = "./pages/casino.html";
}
else {
    Swal.fire({
        icon: 'error',
        text: "Usuario o contraseña incorrectas.",
        background: 'rgba(0, 0, 0, 0.70)',
        color: 'white',  
        confirmButtonColor: '#01e7a6',
      });
      console.log("error")
}
}

)
