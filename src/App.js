import React, { useState } from 'react'
import './App.css'
import Button from './Button'
import CountComponent from './CountComponent'
import { Pie } from 'react-chartjs-2'
import CaloryCounter from './CaloryCounter'

const App = () => {
  const [state, setState] = useState({
    fat: 0,
    protein: 0,
    carbs: 0,
    calories: 0,
    countArray: []
  })
  window.state = state
  const setTotal = (fatPayload, proteinPayload, carbsPayload, caloriesPayload) => {
    setState({
      ...state,
      fat: state.fat + fatPayload,
      protein: state.protein + proteinPayload,
      carbs: state.carbs + carbsPayload,
      calories: state.calories + caloriesPayload
    })
  }
  const addItem = item => {
    setState({
      ...state,
      countArray: [...state.countArray, item]
    })
  }
  const deleteItem = (item, fatPayload, proteinPayload, carbsPayload, caloriesPayload) => {
    state.countArray = state.countArray.filter(e => e !== item)
    setState({
      fat: state.fat + fatPayload,
      protein: state.protein + proteinPayload,
      carbs: state.carbs + carbsPayload,
      calories: state.calories + caloriesPayload,
      countArray: state.countArray
    })
  }
  const checkItem = val => {
    return state.countArray.some(item => val.name === item.name)
  }
  return (
    <div className="App">
      <div className="header-wrapper">
        <div className="carbs-block">
          <h2>Carbs Products</h2>
          <Button name="Bread" calories={265} fat={1.9} protein={9} carbs={56.1} img="http://getdrawings.com/free-icon/bread-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Beans" calories={142} fat={0.5} protein={10.8} carbs={25.2} img="http://getdrawings.com/free-icon/beans-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Rice" calories={130} fat={1.2} protein={7.2} carbs={79.5} img="http://getdrawings.com/free-icon/rice-icon-56.png" checkItem={checkItem} addItem={addItem} />
        </div>
        <div className="protein-block">
          <h2>Protein Products</h2>
          <Button name="Meat" calories={185} fat={7.4} protein={29.5} carbs={0} img="http://getdrawings.com/free-icon/meat-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Chicken" calories={122} fat={4.4} protein={20.4} carbs={0} img="http://getdrawings.com/free-icon/chicken-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Fish" calories={103} fat={2.9} protein={19.1} carbs={0} img="http://getdrawings.com/free-icon/fish-icon-56.png" checkItem={checkItem} addItem={addItem} />
        </div>
        <div className="fat-block">
          <h2>Fat Products</h2>
          <Button name="Milk" calories={67} fat={3.8} protein={3.3} carbs={4.7} img="https://cdn3.iconfinder.com/data/icons/drinks-food/100/milk-512.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Banana" calories={79} fat={0.3} protein={1.1} carbs={19.2} img="http://getdrawings.com/free-icon/banana-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Egg" calories={158} fat={11.5} protein={13} carbs={0.4} img="http://getdrawings.com/free-icon/egg-icon-56.png" checkItem={checkItem} addItem={addItem} />
        </div>
      </div>
      <div className="total">
        <h2>Total: Fat:<span className="fat-span">{state.fat < 0 ? 0 : state.fat.toFixed(2)}</span>, Protein:<span className="protein-span">{state.protein < 0 ? 0 : state.protein.toFixed(2)}</span>, Carbs:<span className="carbs-span">{state.carbs < 0 ? 0 : state.carbs.toFixed(2)}</span></h2>
      </div>
      <div className="inline">
        <div className="counter-wrapper">
          {state.countArray.map(item => <CountComponent img={item.img}
            name={item.name} fat={item.fat} protein={item.protein} carbs={item.carbs}
            calories={item.calories} setTotal={setTotal} deleteItem={deleteItem} item={item}
          />)}
        </div>
        <div className="piechart">
          <Pie
            data={{
              labels: ['Fats', 'Protein', 'Carbs',],
              datasets: [
                {
                  backgroundColor: [
                    '#b80000',
                    '#1273de',
                    '#fccb00'
                  ],
                  hoverBackgroundColor: [
                    '#eb9694',
                    '#c4def6',
                    '#fef3bd'
                  ],
                  data: [state.fat, state.protein, state.carbs]
                }
              ]
            }}
          />
        </div>
      </div>
      <CaloryCounter calories={state.calories} />
    </div>
  )
}
export default App