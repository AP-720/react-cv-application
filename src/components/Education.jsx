import { useState } from "react";
import EditButton from "./EditButton";

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

export default function Education({ educationHistory }) {
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
				{educationHistory.map((school, index) => (
					<EducationItem
						key={index}
						courseName={school.courseName}
						schoolName={school.schoolName}
						fromDate={school.fromDate}
						toDate={school.toDate}
					/>
				))}
			</ul>
			{isMouseInside && <EditButton onClick={handleOnClick} />}
		</div>
	);
}
