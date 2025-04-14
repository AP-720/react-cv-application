import CVHeading from "./CVHeading";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Modal from "./Modal";

const perviousRoles = [
	{
		position: "Job Title 1",
		companyName: "Company Name 1",
		fromDate: "Jan 2025",
		toDate: "Present",
		responsibilities:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus quasi ea in ratione beatae ipsam sapiente praesentium inventore! Exercitationem placeat numquam saepe nobis ab cum eaque atque molestiae perferendis.",
	},
	{
		position: "Job Title 2",
		companyName: "Company Name 2",
		fromDate: "Jan 2024",
		toDate: "Jan 2025",
		responsibilities:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus quasi ea in ratione beatae ipsam sapiente praesentium inventore! Exercitationem placeat numquam saepe nobis ab cum eaque atque molestiae perferendis.",
	},
	{
		position: "Job Title 3",
		companyName: "Company Name 3",
		fromDate: "Jan 2023",
		toDate: "Jan 2024",
		responsibilities:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus quasi ea in ratione beatae ipsam sapiente praesentium inventore! Exercitationem placeat numquam saepe nobis ab cum eaque atque molestiae perferendis.",
	},
];

const educationHistory = [
	{
		courseName: "Degree",
		schoolName: "University of Burton",
		fromDate: "Sept 2023",
		toDate: "Present",
	},
	{
		courseName: "A levels",
		schoolName: "Burton High School",
		fromDate: "Jan 2022",
		toDate: "Aug 2023",
	},
];

export default function CVContainer() {
	return (
		<div className="cv-container">
			<CVHeading
				name={"Enter Name"}
				phoneNumber={"###########"}
				email={"your-email@here.com"}
			/>
			<WorkExperience perviousRoles={perviousRoles} />
			<Education educationHistory={educationHistory} />
		</div>
	);
}
