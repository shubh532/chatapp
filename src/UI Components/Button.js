

function Button({ icon, name, onClickFunc }) {
    return (
        <button onClick={() => onClickFunc()} className=" focus:bg-slate-800 hover:bg-slate-800 flex items-center justify-center p-2 w-full ">
            {icon}
            <span>{name}</span>
        </button>
    )
}
export default Button;