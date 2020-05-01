import React from 'react'

const Button = props => {
    return(
        <div className="button-wrapper">
            <button className="add-item" onClick={()=>{
                if(props.checkItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs,img: props.img}) === false){
                    props.addItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs, img: props.img})
                }
            }}>{props.name}</button>
        </div>
    )
}
export default Button