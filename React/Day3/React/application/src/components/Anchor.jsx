import { Link } from "react-router-dom"

const Anchor = () => {
    return(
        <>
        
        <div className="b">
            <Link to={"Header"} className="task">Task-1</Link>
            <Link to={"Nav"} className="task">Task-2</Link>
        </div>
        
        
        </>
    )
}
export default Anchor