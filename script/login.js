function Login(username, password){
  if ((username == 'nome@gmail.com') && (password=='123')) { 
    return true;
  }
  else {
    return false
  }
}

function directionLogin(){
  var username = document.getElementById('name').value
  var password = document.getElementById('password').value

  const isCorrect = Login(username, password);
  if(isCorrect){
    document.getElementById('resultado').innerText = "Logado com sucesso! Redirecionando..."
    setTimeout(()=>{      
      window.location.href = "logado.html"
    }, "3000")
  }
  else{
    alert("Usuário ou Senha inválida!")
  }
}

module.exports = {Login}