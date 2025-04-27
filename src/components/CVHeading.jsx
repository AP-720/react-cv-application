import { useState } from "react";
import { createPortal } from "react-dom";
import useModal from "../hooks/useModal";
import SquareButton from "./EditButton";
import { editButton } from "./icons";
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
					required
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
					required
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
					required
				/>
			</label>
		</form>
	);
}

export default function CVHeading({ headingData, onUpdateHeading }) {
	const { isOpen, formRef, openModal, closeModal } = useModal();
	const [isMouseInside, setIsMouseInside] = useState();
	const { name, phoneNumber, email } = headingData;

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

		closeModal();
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
			{isMouseInside && (
				<SquareButton
					onClick={() => openModal()}
					icon={editButton}
					typeStyling={"edit-button"}
				/>
			)}
			{isOpen &&
				createPortal(
					<Modal
						title={"contact"}
						onClose={() => closeModal()}
						onCancel={() => closeModal()}
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
