import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if(props.good + props.neutral + props.bad === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }else{
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
          <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.bad + props.neutral)} />
          <StatisticLine text="positive" value={props.good * 100 / (props.good + props.bad + props.neutral)} />
        </tbody>
      </table>
    )
  }
}

const StatisticLine = (props) => {
  if(props.text === "positive"){
    return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}%</td>
      </tr>
    )
  }else{
    return(
      <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App