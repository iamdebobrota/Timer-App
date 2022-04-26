import "./Styles/Input.css";
export default function Input({ changeHandler, value, isStarted }) {
    const element = (
        <input
            className="TimerInput"
            type="text"
            autoFocus
            value={value === 0 ? "" : value}
            onChange={changeHandler}
            placeholder='Enter Time in Second'
        />
    );
    return !isStarted && String(value).length > 0 ? element : null;
}
