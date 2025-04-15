import { useState } from "react";
import { createPortal } from "react-dom";
import EditButton from "./EditButton";
import Modal from "./Modal";

function HeadingForm() {
	return (
		<form action="" className="form">
			<label>
				Name: <input type="text" name="name" placeholder="Enter name" />
			</label>
			<label>
				Phone: <input type="tel" placeholder="Enter phone number" />
			</label>
			<label>
				E-mail: <input type="email" placeholder="Enter e-mail address" />
			</label>
		</form>
	);
}

export default function CVHeading({ headingData, onUpdateHeading }) {
	const [isMouseInside, setIsMouseInside] = useState();
	const [modalOpen, setModalOpen] = useState(false);
	const { name, phoneNumber, email } = headingData;

	const handleEdit = () => {
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
		setIsMouseInside(false);
	};

	const handleSave = (formData) => {
		console.log("Update Heading Content");

		setModalOpen(false);
		setIsMouseInside(false);
	};

	return (
		<div
			className="cv-heading-container"
			onMouseEnter={() => setIsMouseInside(true)}
			onMouseLeave={() => setIsMouseInside(false)}
		>
			<h2 className="text-center text-xl text-secondary pb-3">{name}</h2>
			<div className="contact-container">
				<p>{phoneNumber}</p>
				<p>{email}</p>
			</div>
			{isMouseInside && <EditButton onClick={handleEdit} />}
			{modalOpen &&
				createPortal(
					<Modal
						title={"contact"}
						onClose={handleClose}
						onCancel={handleClose}
						onSave={handleSave}
					>
						<HeadingForm />
					</Modal>,
					document.body
				)}
		</div>
	);
}
