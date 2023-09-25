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
    else if(!isValidUsername(document.getElementById('name').innerText))
        document.getElementById('resultado').innerText = "Por favor, informe um e-mail válido!"
    else if(isNotNull(a))
        document.getElementById('resultado').innerText = "Por favor, informe uma senha!"
    else
        document.getElementById('resultado').innerText = "Essa senha não é valida!"
}
function passwordValidate() {
    let password = document.getElementById('password').value
    var Number = color("num",hasNumber(password));
    var UpperCase = color("mai",hasUpperCase(password));
    var LowerCase = color("minu",hasLowerCase(password));
    var TheMinimumValue = color("min",hasTheMinimumValue(password));
    var SpecialsChars = color("esp",hasSpecialsChars(password));
    var IsNotNull = hasValue(password);
    test = Number && UpperCase && LowerCase && TheMinimumValue && SpecialsChars && IsNotNull; 
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
function hasValue(password){
    return password !== null && password === null;
}

function isValidUsername(username){
    return username !== null && username !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username) ;
}

module.exports = {hasSpecialsChars, hasTheMinimumValue, hasLowerCase, hasNumber, hasUpperCase, hasValue, isValidUsername}