const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
    <p> {props.name} {props.exercise} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part name = {props.parts[0].name} exercise = {props.parts[0].exercises} />
    <Part name = {props.parts[1].name} exercise = {props.parts[1].exercises} />
    <Part name = {props.parts[2].name} exercise = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total exercises = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
