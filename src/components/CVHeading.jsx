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

export default function CVHeading() {
	const [isMouseInside, setIsMouseInside] = useState();
	const [modalOpen, setModalOpen] = useState(false);
	const [headingData, setHeadingData] = useState({
		name: "Enter Name",
		phoneNumber: "###########",
		email: "your-email@here.com",
	});

	const openEditModal = () => {
		setModalOpen(true);
	};

	const closeEditModal = () => {
		setModalOpen(false);
		setIsMouseInside(false);
	};

	const saveHeadingUpdate = () => {
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
			<h2 className="text-center text-xl text-secondary pb-3">
				{headingData.name}
			</h2>
			<div className="contact-container">
				<p>{headingData.phoneNumber}</p>
				<p>{headingData.email}</p>
			</div>
			{isMouseInside && <EditButton onClick={openEditModal} />}
			{modalOpen &&
				createPortal(
					<Modal
						title={"contact"}
						onClose={closeEditModal}
						onCancel={closeEditModal}
						onSave={saveHeadingUpdate}
					>
						<HeadingForm />
					</Modal>,
					document.body
				)}
		</div>
	);
}
