import { editButton } from "./icons";

export default function EditButton({ onClick }) {
	return (
		<button className="button edit-button" onClick={onClick}>
			{editButton}
		</button>
	);
}
