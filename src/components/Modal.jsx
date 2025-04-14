import { closeButton } from "./icons";

export default function Modal({ title, children, onClose, onCancel, onSave }) {
	return (
		<div
			className="modal-container"
			// Means that clicks outside the modal close it. Otherwise due to propagation the event would bubble up and fire if the modal was clicked inside.
			onClick={(e) => {
				if (e.target.className === "modal-container") {
					onClose();
				}
			}}
		>
			<div className="modal">
				<div className="modal-header">
					<button className="button close-button" onClick={() => onClose()}>
						{closeButton}
					</button>
				</div>
				<div className="modal-content pb-4">
					<h1 className="pb-4">Edit {title} details</h1>
					{children}
				</div>
				<div className="modal-footer">
					<button
						type="submit"
						className="button button-save"
						onClick={() => onSave()}
					>
						Save
					</button>
					<button className="button button-cancel" onClick={() => onCancel()}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}
