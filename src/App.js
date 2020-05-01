import React, { useState } from 'react'
import './App.css'
import Button from './Button'
import CountComponent from './CountComponent'
import {Pie} from 'react-chartjs-2'

const App = () => {
  const [state, setState] = useState({
    fat: 0,
    protein: 0,
    carbs: 0,
    countArray: []
  })
  const setTotal = (fatPayload, proteinPayload, carbsPayload) => {
    setState({
      ...state,
      fat: state.fat + fatPayload,
      protein: state.protein + proteinPayload,
      carbs: state.carbs + carbsPayload
    })
  }
  const addItem = item => {
    setState({
      ...state,
      countArray: [...state.countArray, item]
    })
  }
  const deleteItem = item => {
    state.countArray = state.countArray.filter(e => e !== item)
    setState({
      ...state,
      countArray: state.countArray
    })
  }
  const checkItem = val => {
    return state.countArray.some(item => val.name === item.name)
  }
  return (
    <div className="App">
      <div className="header-wrapper">
        <div>
          <h2>Carbs</h2>
          <Button name="Bread" fat={1.9} protein={9} carbs={56.1} img="http://getdrawings.com/free-icon/bread-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Beans" fat={0.5} protein={10.8} carbs={25.2} img="http://getdrawings.com/free-icon/pasta-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Rice" fat={1.2} protein={7.2} carbs={79.5} img="http://getdrawings.com/free-icon/rice-icon-56.png" checkItem={checkItem} addItem={addItem} />
        </div>
        <div>
          <h2>Protein</h2>
          <Button name="Meat" fat={7.4} protein={29.5} carbs={0} img="http://getdrawings.com/free-icon/meat-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Chicken" fat={4.4} protein={20.4} carbs={0} img="http://getdrawings.com/free-icon/chicken-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Fish" fat={2.9} protein={19.1} carbs={0} img="http://getdrawings.com/free-icon/fish-icon-56.png" checkItem={checkItem} addItem={addItem} />
        </div>
        <div>
          <h2>Other Products</h2>
          <Button name="Milk" fat={3.8} protein={3.3} carbs={4.7} img="https://cdn3.iconfinder.com/data/icons/drinks-food/100/milk-512.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Banana" fat={0.3} protein={1.1} carbs={19.2} img="http://getdrawings.com/free-icon/cheese-icon-56.png" checkItem={checkItem} addItem={addItem} />
          <Button name="Egg" fat={11.5} protein={13} carbs={0.4} img="https://previews.123rf.com/images/ylivdesign/ylivdesign1909/ylivdesign190900473/129339216-plate-with-cottage-cheese-icon-outline-plate-with-cottage-cheese-vector-icon-for-web-design-isolated.jpg" checkItem={checkItem} addItem={addItem} />
        </div>
      </div>
      <div className="total">
        <h2>Total: Fat:{state.fat < 0 ? 0 : state.fat}, Protein:{state.protein < 0 ? 0 : state.protein}, Carbs:{state.carbs < 0 ? 0 : state.carbs}</h2>
      </div>
      <div className="inline">
      <div className="counter-wrapper">
          {state.countArray.map(item => <CountComponent img={item.img}
          name={item.name} fat={item.fat} protein={item.protein} carbs={item.carbs}
          setTotal={setTotal} deleteItem={deleteItem} item={item}
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
                  '#fccb00',
                  '#1273de'
                ],
                hoverBackgroundColor: [
                '#eb9694',
                '#fef3bd',
                '#c4def6'
                ],
                data: [state.fat, state.protein, state.carbs]
              }
            ]
          }}
        />
      </div>
      </div>
    </div>
  )
}
export default App