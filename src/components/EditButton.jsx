export default function SquareButton({ onClick, icon }) {
	return (
		<button className="button edit-button" onClick={onClick}>
			{icon}
		</button>
	);
}
