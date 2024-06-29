import Select from "react-select";
import { NumberInput } from "./NumberInput";
import { Result } from "./Result";
import { calculate, operations } from "../utils/calculator";
import { useState } from "react";





export function CalculatorForm() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const [result, setResult] = useState(null);




    const inovice = useState({
        inoviceNumber: "",


    })

    function handleNumber1Change(e) {
        setNumber1(e.target.value);
    }

    function handleNumber2Change(e) {
        setNumber2(e.target.value);
    }

    function handleOperationChnage(value) {
        setOperation(value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        setResult(calculate(parseInt(number1),  parseInt(number2), operation.value))
    }
    
    return (
        <div>
            <h1>Kalkulačka 🔢</h1>
            <form onSubmit={handleSubmit}>
            <Select options={operations} value={operation} onChange={handleOperationChnage}/>
            
            <NumberInput label={"Číslo 1"} name={"x"} value={number1} onChange={handleNumber1Change}/>
            <NumberInput label={"Číslo 2"} name={"y"} value={number2} onChange={handleNumber2Change}/>
                <button>
                    Spočítej
                </button>

                <button type="button" >
                    Zavření modalu
                </button>
            </form>

            <Result result={result}/>

         
        </div>
    )
}