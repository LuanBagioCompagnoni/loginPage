function color(element, state){
    if (state)
        document.getElementById(element).style.color = "green";
    else
        document.getElementById(element).style.color = "red";
}

module.exports = {color}