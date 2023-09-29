function Span({ contain, color, shade, size, font, style }) {
    return (
        <span className={`text-${color}-${shade} text-${size} font-${font} ${style}`}>
            {contain}
        </span>
    )
}

export default Span;

// ${color}-${shade}