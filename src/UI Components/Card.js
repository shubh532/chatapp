function Card (props){
    return(
        <div className="max-w-md overflow-y-auto h-[40rem] bg-white border border-gray-200 rounded-lg shadow">
            {props.children}
        </div>
    )
}

export default Card;