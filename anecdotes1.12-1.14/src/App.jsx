import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


const Display = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.votes[props.selected]} votes</p>
      <Button onClick={props.vote} text="vote"/>
      <Button onClick={props.randAnecdote} text="next anecdote"/>
      <h1>Anecdote with the most votes</h1>
      <p>{props.mostVotes(props.anecdotes)}</p>
    </div>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0})


  const randAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
  }

  const vote = () => {
    const copy = {...votes}
    copy[selected] = copy[selected] + 1
    setVotes(copy)
  }

  const mostVotes= (anecdotes) => {
    let  currentLeader = "No votes cast yet"
    let mostVotes = 0
    for(let i = 0; i < anecdotes.length; i += 1) {
      if (votes[i] > mostVotes) {
        currentLeader = anecdotes[i]
        mostVotes = votes[i]
      }
    }
    return (currentLeader)
  }
  return (
    <Display randAnecdote={randAnecdote} anecdotes={anecdotes} selected={selected} vote={vote} votes={votes} mostVotes={mostVotes}/>
  )
}

export default App