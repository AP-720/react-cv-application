import { useRef, useState } from "react";
import SquareButton from "./EditButton";
import { plusButton, editButton } from "./icons";

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
		alert("Add");
	};

	const onEditExperience = () => {
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
		</div>
	);
}
