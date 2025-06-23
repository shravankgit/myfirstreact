import React, { useState } from 'react';
// import './StudentRegistrationForm.css'; // Importing the CSS

const StudentRegistrationForm = () => {
	const [student, setStudent] = useState({
		name: '',
		age: '',
		email: '',
		course: '',
		gender: '',
	});

	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!student.name || !student.age || !student.email || !student.course || !student.gender) {
			setMessage('Please fill in all fields.');
			return;
		}


		setMessage(`Student ${student.name} registered successfully!`);

		setStudent({
			name: '',
			age: '',
			email: '',
			course: '',
			gender: '',
		});
	};

	return (
		<div className="form-container">
			<h2>Student Registration Form</h2>
			<form onSubmit={handleSubmit} className="student-form">
				<input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Full Name" />
				<input type="number" name="age" value={student.age} onChange={handleChange} placeholder="Age" />
				<input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" />
				<input type="text" name="course" value={student.course} onChange={handleChange} placeholder="Course" />

				<div className="radio-group">
					<label>
						<input type="radio" name="gender" value="Male" checked={student.gender === "Male"} onChange={handleChange} />
						Male
					</label>
					<label>
						<input type="radio" name="gender" value="Female" checked={student.gender === "Female"} onChange={handleChange} />
						Female
					</label>
				</div>

				<button type="submit">Register</button>
				{message && <p className="message">{message}</p>}
			</form>
		</div>
	);
};

export default StudentRegistrationForm;


