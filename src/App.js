import React, { useState } from 'react'
import './App.css'
import CountComponent from './CountComponent'

const App = () => {
  const [state, setState] = useState({
    calorie: 0,
    protein: 0,
    carbs: 0,
    productArray: []
  })
  const setTotal = (caloriePaylaod, proteinPayload, carbsPayload) => {
    setState({
      ...state,
      calorie: state.calorie + caloriePaylaod,
      carbs: state.carbs + carbsPayload,
      protein: state.protein + proteinPayload
    })
  }
  const deleteItem = (item) => {
    state.productArray = state.productArray.filter(e => e !== item)
    setState({
      ...state,
      productArray: state.productArray
    })
  }
  const handleCheck = (val) => {
    return state.productArray.some(item => val.name === item.name);
}
  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="product-type">
          <h2>Carbos</h2>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Bread',calorie: 265,protein: 9,carbs: 49}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Bread',
                      calorie: 265,
                      protein: 9,
                      carbs: 49
                    }]
                  })
                }
              }}
            >Bread</button>
          </div>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Pasta',calorie: 131,protein: 5,carbs: 25}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Pasta',
                      calorie: 131,
                      protein: 5,
                      carbs: 25
                    }]
                  })
                }
              }}
            >Pasta</button>
          </div>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Rice',calorie: 130,protein: 2.4,carbs: 29}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Rice',
                      calorie: 130,
                      protein: 2.4,
                      carbs: 29
                    }]
                  })
                }
              }}
            >Rice</button>
          </div>
        </div>
        {/* Second block */}
        <div className="product-type">
          <h2>Protein</h2>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Meat',calorie: 143,protein: 26,carbs: 0}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Meat',
                      calorie: 143,
                      protein: 26,
                      carbs: 0
                    }]
                  })
                }
              }}
            >Meat</button>
          </div>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Chicken',calorie: 239,protein: 27,carbs: 0}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Chicken',
                      calorie: 239,
                      protein: 27,
                      carbs: 0
                    }]
                  })
                }
              }}
            >Chicken</button>
          </div>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Fish',calorie: 150,protein: 26,carbs: 0}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Fish',
                      calorie: 150,
                      protein: 26,
                      carbs: 0
                    }]
                  })
                }
              }}
            >Fish</button>
          </div>
        </div>
        {/* Third block */}
        <div className="product-type">
          <h2>Dairy Product</h2>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Milk',calorie: 42,protein: 3.4,carbs: 5}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Milk',
                      calorie: 42,
                      protein: 3.4,
                      carbs: 5
                    }]
                  })
                }
              }}
            >Milk</button>
          </div>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Cheese',calorie: 371,protein: 25,carbs: 1.3}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Cheese',
                      calorie: 371,
                      protein: 25,
                      carbs: 1.3
                    }]
                  })
                }
              }}
            >Cheese</button>
          </div>
          <div className="product-item">
            <button className="menu-button"
              onClick={() => {
                if(handleCheck({name: 'Cottage Cheese',calorie: 98,protein: 11,carbs: 3.4}) === false){
                  setState({
                    ...state, productArray: [...state.productArray, {
                      name: 'Cottage Cheese',
                      calorie: 98,
                      protein: 11,
                      carbs: 3.4
                    }]
                  })
                }
              }}
            >Cottage Cheese</button>
          </div>
        </div>
      </div>
      <div className="total">
        <h3>Total:</h3>
        <h3>Calorie: {state.calorie < 0 ? (0) : (parseInt(state.calorie))}</h3>
        <h3>Protein: {state.protein < 0 ? (0) : (parseInt(state.protein))}</h3>
        <h3>Carbs: {state.carbs < 0 ? (0) : (parseInt(state.carbs))}</h3>
      </div>
      <div className="product-wrapper">
        {state.productArray.map(item => <CountComponent
         item={item} name={item.name}
          calorie={item.calorie} protein={item.protein}
           carbs={item.carbs} deleteFunc={deleteItem}
           setTotal={setTotal}/>)}
      </div>
    </div>
  )
}
export default App