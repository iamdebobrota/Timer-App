import './Styles/Display.css';
import ConvertTime from '../Logic/ConvertTime';


export default function Display({ value }) {
    return <h1 className='TimerDisplay'>{ ConvertTime(value) }</h1>;
}