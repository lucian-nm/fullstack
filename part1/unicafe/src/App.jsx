import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick = {onClick}> {text} </button>
const StatisticsLine = ({title, number}) => <tr><td>{title}</td><td>{number}</td></tr>

const Statistics = ({good, bad, neutral}) => {
  const  all = good + bad + neutral

  if (all === 0) {
    return (
      <>
      <div> No feedback given </div>
      </>
    )
  } else {
    return (
      <table>
        <tbody>
	  <StatisticsLine title = "good" number = {good} />
	  <StatisticsLine title = "neutral" number = {neutral} />
	  <StatisticsLine title = "bad" number = {bad} />
	  <StatisticsLine title = "all" number = {all} />

	  <StatisticsLine title = "average" number = {(good + -1 * bad) / all} />
	  <StatisticsLine title = "positive" number = {good / all} />
      	</tbody>
      </table>
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
      <Button onClick = {handleGood} text = "good" />
      <Button onClick = {handleNeutral} text = "neutral" />
      <Button onClick = {handleBad} text = "bad" />

      <h1> statistics </h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral} />
    </div>
  )
}

export default App
