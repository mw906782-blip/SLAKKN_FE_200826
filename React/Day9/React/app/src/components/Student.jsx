import React from "react"


const Student = ({name, age, course}) => {
  return (
    <div>
        <h2>Student Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
    </div>
  )
}

export default Student