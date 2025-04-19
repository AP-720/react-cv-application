export default function SquareButton({ onClick, icon, typeStyling }) {
	const className = `button${typeStyling ? " " + typeStyling : ""}`
	
	return (
		<button className={className} onClick={onClick}>
			{icon}
		</button>
	);
}
