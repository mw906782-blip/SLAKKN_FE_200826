

function Student (props) {
  return (
   <>
    <div className = "text-center mt-3 bg-amber-300 text-white">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Course: {props.course}</p>
    </div>
   </>
  )
}

export default Student