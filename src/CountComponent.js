import React, { useState } from 'react'

const CountComponent = props => {
    const [weight, setWeight] = useState(0)
    return (
        <div className="counter-item">
            <div>
                <img alt={props.name} src={props.img}/>
            </div>
            <div>
                <h3>{props.name}</h3>
            </div>
            <div className="plus-minus-block">
                <button onClick={() => {
                    setWeight(weight + 100)
<<<<<<< HEAD
                    props.setTotal(props.fat, props.protein, props.carbs)
=======
                    props.setTotal(props.fat, props.protein, props.carbs, props.calories)
>>>>>>> 3d9b6e903473052d4be4badd91804e98cecee380
                }}>+</button>
                <button onClick={() => {
                    if (weight > 0) {
                        setWeight(weight - 100)
<<<<<<< HEAD
                        props.setTotal(-props.fat, -props.protein, -props.carbs)
=======
                        props.setTotal(-props.fat, -props.protein, -props.carbs, -props.calories)
>>>>>>> 3d9b6e903473052d4be4badd91804e98cecee380
                    }
                }}>-</button>
            </div>
            <div className="weight-block">
                <h4>Weight: {weight}</h4>
            </div>
            <div className="data">
                <h4>Fat:{props.fat * weight / 100}, Protein:{props.protein * weight / 100}, Carbs:{props.carbs * weight / 100}</h4>
            </div>
            <div className="delete-block">
                <button
                    onClick={()=>{
<<<<<<< HEAD
                        props.deleteItem(props.item)
                        props.setTotal(-props.fat * weight / 100, -props.protein * weight / 100, -props.carbs * weight / 100)
=======
                        props.deleteItem(props.item,-props.fat * weight / 100, -props.protein * weight / 100, -props.carbs * weight / 100, -props.calories * weight / 100)
>>>>>>> 3d9b6e903473052d4be4badd91804e98cecee380
                    }}
                >Delete</button>
            </div>
        </div>
    )
}

export default CountComponent