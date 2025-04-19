import { useState } from "react";
import SquareButton from "./EditButton";
import { plusButton, editButton } from "./icons";

function WorkExperienceItem({
	position,
	companyName,
	fromDate,
	toDate,
	responsibilities,
}) {
	const [isMouseInside, setIsMouseInside] = useState();

	return (
		<li
			className="list-item"
			onMouseEnter={() => setIsMouseInside(true)}
			onMouseLeave={() => setIsMouseInside(false)}
		>
			<h3 className="justify-start">{position}</h3>
			<h4>{companyName}</h4>
			<p className="justify-end">
				<span className="font-weight-bold">From:</span> {fromDate}{" "}
				<span className="font-weight-bold">To:</span> {toDate}
			</p>
			<p className="col-span-all">{responsibilities}</p>
			{isMouseInside && (
				<SquareButton icon={editButton} typeStyling={"list-edit-button"} />
			)}
		</li>
	);
}

export default function WorkExperience({ workExperiences }) {
	const [isMouseInside, setIsMouseInside] = useState();

	const handleOnClick = () => {
		alert("clicked");
	};

	return (
		<div
			className="work-experience-container"
			onMouseEnter={() => setIsMouseInside(true)}
			onMouseLeave={() => setIsMouseInside(false)}
		>
			<h2 className="text-decoration-underline pb-3 ">Work Experience</h2>
			<ul className="work-experience-list">
				{workExperiences.map((role) => (
					<WorkExperienceItem
						key={role.id}
						position={role.position}
						companyName={role.companyName}
						fromDate={role.fromDate}
						toDate={role.toDate}
						responsibilities={role.responsibilities}
					/>
				))}
			</ul>
			<hr />
			{isMouseInside && (
				<SquareButton
					onClick={handleOnClick}
					icon={plusButton}
					typeStyling={"edit-button"}
				/>
			)}
		</div>
	);
}
