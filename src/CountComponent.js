import React, { useState } from 'react'

const CountComponent = (props) => {
    const [weight, setWeight] = useState(0)
    return (
        <div className="count-block">
            <div className="inline button">
                <h3>{props.name}</h3>
                <button
                    onClick={() => {
                        setWeight(weight + 100)
                        props.setTotal(props.calorie,props.protein,props.carbs)
                    }
                    }
                >+</button>
                <button
                    onClick={() => {
                        if (weight > 0) {
                            setWeight(weight - 100)
                            props.setTotal(-props.calorie,-props.protein, -props.carbs )
                        }
                    }
                    }
                >-</button>
                <h3>Weight: {weight}</h3>
                <button onClick={
                    () => {
                        props.deleteFunc(props.item)
                        props.setTotal(-props.calorie * weight / 100,-props.protein * weight / 100,-props.carbs * weight / 100)
                    }
                }>Delete</button>
            </div>
            <div className="inline">
                <h3>Calorie: {parseInt(props.calorie * weight / 100)}</h3>
                <h3>Protein: {parseInt(props.protein * weight / 100)}</h3>
                <h3>Carbs: {parseInt(props.carbs * weight / 100)}</h3>
            </div>
        </div>
    )
}

export default CountComponent