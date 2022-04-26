import "./App.css";
import Input from "./Components/Input";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import { useState, useEffect } from "react";

export default function App() {
    let [inputValue, setInputValue] = useState(0);
	let [isStarted, setIsStarted] = useState(false);
	let [, setIsStopped] = useState(true);
	let [, setIsReseted] = useState(true);

	useEffect(()=>{
		if(isStarted){
			if(inputValue > 0){
				let intervalID = setInterval(() => {
					setInputValue(inputValue - 1);
				}, 1000);
				return () => clearInterval(intervalID);
			} else if (inputValue === 0) {
				setIsStarted(false);
				setIsStopped(true);
				setIsReseted(true);
				alert('Finished!');
			}
		}
	}, [inputValue, isStarted]);

    function onchange(e) {
		if (!isStarted) setInputValue(+e.target.value);
    }

    function start() {
		if (inputValue > 0){
			setIsStarted(true);
			setIsStopped(false);
			setIsReseted(false);
		}
    }
	function stop() {
		if (inputValue > 0){
			setIsStarted(false);
			setIsStopped(true);
			setIsReseted(false);
		}
	}
	function reset() {
		if (inputValue > 0){
			setIsStarted(false);
			setIsStopped(false);
			setIsReseted(true);
			setInputValue(0);
		}
	}

    return (
		<>
		<div className="AppContainer">
		
			<h1 className="heading">Debu's Timer </h1>
			<div className="App">
				<Input 
					changeHandler={onchange} 
					value={inputValue} 
					isStarted={isStarted} 
				/>
				<Display value={inputValue} />
				<Buttons 
					start={start} 
					stop={stop} 
					reset={reset} 
				/>
			</div>
		</div>
		</>
    );
}
