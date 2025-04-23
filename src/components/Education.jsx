import { useRef, useState } from "react";
import SquareButton from "./EditButton";
import { plusButton, editButton } from "./icons";

function EducationItem({ courseName, schoolName, fromDate, toDate, onEdit }) {
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

export default function Education({ education }) {
	const [isMouseInside, setIsMouseInside] = useState();
	const [isInsideList, setIsInList] = useState(false);

	const onAddEducation = () => {
		alert("Clicked add education");
	};

	const onEditEducation = () => {
		alert("Edit education");
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
						courseName={school.courseName}
						schoolName={school.schoolName}
						fromDate={school.fromDate}
						toDate={school.toDate}
						onEdit={() => onEditEducation()}
					/>
				))}
			</ul>
			{isMouseInside && !isInsideList && (
				<SquareButton
					onClick={() => onAddEducation()}
					icon={plusButton}
					typeStyling={"edit-button"}
				/>
			)}
		</div>
	);
}
