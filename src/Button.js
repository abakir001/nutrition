import React from 'react'

const Button = props => {
    return(
        <div className="button-wrapper">
            <button className="add-item" onClick={()=>{
<<<<<<< HEAD
                if(props.checkItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs,img: props.img}) === false){
                    props.addItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs, img: props.img})
=======
                if(props.checkItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs,img: props.img, calories: props.calories}) === false){
                    props.addItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs, img: props.img, calories: props.calories})
>>>>>>> 3d9b6e903473052d4be4badd91804e98cecee380
                }
            }}>{props.name}</button>
        </div>
    )
}
export default Button