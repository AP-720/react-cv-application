import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import SquareButton from "./EditButton";
import { plusButton, editButton } from "./icons";

function EducationForm({ formRef, onSubmit, initialData, onDelete }) {
	const [formState, setFormSate] = useState({
		courseName: initialData.courseName || "",
		schoolName: initialData.schoolName || "",
		fromDate: initialData.fromDate || "",
		toDate: initialData.toDate || "",
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
					Course Name:{" "}
					<input
						type="text"
						name="courseName"
						value={formState.courseName}
						onChange={handleChange}
						placeholder="Enter Course Name"
						required
					/>
				</label>
				<label>
					School Name:{" "}
					<input
						type="text"
						name="schoolName"
						value={formState.schoolName}
						onChange={handleChange}
						placeholder="Enter School Name"
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
						placeholder="Date course started"
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
						placeholder="Date course ended"
						required
					/>
				</label>
			</form>
			{/* Conditionally renders the button only if there is a ID, and an ID is only set if editing.  */}
			{initialData.id && (
				<button className="button" onClick={onDelete}>
					Delete education item
				</button>
			)}
		</>
	);
}

function EducationItem({
	id,
	courseName,
	schoolName,
	fromDate,
	toDate,
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
			<h3 className="justify-start">{courseName}</h3>
			<h4>{schoolName}</h4>
			<p className="justify-end">
				<span className="font-weight-bold">From:</span> {fromDate}{" "}
				<span className="font-weight-bold">To:</span> {toDate}
			</p>
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
					onClick={onEdit}
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

export default function Education({
	education,
	onAddEducation,
	onEditEducation,
	onDeleteEducation,
}) {
	const { isOpen, currentItem, formRef, openModal, closeModal } = useModal();
	const [isMouseInside, setIsMouseInside] = useState();
	const [isInsideList, setIsInList] = useState(false);

	const handleEditEducation = (schoolID) => {
		const itemToEdit = education.find((school) => school.id === schoolID);
		openModal(itemToEdit);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);

		if (currentItem) {
			onEditEducation({ ...data, id: currentItem.id });
		} else {
			onAddEducation(data);
		}

		closeModal();
	};

	return (
		<div
			className="education-section-container"
			onMouseEnter={() => setIsMouseInside(true)}
			onMouseLeave={() => setIsMouseInside(false)}
		>
			<h2 className="text-decoration-underline pb-3 ">Education</h2>
			<ul
				className="education-experience-list"
				onMouseEnter={() => setIsInList(true)}
				onMouseLeave={() => setIsInList(false)}
			>
				{education.map((school) => (
					<EducationItem
						key={school.id}
						id={school.id}
						courseName={school.courseName}
						schoolName={school.schoolName}
						fromDate={school.fromDate}
						toDate={school.toDate}
						onEdit={() => handleEditEducation(school.id)}
					/>
				))}
			</ul>
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
						title={"Education"}
						onClose={() => closeModal()}
						onCancel={() => closeModal()}
						formRef={formRef}
					>
						<EducationForm
							formRef={formRef}
							onSubmit={handleFormSubmit}
							onDelete={() => {
								onDeleteEducation(currentItem.id);
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
