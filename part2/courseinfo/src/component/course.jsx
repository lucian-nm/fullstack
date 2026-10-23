const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    {props.parts.map(part => <Part part={part}/>) }
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ({total}) => (
  <p>
    total of {total} exercise
  </p>
)

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total total = {course.parts.reduce(
        (accumulator, part) => accumulator + part.exercises,
        0)}
      />
    </div>
  )
}
export default Course
