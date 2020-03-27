import React, {useState} from 'react';

const style = {
    timer: {
        fontSize: 36
    }
}

function StopWatch() {

    const [elapsed, setElapsed] = useState(0)

    const getMillisecond = () => {
        return ('0' + elapsed * 100).slice(-2);
    }
    const getSecond = () => {
        return ('0' + elapsed % 60).slice(-2);
    }
    const getMinute = () => {
        return ('0' + Math.floor(elapsed / 60)).slice(-2);
    }


    return (
        <div>
            <div style={style.timer}>{getMinute()}:{getSecond()}:{getMillisecond()}</div>
        </div>
    );
}


export default StopWatch;

