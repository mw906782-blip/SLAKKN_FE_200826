

const Array = () => {
    const arr = [ "HTML","CSS","JavaScript","React","Python"]
  return (
    <>
    <div className="text-center p-4 bg-amber-400 text-white">
        <ul>
        {arr.map((array, index) => (
            <li key={index}>{array}</li>
        ))}
    </ul>
    </div>
    </>
  )
}

export default Array