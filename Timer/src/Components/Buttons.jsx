import './Styles/Buttons.css';

export default function Buttons({ start, stop, reset }) {
    return (
        <div className='buttonsContainer'>
            <div className='button start' onClick={start}>Start</div>
            <div className='button stop' onClick={stop}>Stop</div>
            <div className='button reset' onClick={reset}>Reset</div>
        </div>
    );
}
