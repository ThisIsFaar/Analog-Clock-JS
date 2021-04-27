const secHand = document.querySelector('.second')
const minHand = document.querySelector('.min')
const hourHand = document.querySelector('.hour')
const ip = document.querySelectorAll('.cl input')
console.log(ip);
function setDate() {
    const now  = new Date();
    const sec = now.getSeconds();
    const secDegree = ((sec/60)*360)+90;
    secHand.style.transform = `rotate(${secDegree}deg)`;


    const min = now.getMinutes()
    const minDeg = ((min/60)*360) + 90 
    minHand.style.transform = `rotate(${minDeg}deg)`

    const hour = now.getHours()
    const hourDeg = ((hour/12)*360) + 90
    hourHand.style.transform = `rotate(${hourDeg}deg)`

}
function color() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    
}
ip.forEach(ip => ip.addEventListener('change',color));
setInterval(setDate,1000)