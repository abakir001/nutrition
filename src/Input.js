import React from 'react'

const InputItem = props => {
    console.log('Input Component Rendered')
    return(
        <div className="input-item">
            <label>
                <input 
                    type="radio"
                    name={props.type}
                    value={props.value}
                    onChange={(event) => {props.handleChange(event)}}
                />
                <span>{props.name}</span>
            </label>
        </div>
    )
}
export default React.memo(InputItem)