import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);
			if (!isValid) {
				setErrorMessage("Your email is invalid");
			} else {
				setErrorMessage("");
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required`);
			} else {
				setErrorMessage("");
			}
		}
		if (!errorMessage) {
			setFormState({
				...formState,
				[e.target.name]: e.target.value,
			});
		}
		console.log("error message", errorMessage);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	return (
		<>
			<section>
				<h1 class="section-title" id="portfolio" data-testid="h1tag">
					Contact
				</h1>
			</section>
			<Form id="contact-form" onSubmit={handleSubmit}>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name:</Form.Label>
					<Form.Control
						type="input"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email:</Form.Label>
					<Form.Control
						type="email"
						name="email"
						placeholder="name@example.com"
						defaultValue={email}
						onBlur={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicMessage">
					<Form.Label>Message:</Form.Label>
					<Form.Control
						as="textarea"
						name="message"
						defaultValue={message}
						onBlur={handleChange}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
}

export default ContactForm;
