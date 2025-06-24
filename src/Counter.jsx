import React, { useReducer } from 'react';

// const initialState = 0;

const reducer = (state, action) => {
    switch (action.operation) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
};

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    // const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch({ operation: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ operation: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ operation: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;
