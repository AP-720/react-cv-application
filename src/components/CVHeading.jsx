export default function CVHeading({ name, phoneNumber, email }) {
	return (
		<div className="cv-heading-container">
			<h2 className="text-center text-xl text-secondary pb-3">{name}</h2>
			<div className="contact-container">
				<p>{phoneNumber}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}
