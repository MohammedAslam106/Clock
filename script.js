let presentTime=''
const displaytime=document.getElementById('digital-clock')
const hourHandEle=document.querySelector('.hour-hand')
const minuteHandEle=document.querySelector('.minute-hand')
const secondHandEle=document.querySelector('.second-hand')

let hourHand,minuteHand,secondsHand
function getTime(){
    const hour=new Date().getHours()
    const minute=new Date().getMinutes()
    const seconds=new Date().getSeconds()
    // const seconds=60
    const ampm=hour>=12 ? 'pm' : 'am'
    
    presentTime=(hour%12 ? hour%12<=9? ('0'+hour%12) : (hour%12) : 12 )+ ':' + (minute<=9 ? '0' + minute.toString() : minute.toString())  + ':' + (seconds<=9 ? '0' + seconds.toString() : seconds) + ' ' + ampm

    hourHand=hour%12 ? hour%12 : 12 
    minuteHand=minute
    secondsHand=seconds

    
    console.log('seconds',secondHandEle.style.rotate)
    console.log('minutes',minuteHandEle.style.rotate)
    console.log('hour',hourHandEle.style.rotate)

    hourHandEle.style.rotate=(((hourHand-3)*30) + (minuteHand)*0.5).toString()+'deg'
    minuteHandEle.style.rotate=((minuteHand-15)*6).toString()+'deg'
    secondHandEle.style.rotate=((secondsHand-15)*6).toString()+'deg'

    displaytime.innerText=presentTime
}


setInterval(()=>{
    getTime()
},1000)