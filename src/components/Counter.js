import { useState } from "react"

export function Counter({intialCount}) {
    const [count, setCount] = useState(intialCount)

    function handlePlusClick() {
        setCount(count + 1)
    }

    function handleMinusClick() {
        setCount(count -1)
    }

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={handlePlusClick}>
                +
            </button>

            <button onClick={handleMinusClick}>
                -
            </button>
        </div>
    )
}