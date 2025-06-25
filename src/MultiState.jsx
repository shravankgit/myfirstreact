
import React, { useReducer, useEffect } from 'react'

// type

const FETCH_INIT = "FETCH_INIT"
const FETCH_START = "FETCH_START"
const FETCH_ERROR = "FETCH_ERROR"

const initialstate = {
    loading: true,
    data: null,
    error: null
}

const dateReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return { ...state, loading: true, error: null }
        case FETCH_START:
            return { ...state, loading: false, data: action.payload }
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

const MultiState = () => {
    const [state, dispatch] = useReducer(dateReducer, initialstate)

    const dataHandlear = async () => {
        try {
            dispatch({ type: FETCH_INIT })
            const respose = await fetch("https://jsonplaceholder.typicode.com/users")
            const newData =  await respose.json()
            dispatch({ type: FETCH_START, payload: newData })
        } catch (error) {
            dispatch({ type: FETCH_ERROR })
        }
    }

    useEffect(() => {
        console.log(dataHandlear());
    }, [])


    return (
        <div>
            {state.loading && <p>Loading</p>}
            {
                state.data && (
                    <div>
                        {state.data.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h2>{item.name}</h2>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            {state.error && <div> {alert(state.error)} </div>}
            
        </div>
    )
}

export default MultiState