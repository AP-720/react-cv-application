import { useState } from "react";
import SquareButton from "./EditButton";
import { plusButton, editButton } from "./icons";

function EducationItem({ courseName, schoolName, fromDate, toDate }) {
	const [isMouseInside, setIsMouseInside] = useState();

	return (
		<li
			className="list-item"
			onMouseEnter={() => setIsMouseInside(true)}
			onMouseLeave={() => setIsMouseInside(false)}
		>
			<h3 className="justify-start">{courseName}</h3>
			<h4>{schoolName}</h4>
			<p className="justify-end">
				<span className="font-weight-bold">From:</span> {fromDate}{" "}
				<span className="font-weight-bold">To:</span> {toDate}
			</p>
			{isMouseInside && (
				<SquareButton icon={editButton} typeStyling={"list-edit-button"} />
			)}
		</li>
	);
}

export default function Education({ education }) {
	const [isMouseInside, setIsMouseInside] = useState();
	const [isInsideList, setIsInList] = useState(false);

	const handleOnClick = () => {
		alert("Clicked");
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
					/>
				))}
			</ul>
			{isMouseInside && !isInsideList && (
				<SquareButton
					onClick={handleOnClick}
					icon={plusButton}
					typeStyling={"edit-button"}
				/>
			)}
		</div>
	);
}
