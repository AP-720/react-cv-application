function WorkExperienceItem({
	position,
	companyName,
	fromDate,
	toDate,
	responsibilities,
}) {
	return (
		<li className="list-item">
			<h3 className="justify-start">{position}</h3>
			<h4>{companyName}</h4>
			<p className="justify-end">
				<span className="font-weight-bold">From:</span> {fromDate}{" "}
				<span className="font-weight-bold">To:</span> {toDate}
			</p>
			<p className="col-span-all">{responsibilities}</p>
		</li>
	);
}

export default function WorkExperience({ perviousRoles }) {
	return (
		<div className="work-experience-container">
			<h2 className="text-decoration-underline pb-3 ">Work Experience</h2>
			<ul className="work-experience-list">
				{perviousRoles.map((role, index) => (
					<WorkExperienceItem
						key={index}
						position={role.position}
						companyName={role.companyName}
						fromDate={role.fromDate}
						toDate={role.toDate}
						responsibilities={role.responsibilities}
					/>
				))}
			</ul>
			<hr />
		</div>
	);
}
