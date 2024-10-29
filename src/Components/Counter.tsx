import React, { useState } from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<String>("name")

    const increment = () => {
        setCount(count + 1)
    }
    const Greeting = () => {
        setName("Hello," + name + "!")

    }
    return (
        <div>
            <h1>Hello,{name}!</h1>
            <h2>{count}</h2>
            <button onClick={increment}>increment</button>
        </div>
    )
}

export default Counter