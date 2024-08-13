import Items from "./index"

const TodoWrapper = () => {
    return (
        <>
            <div className="container-fluid bg-secondary p-3 w-50 rounded shadow
             d-flex align-items-center justify-content-center vh-75">
                <Items />
            </div>
        </>
    )
}

export default TodoWrapper