function Span({ contain, color, shade, size, font, extrastyle }) {
    return (
        <span className={`text-${color}-${shade} text-${size} font-${font} ${extrastyle}`}>
            {contain}
        </span>
    )
}

export default Span;

// ${color}-${shade}