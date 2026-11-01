import Student from "./Student"

const Props = () => {

  const name = "Mahesh"
  const age = 21
  const course = "react"
  return (
    <>
    <div>
      <Student name = {name} age = {age} course = {course}/>
    </div>
    </>
  )
}

export default Props