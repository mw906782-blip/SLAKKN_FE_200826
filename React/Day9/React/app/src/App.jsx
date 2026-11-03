import React from "react"
import Student from "./components/Student"


const App = () => {
  const Students = [{name: "Mahesh",age: 21,course: "React JS"},
    {name: "Deepak",age: 20,course: "React JS"},
    {name: "Sam",age: 21,course: "React JS"}
  ]
  return (
    <>
    <div className="text-center bg-amber-400 text-white p-3 w-120 rounded-2xl mt-8 flex mx-auto items-center">
      {Students.map((student, index) => (
        <Student
        key={index}
        name={student.name}
        age={student.age}
        course={student.course}
        />
      ))}
    </div>
    </>
  )
}

export default App