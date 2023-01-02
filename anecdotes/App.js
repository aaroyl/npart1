import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Highest = (props) => {
  let index = 0
  let maximum = 0
  for(let i = 0; i < props.anecdotes.length; i++){
    if(props.points[i] > maximum){
      index = i
      maximum = props.points[i]
    }
  }

  return(
    <div>
      <p>{props.anecdotes[index]}</p>
      <p>has {maximum} votes</p>
    </div>
  )
}

const App = () => {
  const [points, setPoints] = useState(Array(7).fill(0))

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const voteClick = () => {
    const copy = {...points}
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
      <Button handleClick={voteClick} text="vote" />
      <h1>Anecdote with most votes</h1>
      <Highest points={points} anecdotes={anecdotes} />
    </div>
  )
}


export default App
