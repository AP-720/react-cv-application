import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import SquareButton from "./EditButton";
import { plusButton, editButton } from "./icons";
import Modal from "./Modal";

function WorkExperienceForm({ formRef, onSubmit, initialData }) {
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
					></textarea>
				</label>
			</form>
			<button>Delete Job</button>
		</>
	);
}

function WorkExperienceItem({
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
			<p className="col-span-all">{responsibilities}</p>
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

export default function WorkExperience({ workExperiences }) {
	const [isMouseInside, setIsMouseInside] = useState(false);
	const [isInsideList, setIsInList] = useState(false);

	const onAddExperience = () => {
		// Need to copy the current workExperience data, then push the new job on to it. Would this be the place to create the UUID for the id
		alert("Add");
	};

	const onEditExperience = () => {
		// Needs to find the right job via its id and then copy it and replace it with the new data. 
		alert("Edit");
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
						position={role.position}
						companyName={role.companyName}
						fromDate={role.fromDate}
						toDate={role.toDate}
						responsibilities={role.responsibilities}
						onEdit={() => onEditExperience()}
					/>
				))}
			</ul>
			<hr />
			{isMouseInside && !isInsideList && (
				<SquareButton
					onClick={() => onAddExperience()}
					icon={plusButton}
					typeStyling={"edit-button"}
				/>
			)}
			<Modal
				title={"Work Experience"}
				// onClose={}
				// onCancel={}
				// formRef={}
			>
				<WorkExperienceForm
					// formRef={}
					// onSubmit={}
					initialData={workExperiences}
				/>
			</Modal>
		</div>
	);
}
