import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import useModal from "../hooks/useModal";
import SquareButton from "./EditButton";
import { plusButton, editButton } from "./icons";
import Modal from "./Modal";

function WorkExperienceForm({ formRef, onSubmit, initialData, onDelete }) {
	const [formState, setFormSate] = useState({
		position: initialData.position || "",
		companyName: initialData.companyName || "",
		fromDate: initialData.fromDate || "",
		toDate: initialData.toDate || "",
		responsibilities: initialData.responsibilities || "",
	});

	const handleChange = (e) => {
		setFormSate((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<form action="" className="form" ref={formRef} onSubmit={onSubmit}>
				<label>
					Position:{" "}
					<input
						type="text"
						name="position"
						value={formState.position}
						onChange={handleChange}
						placeholder="Enter Job Title"
						required
					/>
				</label>
				<label>
					Company Name:{" "}
					<input
						type="text"
						name="companyName"
						value={formState.companyName}
						onChange={handleChange}
						placeholder="Enter Company Name"
						required
					/>
				</label>
				<label>
					From:{" "}
					<input
						type="text"
						name="fromDate"
						value={formState.fromDate}
						onChange={handleChange}
						placeholder="Enter date role started"
						required
					/>
				</label>
				<label>
					To:{" "}
					<input
						type="text"
						name="toDate"
						value={formState.toDate}
						onChange={handleChange}
						placeholder="Enter date role ended"
						required
					/>
				</label>
				<label className="align-items-start">
					Responsibilities:{" "}
					<textarea
						name="responsibilities"
						value={formState.responsibilities}
						onChange={handleChange}
						rows={3}
						cols={40}
						placeholder="Enter responsibilities for this role."
						required
					></textarea>
				</label>
			</form>
			{/* Conditionally renders the button only if there is a ID, and an ID is only set if editing.  */}
			{initialData.id && (
				<button className="button" onClick={onDelete}>
					Delete Job
				</button>
			)}
		</>
	);
}

function WorkExperienceItem({
	id,
	position,
	companyName,
	fromDate,
	toDate,
	responsibilities,
	onEdit,
}) {
	const [isMouseInside, setIsMouseInside] = useState(false);
	const [isHoveringButton, setIsHoveringButton] = useState(false);
	const hoverTimeout = useRef(null);

	return (
		<li
			id={id}
			className="list-item"
			onMouseEnter={() => {
				clearTimeout(hoverTimeout.current);
				setIsMouseInside(true);
			}}
			onMouseLeave={() => {
				hoverTimeout.current = setTimeout(() => {
					setIsMouseInside(false);
				}, 200);
			}}
		>
			<h3 className="justify-start">{position}</h3>
			<h4>{companyName}</h4>
			<p className="justify-end">
				<span className="font-weight-bold">From:</span> {fromDate}{" "}
				<span className="font-weight-bold">To:</span> {toDate}
			</p>
			<p className="col-span-all justify-start">{responsibilities}</p>
			<div
				className="button-hover-area"
				onMouseEnter={() => {
					clearTimeout(hoverTimeout.current);
					setIsHoveringButton(true);
				}}
				onMouseLeave={() => {
					hoverTimeout.current = setTimeout(() => {
						setIsHoveringButton(false);
					}, 200);
				}}
			></div>
			{(isMouseInside || isHoveringButton) && (
				<SquareButton
					onClick={() => onEdit()}
					icon={editButton}
					typeStyling={"list-edit-button"}
					onMouseEnter={() => {
						clearTimeout(hoverTimeout.current);
						setIsHoveringButton(true);
					}}
					onMouseLeave={() => {
						hoverTimeout.current = setTimeout(() => {
							setIsHoveringButton(false);
						}, 200);
					}}
				/>
			)}
		</li>
	);
}

export default function WorkExperience({
	workExperiences,
	onAddWorkExperience,
	onEditWorkExperience,
	onDeleteWorkExperience,
}) {
	const { isOpen, currentItem, formRef, openModal, closeModal } = useModal();
	const [isMouseInside, setIsMouseInside] = useState(false);
	const [isInsideList, setIsInList] = useState(false);

	// Find role and open modal with the data and set it to currentItem
	const handleEditWork = (roleID) => {
		const itemToEdit = workExperiences.find((role) => role.id === roleID);
		openModal(itemToEdit);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);

		const data = Object.fromEntries(formData.entries());

		if (currentItem) {
			// Edit item, need to pass in the id property as the form doesn't provide it.
			onEditWorkExperience({ ...data, id: currentItem.id });
		} else {
			// Add item
			onAddWorkExperience(data);
		}

		closeModal();
	};

	return (
		<div
			className="work-experience-container"
			onMouseEnter={() => setIsMouseInside(true)}
			onMouseLeave={() => setIsMouseInside(false)}
		>
			<h2 className="text-decoration-underline pb-3 ">Work Experience</h2>
			<ul
				className="work-experience-list"
				onMouseEnter={() => setIsInList(true)}
				onMouseLeave={() => setIsInList(false)}
			>
				{workExperiences.map((role) => (
					<WorkExperienceItem
						key={role.id}
						id={role.id}
						position={role.position}
						companyName={role.companyName}
						fromDate={role.fromDate}
						toDate={role.toDate}
						responsibilities={role.responsibilities}
						onEdit={() => handleEditWork(role.id)}
					/>
				))}
			</ul>
			<hr />
			{isMouseInside && !isInsideList && (
				<SquareButton
					onClick={() => openModal()}
					icon={plusButton}
					typeStyling={"edit-button"}
				/>
			)}
			{isOpen &&
				createPortal(
					<Modal
						title={"Work Experience"}
						onClose={() => closeModal()}
						onCancel={() => closeModal()}
						formRef={formRef}
					>
						<WorkExperienceForm
							formRef={formRef}
							onSubmit={handleFormSubmit}
							onDelete={() => {
								onDeleteWorkExperience(currentItem.id);
								closeModal();
							}}
							// Use empty object for new items, use currentITem if editing
							initialData={currentItem || {}}
						/>
					</Modal>,
					document.body
				)}
		</div>
	);
}
