import React from 'react'

const Button = props => {
    console.log('Button Component Rendered')
    return(
        <div className="button-wrapper">
            <button className="add-item" onClick={()=>{
                if(props.checkItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs,img: props.img, calories: props.calories}) === false){
                    props.addItem({name:props.name,fat:props.fat,protein:props.protein,carbs:props.carbs, img: props.img, calories: props.calories})
                }
            }}>{props.name}</button>
        </div>
    )
}
export default React.memo(Button)