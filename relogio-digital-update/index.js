const horaElement = document.getElementById("hora");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");
const ampmElement = document.getElementById ("ampm");

function updateRelogio(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12){
        h = h- 12
        ampm = "PM"
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    horaElement.innerText = h;
    minutosElement.innerText = m;
    segundosElement.innerText = s;
    ampmElement.innerText = ampm;
    setTimeout(()=>{
        updateRelogio()
    },1000)
}

updateRelogio()