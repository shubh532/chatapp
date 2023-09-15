function Card (props){
    return(
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
            {props.children}
        </div>
    )
}

export default Card;