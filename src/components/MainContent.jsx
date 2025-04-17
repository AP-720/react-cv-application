import { useState } from "react";
import CVHeading from "./CVHeading";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const initialCVData = {
	heading: {
		name: "Enter Name",
		phoneNumber: "###########",
		email: "your-email@here.com",
	},
	workExperiences: [
		{
			id: crypto.randomUUID(),
			position: "Job Title 1",
			companyName: "Company Name 1",
			fromDate: "Jan 2025",
			toDate: "Present",
			responsibilities:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus quasi ea in ratione beatae ipsam sapiente praesentium inventore! Exercitationem placeat numquam saepe nobis ab cum eaque atque molestiae perferendis.",
		},
		{
			id: crypto.randomUUID(),
			position: "Job Title 2",
			companyName: "Company Name 2",
			fromDate: "Jan 2024",
			toDate: "Jan 2025",
			responsibilities:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus quasi ea in ratione beatae ipsam sapiente praesentium inventore! Exercitationem placeat numquam saepe nobis ab cum eaque atque molestiae perferendis.",
		},
		{
			id: crypto.randomUUID(),
			position: "Job Title 3",
			companyName: "Company Name 3",
			fromDate: "Jan 2023",
			toDate: "Jan 2024",
			responsibilities:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus quasi ea in ratione beatae ipsam sapiente praesentium inventore! Exercitationem placeat numquam saepe nobis ab cum eaque atque molestiae perferendis.",
		},
	],
	education: [
		{
			id: crypto.randomUUID(),
			courseName: "Degree",
			schoolName: "University of Burton",
			fromDate: "Sept 2023",
			toDate: "Present",
		},
		{
			id: crypto.randomUUID(),
			courseName: "A levels",
			schoolName: "Burton High School",
			fromDate: "Jan 2022",
			toDate: "Aug 2023",
		},
	],
};

export default function CVContainer() {
	const [cvData, setCvData] = useState(initialCVData);

	const updateHeading = (newHeadingData) => {
		setCvData((prevData) => ({
			...prevData,
			heading: newHeadingData,
		}));
	};

	return (
		<div className="cv-container">
			<CVHeading headingData={cvData.heading} onUpdateHeading={updateHeading} />
			<WorkExperience workExperiences={cvData.workExperiences} />
			<Education education={cvData.education} />
		</div>
	);
}
