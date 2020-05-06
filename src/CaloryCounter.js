import React, { useState } from 'react';
import './App.css';
import InputItem from './Input';
import {Bar} from 'react-chartjs-2'

const CaloryCounter = props => {
  const [state, setState] = useState({
    calories: '0',
    weight: '0',
    caloryArray: null
  })

  const handleSportChange = event => {
    setState({ ...state, caloryArray: event.target.value })
  }
  const handleWeightChange = event => {
    setState({ ...state, weight: event.target.value })
  }

  const setSubmit = event => {
    event.preventDefault()
    if (state.caloryArray !== null && state.weight !== 0) {
      switch (state.weight) {
        case '130':
          setState({ ...state, calories: state.caloryArray.split(',')[0] })
          break
        case '155':
          setState({ ...state, calories: state.caloryArray.split(',')[1] })
          break
        case '180':
          setState({ ...state, calories: state.caloryArray.split(',')[2] })
          break
        case '205':
          setState({ ...state, calories: state.caloryArray.split(',')[3] })
          break
        default:
          break
      }
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Sport Calory Counter</h1>
      </header>
      <div className="inputs">
        <form onSubmit={event => setSubmit(event)}>
          <div className="kind-sport">
            <InputItem name="Running" value="502, 510, 520, 525" handleChange={handleSportChange} type="sport" />
            <InputItem name="Boxing" value="520, 530, 545, 560" handleChange={handleSportChange} type="sport" />
            <InputItem name="Cycling" value="500, 515, 520, 540" handleChange={handleSportChange} type="sport" />
            <InputItem name="Aerobic" value="480, 495, 510, 520" handleChange={handleSportChange} type="sport" />
            <InputItem name="Soccer" value="495, 505, 520, 525" handleChange={handleSportChange} type="sport" />
          </div>
          <div className="weight-block">
            <InputItem name="130 and less" value={130} handleChange={handleWeightChange} type="weight" />
            <InputItem name="130-155" value={155} handleChange={handleWeightChange} type="weight" />
            <InputItem name="155-180" value={180} handleChange={handleWeightChange} type="weight" />
            <InputItem name="180-205" value={205} handleChange={handleWeightChange} type="weight" />
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div>
        <h2>Calories: {state.calories}</h2>
      </div>
      <div className="bar-chart">
        <Bar 
            data={{
                labels: [' ', 'Minus Calories', 'Get Calories', ' '],
                datasets:[
                    {
                        label: 'Calories Data',
                        data:[0, state.calories, props.calories, 0],
                        backgroundColor:[' ', 'red', 'blue']
                    }
                ]
            }}
        />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      </div>
    </div>
  );
}

export default CaloryCounter