import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>
    {props.text}
    </button>
}

const Total = ({total}) => <td>{total}</td>

const Statistics = ({good, bad, total}) => {
  const positive = (value, total) => `${value / total * 100}%` 
  const average = (good, bad, total) => (good + (bad * -1)) / total

  return (
    <>
      <tr>
        <StatisticLine text='average' value={average(good, bad, total)}/>
      </tr>
      <tr>
        <StatisticLine text='positive' value={positive(good, total)}/>
      </tr>
    </>
  )
}

const StatisticLine = ({text, value}) => {
return (
  <>
    <td>{text}</td> 
    <td>{value}</td>
  </>
)
}

const Display = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (
      <>No feedback given</>
    )
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <Total total={total}/>
        </tr>
        <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)

  const handleNeutral = () => setNeutral(neutral + 1)

  const handleBad = () => setBad(bad + 1)

  const total = good + neutral + bad

return (
    <div>
      <h1>give feedback</h1>
      <div>
      <Button onClick={handleGood} text={"good"}/>
      <Button onClick={handleNeutral} text={"neutral"}/>
      <Button onClick={handleBad} text={"bad"}/>
      </div>
      <h1>statistics</h1>
      <Display good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App

