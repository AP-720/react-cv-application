import { useRef, useState } from "react";

export default function useModal() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentItem, setCurrentItem] = useState(null);
	const formRef = useRef(null);

	const openModal = (item = null) => {
		setCurrentItem(item);
		setIsOpen(true);
	};

	const closeModal = () => {
		setCurrentItem(null);
		setIsOpen(false);
	};

	return {
		isOpen,
		currentItem,
		formRef,
		openModal,
		closeModal,
	};
}
