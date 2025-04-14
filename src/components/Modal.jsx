import { closeButton } from "./icons";

export default function Modal({ title, children }) {
	return (
		<div className="modal-container">
			<div className="modal">
				<div className="modal-header">
					<button className="button close-button">
						{closeButton}
					</button>
				</div>
				<div className="modal-content pb-4">
					<h1 className="pb-4">Edit {title} details</h1>
					{children}
				</div>
				<div className="modal-footer">
					<button type="submit" className="button button-save">
						Save
					</button>
					<button className="button button-cancel">Cancel</button>
				</div>
			</div>
		</div>
	);
}
