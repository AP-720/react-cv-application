import CVHeading from "./CVHeading";
import WorkExperience from "./WorkExperience";
// import { perviousRoles } from "./WorkExperience";

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

export default function CVContainer() {
	return (
		<div className="cv-container">
			<CVHeading
				name={"Enter Name"}
				phoneNumber={"###########"}
				email={"your-email@here.com"}
			/>
			<WorkExperience perviousRoles={perviousRoles} />
			<div className="education-section-container">
				<h2 className="text-decoration-underline pb-3 ">Education</h2>
				<ul className="education-experience-list">
					<li className="list-item">
						<h3 className="justify-start">Course Name</h3>
						<h4>School Name</h4>
						<p className="justify-end">
							<span className="font-weight-bold">From:</span> Feb-2025{" "}
							<span className="font-weight-bold">To:</span> Present
						</p>
					</li>
					<li className="list-item">
						<h3 className="justify-start">Course Name</h3>
						<h4>School Name</h4>
						<p className="justify-end">
							<span className="font-weight-bold">From:</span> Feb-2025{" "}
							<span className="font-weight-bold">To:</span> Present
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
