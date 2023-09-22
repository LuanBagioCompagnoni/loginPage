let isValid = false;
function savePassword(e) {
    const a = document.getElementById('password').value;
    if (isValid){
        document.getElementById('resultado').innerText = "Registrado com sucesso! Redirecionando..."
        setTimeout(()=>{
            window.location.href = "logado.html"
            console.log("Aguardando 1 segundo")
        }, "3000")
    }
    else
        document.getElementById('resultado').innerText = "Essa senha não é valida"
}
function passwordValidate(e) {
    password = e.target.value;
    var Number = color("num",hasNumber(password));
    var UpperCase = color("mai",hasUpperCase(password));
    var LowerCase = color("minu",hasLowerCase(password));
    var TheMinimumValue = color("min",hasTheMinimumValue(password));
    var SpecialsChars = color("esp",hasSpecialsChars(password));
    test = Number && UpperCase && LowerCase && TheMinimumValue && SpecialsChars; 
    isValid = test;
    return test;
}
function color(element, state){
    if (state)
        document.getElementById(element).style.color = "green";
    else
        document.getElementById(element).style.color = "red";
    return state;
}

function hasNumber(password) {
    return /\d/.test(password);
}
function hasUpperCase(password) {
    return /[A-Z]/.test(password);
}
function hasLowerCase(password) {
    return /[a-z]/.test(password)
}
function hasTheMinimumValue(password) {
    if (password.length >= 8){
        return true;
    }
    else{
        return false;
    }
}
function hasSpecialsChars(password) {
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
}

module.exports = {hasSpecialsChars, hasTheMinimumValue, hasLowerCase, hasNumber, hasUpperCase}