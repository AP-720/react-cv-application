import { useState } from "react";
import EditButton from "./EditButton";

export default function CVHeading({ name, phoneNumber, email }) {
	const [isMouseInside, setIsMouseInside] = useState();

	const handleOnClick = () => {
		alert("clicked");
	};

	return (
		<div
			className="cv-heading-container"
			onMouseEnter={() => setIsMouseInside(true)}
			onMouseLeave={() => setIsMouseInside(false)}
		>
			<h2 className="text-center text-xl text-secondary pb-3">{name}</h2>
			<div className="contact-container">
				<p>{phoneNumber}</p>
				<p>{email}</p>
			</div>
			{isMouseInside && <EditButton onClick={handleOnClick} />}
		</div>
	);
}
