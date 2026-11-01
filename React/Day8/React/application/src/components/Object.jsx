

const Object = () => {
    const student = {
  name: "Arun",
  age: 21,
  department: "Computer Science",
  city: "Chennai"
};
  return (
    <>
    <div className="text-center">
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Department: {student.department}</p>
        <p>City: {student.city}</p>
    </div>
    </>
  )
}

export default Object