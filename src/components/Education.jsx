import { useState } from "react";
import SquareButton from "./EditButton";
import { plusButton } from "./icons";

function EducationItem({ courseName, schoolName, fromDate, toDate }) {
	return (
		<li className="list-item">
			<h3 className="justify-start">{courseName}</h3>
			<h4>{schoolName}</h4>
			<p className="justify-end">
				<span className="font-weight-bold">From:</span> {fromDate}{" "}
				<span className="font-weight-bold">To:</span> {toDate}
			</p>
		</li>
	);
}

export default function Education({ education }) {
	const [isMouseInside, setIsMouseInside] = useState();

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
			<ul className="education-experience-list">
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
			{isMouseInside && (
				<SquareButton onClick={handleOnClick} icon={plusButton} />
			)}
		</div>
	);
}
