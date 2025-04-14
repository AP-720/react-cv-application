import { useState } from "react";
import EditButton from "./EditButton";
import Modal from "./Modal";

function HeadingForm() {
	return (
		<form action="" className="form">
			<label>
				Name: <input type="text" name="name" placeholder="Enter name" />
			</label>
			<label>
				Phone: <input type="tel" placeholder="Enter phone number" />
			</label>
			<label>
				E-mail: <input type="email" placeholder="Enter e-mail address" />
			</label>
		</form>
	);
}

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
			<Modal title={"contact"}>
				<HeadingForm />
			</Modal>
		</div>
	);
}
