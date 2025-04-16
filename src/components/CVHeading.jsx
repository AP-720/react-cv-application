import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import EditButton from "./EditButton";
import Modal from "./Modal";

function HeadingForm({ formRef, onSubmit, initialData }) {
	const [formState, setFormSate] = useState({
		name: initialData.name || "",
		phoneNumber: initialData.phoneNumber || "",
		email: initialData.email || "",
	});

	const handleChange = (e) => {
		setFormSate((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<form action="" className="form" ref={formRef} onSubmit={onSubmit}>
			<label>
				Name:{" "}
				<input
					type="text"
					name="name"
					value={formState.name}
					onChange={handleChange}
					placeholder="Enter name"
				/>
			</label>
			<label>
				Phone:{" "}
				<input
					type="tel"
					name="phoneNumber"
					value={formState.phoneNumber}
					onChange={handleChange}
					placeholder="Enter phone number"
				/>
			</label>
			<label>
				E-mail:{" "}
				<input
					type="email"
					name="email"
					value={formState.email}
					onChange={handleChange}
					placeholder="Enter e-mail address"
				/>
			</label>
		</form>
	);
}

export default function CVHeading({ headingData, onUpdateHeading }) {
	const [isMouseInside, setIsMouseInside] = useState();
	const [modalOpen, setModalOpen] = useState(false);
	const { name, phoneNumber, email } = headingData;
	const formRef = useRef(null);

	const handleEdit = () => {
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
		setIsMouseInside(false);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// Get the form data
		const formData = new FormData(formRef.current);
		// Put the data in key:value pairs so easier to work with.
		const data = Object.fromEntries(formData.entries());

		handleSave(data);
	};

	const handleSave = (formData) => {
		onUpdateHeading(formData);

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
						formRef={formRef}
					>
						<HeadingForm
							formRef={formRef}
							onSubmit={handleFormSubmit}
							initialData={headingData}
						/>
					</Modal>,
					document.body
				)}
		</div>
	);
}
