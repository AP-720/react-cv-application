export default function SquareButton({
	onClick,
	icon,
	typeStyling,
	onMouseEnter,
	onMouseLeave,
}) {
	const className = `button${typeStyling ? " " + typeStyling : ""}`;

	return (
		<button
			className={className}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{icon}
		</button>
	);
}
