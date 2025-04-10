import CVHeading from "./CVHeading";

export default function CVContainer() {
	return (
		<div className="cv-container">
			<CVHeading />
			<div className="work-experience-container">
				<h2 className="text-decoration-underline pb-3 ">Work Experience</h2>
				<ul className="work-experience-list">
					<li className="list-item">
						<h3 className="justify-start">Position</h3>
						<h4>Company Name</h4>
						<p className="justify-end">
							<span className="font-weight-bold">From:</span> Feb-2025{" "}
							<span className="font-weight-bold">To:</span> Present
						</p>
						<p className="col-span-all">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
							voluptatum veritatis dolorem amet? Doloribus animi esse hic
							repellendus atque in, velit nam facere quasi maiores, explicabo
							maxime laudantium distinctio ipsa.
						</p>
					</li>
					<li className="list-item">
						<h3 className="justify-start">Position</h3>
						<h4>Company Name</h4>
						<p className="justify-end">
							<span className="font-weight-bold">From:</span> Feb-2025{" "}
							<span className="font-weight-bold">To:</span> Present
						</p>
						<p className="col-span-all">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
							voluptatum veritatis dolorem amet? Doloribus animi esse hic
							repellendus atque in, velit nam facere quasi maiores, explicabo
							maxime laudantium distinctio ipsa.
						</p>
					</li>
					<li className="list-item">
						<h3 className="justify-start">Position</h3>
						<h4>Company Name</h4>
						<p className="justify-end">
							<span className="font-weight-bold">From:</span> Feb-2025{" "}
							<span className="font-weight-bold">To:</span> Present
						</p>
						<p className="col-span-all">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
							voluptatum veritatis dolorem amet? Doloribus animi esse hic
							repellendus atque in, velit nam facere quasi maiores, explicabo
							maxime laudantium distinctio ipsa.
						</p>
					</li>
				</ul>
				<hr />
			</div>
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
