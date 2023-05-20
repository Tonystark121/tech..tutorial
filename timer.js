class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;

        if(callbacks){
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
        
        // here we are string input data in class and using in tick func using referrencing by this operator.
        // this.timeleft =  30;

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click',this.pause)

    }
    start = () => {
        this.tick();    
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
        this.intervalId=setInterval(this.tick, 50);
        // console.log(timer)
        // clearInterval(timer)

    }

    pause = () => {
        clearInterval(this.intervalId)
    }

    //  importantMethod () {
    //     console.log('Fuck this shit.')
    // }
    tick = () => {

        // this.timeleft-=1;
        // this.durationInput.value = this.timeleft
        // console.log('tick')
        // const timeRemaining = this.timeRemaining
        // this.timeRemaining = timeRemaining-1;
        if(this.timeRemaining<=0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemaining -= 0.05;
            if(this.onTick){
                this.onTick(this.timeRemaining)
            }
        }
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time){
        this.durationInput.value = time.toFixed(2);
        return this.durationInput.value
    }
}
let duration;
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)

// making class equal to some variable.
const timer = new Timer (durationInput,startButton,pauseButton,{
    onStart(totalDuration){
        duration=totalDuration
    },
    onTick(timeRemaining){
        // console.log('Time is decreased by one')
        circle.setAttribute('stroke-dashoffset', 
        timeRemaining*perimeter / duration-perimeter
        );
        

    },
    onComplete(){
        console.log('Timer has completed')
        const audio = document.querySelector('#alarmMusic');
        audio.play();
    }
})
