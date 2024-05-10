import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../login/Login.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	if (user) {
		if (user.role === "user") {
			navigate(`/tasks?userId=${user.id}`);
		}
	}

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:5000/api/auth/register",
				formData
			);
			setUser(response.data.user);
			alert("Registration Successful");
		} catch (error) {
			console.log(error);
		} finally {
			setFormData({
				name: "",
				email: "",
				password: "",
			});
		}
	};

	return (
		<section className={styles.login}>
			<div className={styles.heading}>
				<h1>Welcome !!!</h1>
				<p>to your own</p>
				<h2>Task Manager</h2>
			</div>
			<div className={styles.loginBox}>
				<h3>Sign Up</h3>
				<form onSubmit={handleSubmit}>
					<div className={styles.inputBox}>
						<label>Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							placeholder="John Doe"
							required
						/>
					</div>
					<div className={styles.inputBox}>
						<label>Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="user@email.com"
							required
						/>
					</div>
					<div
						className={
							styles.inputBox + " " + styles.passwordInputBox
						}
					>
						<label>Password</label>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							value={formData.password}
							onChange={handleInputChange}
							placeholder="password"
							required
						/>
						<FontAwesomeIcon
							className={styles.eyeIcon}
							icon={showPassword ? faEye : faEyeSlash}
							onClick={() => setShowPassword(!showPassword)}
						/>
					</div>
					<p className={styles.desc}>
						Already have an account?{" "}
						<Link to="/login">Login Here</Link>
					</p>
					<button className={styles.loginBtn} type="submit">
						Sign Up
					</button>
				</form>
			</div>
		</section>
	);
};

export default Register;
