import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../utils/LoginContext';

const SignUp = () => {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
		password: '',
	});
	const { signUpUser } = useLoginContext();

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		// console.log(formState);

		try {
			const data = await signUpUser(
				formState.username,
				formState.email,
				formState.password,
			);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<section className="w-full max-w-xs mx-auto">
			<form
				className="h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg px-8 pt-6 pb-8 mb-4"
				onSubmit={handleFormSubmit}
			>
				<div className="mb-4">
					<label
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="username"
					>
						Username
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
						placeholder="Username"
						name="username"
						id="username"
						type="text"
						value={formState.username}
						required
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<label
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
						placeholder="Email"
						name="email"
						id="email"
						type="email"
						pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
						value={formState.email}
						required
						onChange={handleChange}
					/>
				</div>
				<div className="mb-4">
					<label
						className="block font-bold mb-2 text-white text-opacity-60"
						htmlFor="password"
					>
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none"
						placeholder="Password"
						name="password"
						id="password"
						type="password"
						value={formState.password}
						required
						minLength="8"
						onChange={handleChange}
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="text-white transition-all duration-500 bg-gradient-to-r to-violet-500 via-pink-500 from-blue-500 bg-size-200 hover:bg-right font-bold rounded-lg text-sm py-2 px-4"
						type="submit"
					>
						Sign Up
					</button>
					<Link
						className="inline-block align-baseline font-bold text-sm text-white text-opacity-60 hover:text-opacity-100"
						to="/login"
					>
						Already have an account?
					</Link>
				</div>
			</form>
		</section>
	);
};

export default SignUp;
