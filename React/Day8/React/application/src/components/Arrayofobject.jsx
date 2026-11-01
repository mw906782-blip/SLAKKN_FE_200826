

const Arrayofobject = () => {

const data = [
    { id: 1, name: "Mahesh", salary: 25000 },
    { id: 2, name: "Lokesh", salary: 30000 },
    { id: 3, name: "Sam", salary: 35000 },
    { id: 4, name: "Deepak", salary: 40000 }
]
  return (
    <>
    <div className="flex justify-center mt-5">
        <table className="border-collapse border border-black">
            <thead>
            <tr className="bg-gray-200">
                <th className="border p-3 px-12">ID</th>
                <th className="border p-3 px-12">Name</th>
                <th className="border p-3 px-12">Salary</th>
            </tr>
            </thead>
            <tbody>
                {data.map((employee)=>(
                    <tr className="bg-gray-200">
                        <td className="border p-3 px-12">{employee.id}</td>
                        <td className="border p-3 px-12">{employee.name}</td>
                        <td className="border p-3 px-12">{employee.salary}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
    
    </>
  )
}

export default Arrayofobject