document.getElementById("password").addEventListener("input", adjustPassword);
let passwords = [];
let isValid = false;
function savePassword(e) {
    const a = document.getElementById('password').value;
    if (isNewPassword(a) && isValid){
        passwords.push(a);
        document.getElementById('resultado').innerText = "Senha salva! Redirecionando..."
        setTimeout(()=>{
            window.location.href = "logado.html"
            console.log("Aguardando 1 segundo")
        }, "5000")
    }
    else if (!isNewPassword(a))
        document.getElementById('resultado').innerText = "Essa senha já existe"
    else if (!isValid)
        document.getElementById('resultado').innerText = "Essa senha não é valida"
}
function adjustPassword(e){
    if(passwordValidate(e.target.value)){
        document.getElementById('resultado').innerText = "Senha valida!"
    }
}
function passwordValidate(password) {
    var Number = hasNumber(password);
    var UpperCase = hasUpperCase(password);
    var LowerCase = hasLowerCase(password);
    var TheMinimumValue = hasTheMinimumValue(password);
    var SpecialsChars = hasSpecialsChars(password);
    return Number && UpperCase && LowerCase && TheMinimumValue && SpecialsChars; 
}

function hasNumber(password) {
    if (/\d/.test(password))
        document.getElementById("num").style.color = "green";
    else
        document.getElementById("num").style.color = "red";
    return /\d/.test(password);
}
function hasUpperCase(password) {
    if (/[A-Z]/.test(password))
        document.getElementById("mai").style.color = "green";
    else
        document.getElementById("mai").style.color = "red";
    return /[A-Z]/.test(password);
}
function hasLowerCase(password) {
    if (/[a-z]/.test(password))
        document.getElementById("minu").style.color = "green";
    else
        document.getElementById("minu").style.color = "red";
    return /[a-z]/.test(password)
}
function hasTheMinimumValue(password) {
    if (password.length >= 8){
        document.getElementById("min").style.color = "green";
        return true;
    }
    else{
        document.getElementById("min").style.color = "red";
        return false;
    }
}
function hasSpecialsChars(password) {
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password))
        document.getElementById("esp").style.color = "green";
    else
        document.getElementById("esp").style.color = "red";
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
}
function isNewPassword(password) {
    return !passwords.includes(password);
}

module.exports = {passwordValidate}