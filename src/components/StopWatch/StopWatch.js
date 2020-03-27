import React, {useState} from 'react';

const style = {
    timer: {
        fontSize: 36
    }
}

function StopWatch() {

    const [elapsed, setElapsed] = useState(0)
    const [increment, setIncrement] = useState(0)

    const getMillisecond = () => {
        return ('0' + elapsed * 100).slice(-2);
    }
    const getSecond = () => {
        return ('0' + parseInt(elapsed % 60)).slice(-2);
    }
    const getMinute = () => {
        return ('0' + Math.floor(elapsed / 60)).slice(-2);
    }

    const startTimer = () => {
        setIncrement(
            setInterval(() => {
                setElapsed(elapsed => elapsed + 0.01);
            }, 10)
        )

    }
    const resetTimer = () => {
        setElapsed(0)
    }
    const stopTimer = () => {
        clearInterval(increment);

    }


    return (
        <div>
            <div style={style.timer}>{getMinute()}:{getSecond()}:{getMillisecond()}</div>

            <button type="button"
                    onClick={() => stopTimer()}>Stop
            </button>
            <button type="button"
                    onClick={() => startTimer()}>Start
            </button>
            <button type="button"
                    onClick={() => resetTimer()}>Reset
            </button>
        </div>
    );
}


export default StopWatch;

