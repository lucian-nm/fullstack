import { useState } from 'react'

const Statistics = ({good, bad, all}) => {

  if (all === 0) {
    return (
      <>
      <div> all {all} </div>
      <div> average  </div>
      <div> postive </div>
      </>
    )
  } else {
    return (
      <>
      <div> all {all} </div>
      <div> average  {(good + -1 * bad) / all}</div>
      <div> postive  {good / all }</div>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => {
	  const updatedGood = good + 1
	  const all = updatedGood + bad + neutral

	  setGood(updatedGood)
	  setAll(all)

  }
  
  const handleNeutral = () => {
	  const updatedNeutral = neutral + 1
	  const all = good + bad + updatedNeutral

	  setNeutral(updatedNeutral)
	  setAll(all)

  }

  const handleBad = () => {
	  const updatedBad = bad + 1
	  const all = updatedBad + neutral + good

	  setBad(updatedBad)
	  setAll(all)
  }

  
  return (
    <div>
      <h1> give feedback </h1>
      <button onClick = {handleGood}> good </button>
      <button onClick = {handleNeutral}> neutral </button>
      <button onClick = {handleBad}> bad </button>

      <h1> statistics </h1>
      <div> good {good} </div>
      <div> neutral {neutral} </div>
      <div> bad {bad} </div>
      <Statistics good = {good} bad = {bad} all = {all} />
    </div>
  )
}

export default App
