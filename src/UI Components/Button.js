

function Button({ icon, name, onClickFunc, w }) {
    return (
        <button onClick={(e) => onClickFunc(e)} className={`rounded-lg focus:bg-slate-300 focus:font-bold focus:text-gray-800 hover:bg-slate-300 hover:text-gray-800 hover:font-bold flex items-center justify-center p-2 w-${w}`}>
            {icon}
            <span>{name}</span>
        </button>
    )
}
export default Button;