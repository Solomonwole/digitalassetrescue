"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { CustomBtn } from "@/app/utils/customBtn";

function FormInput() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [emailAdress, setEmailAdress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [selectedCountry, setSelectedCountry] = useState("");
	const [message, setMessage] = useState("");
	const [amount, setAmount] = useState("");
	const [code, setCode] = useState("");
	const [occupation, setOccupation] = useState("");
	const [serviceType, setServiceType] = useState("");
	const [hearAboutUs, setHearAboutUs] = useState("");

	const options = React.useMemo(() => countryList().getData(), []);

	const changeHandler = (value) => {
		setSelectedCountry(value);
	};
	const serviceChangeHandler = (value) => {
		setServiceType(value);
	};
	const hearAboutUsChangeHandler = (value) => {
		setHearAboutUs(value);
	};

	const Ref = useRef();
	const [loading, setLoading] = useState(false);
	const generateCode = () => {
		const min = 100000000; // Minimum 4-digit number
		const max = 999999999; // Maximum 4-digit number
		const generatedCode = Math.floor(Math.random() * (max - min + 1)) + min;
		setCode(generatedCode.toString());
	};

	const handleForm = async (e) => {
		e.preventDefault();
		setLoading(true);
		await generateCode();

		await emailjs
			.sendForm(
				// support@digitalassetrescue.net
				// "service_5wh2qwi",
				// "template_c55s5zk",
				// Ref.current,
				// "GWpxBop8gp0pMbaTQ"

				// pohiga2656@kinsef.com
				"service_6plqb4g",
				"template_e4m8av9",
				Ref.current,
				"0maGcCDssp0PAK-6Z"
			)
			.then(
				(result) => {
					console.log(result);
					setLoading(false);
					// router.replace("/thank-you");
					window.location.href = "/thank-you";
				},
				(error) => {
					console.log(error);
					setLoading(false);
					alert(error.message);
				}
			);
	};

	return (
		<div>
			<form ref={Ref} onSubmit={handleForm} className="space-y-5">
				<input type="text" name="generatedId" value={code} className="hidden" />

				<Container>
					<CustomInput
						htmlFor="firstName"
						label="First name"
						full={true}
						name="firstName"
						type="text"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						placeholder="First Name"
						required
					/>
					<CustomInput
						htmlFor="lastName"
						label="Last name"
						full={true}
						name="lastName"
						type="text"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Last Name"
						required
					/>
				</Container>
				<Container>
					<CustomInput
						htmlFor="emailAddress"
						label="Email Address"
						full={true}
						name="emailAddress"
						type="email"
						value={emailAdress}
						onChange={(e) => setEmailAdress(e.target.value)}
						placeholder="Your email address"
						required
					/>
					<div className="space-y-2">
						<label
							htmlFor="message"
							className="text-neutral-900 text-sm leading-tight font-['Space Grotesk'] font-medium">
							Select Country
						</label>

						<input
							type="text"
							name="country"
							value={selectedCountry.label}
							className="sr-only"
						/>

						<Select
							// name="country"
							options={options}
							value={selectedCountry}
							onChange={changeHandler}
						/>
					</div>
				</Container>

				<Container>
					<div className="space-y-2">
						<label
							htmlFor="message"
							className="text-neutral-900 text-sm leading-tight font-['Space Grotesk'] font-medium">
							Phone Number
						</label>

						<PhoneInput
							name="phoneNumber"
							defaultCountry="ca"
							value={phoneNumber}
							onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
						/>
					</div>
					<CustomInput
						htmlFor="occupation"
						label="Occupation"
						full={true}
						name="occupation"
						type="text"
						value={occupation}
						onChange={(e) => setOccupation(e.target.value)}
						placeholder="Occupation"
						required
					/>
				</Container>
				<Container>
					<div className="space-y-2">
						<label
							htmlFor="serviceType"
							className="text-neutral-900 text-sm leading-tight font-['Space Grotesk'] font-medium">
							Choose your service type
						</label>

						{/* <select
							id="serviceType"
							name="serviceType"
							value={serviceType}
							onChange={(e) => setServiceType(e.target.value)}
							className="w-full rounded-lg placeholder:text-placeholder border px-2 h-[50px] bg-transparent right-0 focus:right-0 focus:outline-none focus:border-primary-800 caret-[#54DF0A] overflow-ellipsis border-neutral-300">
							<option value="">Select a service type...</option>
							<option value="Forex">Forex</option>
							<option value="Binary Option">Binary Option</option>
							<option value="Romance Scam">Romance Scam</option>
							<option value="Investment Scam">Investment Scam</option>
							<option value="Cryptocurrency Scam">Cryptocurrency Scam</option>
							<option value="Hacking & Blackmail">Hacking & Blackmail</option>
							<option value="Others">Others</option>
						</select> */}

						<Select
							name="serviceType"
							options={services}
							value={serviceType}
							onChange={serviceChangeHandler}
						/>
					</div>

					<CustomInput
						htmlFor="amount"
						label="Amount"
						full={true}
						name="amount"
						type="text"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="How much did you lose"
						// inputMode="numeric"
						// pattern="[0-9]*"
						required
					/>
				</Container>

				<div className="space-y-2">
					<label
						htmlFor="hearAboutUs"
						className="text-neutral-900 text-sm leading-tight font-['Space Grotesk'] font-medium">
						How did you hear about us
					</label>

					{/* <select
						id="hearAboutUs"
						name="hearAboutUs"
						value={hearAboutUs}
						onChange={(e) => setHearAboutUs(e.target.value)}
						className="w-full rounded-lg placeholder:text-placeholder border px-2 h-[50px] bg-transparent right-0 focus:right-0 focus:outline-none focus:border-primary-800 caret-[#54DF0A] overflow-ellipsis border-neutral-300">
						<option value="">Select an option...</option>
						<option value="Social Media">Social Media</option>
						<option value="Google">Google</option>
						<option value="Quora">Quora</option>
						<option value="Reddit">Reddit</option>
						<option value="Friend">Friend</option>
						<option value="Others">Others</option>
					</select> */}

					<Select
						name="hearAboutUs"
						options={heartAbout}
						value={hearAboutUs}
						onChange={hearAboutUsChangeHandler}
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor="message"
						className="text-neutral-900 text-sm leading-tight font-['Space Grotesk'] font-medium">
						Message
					</label>
					<textarea
						name="message"
						id="message"
						cols="20"
						rows="5"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Write a message"
						className="w-full rounded-lg placeholder:text-placeholder border px-2 py-3 right-0 focus:right-0 focus:outline-none focus:border-primary-800 caret-[#54DF0A] overflow-ellipsis border-neutral-300"
						required></textarea>
				</div>
				<div className="w-full lg:w-[40%]">
					{!loading ? (
						<CustomBtn type="submit" full={true}>
							Submit
						</CustomBtn>
					) : (
						<CustomBtn type="button" full={true}>
							Sending...
						</CustomBtn>
					)}
				</div>
			</form>
		</div>
	);
}

export default FormInput;

export function CustomInput({ htmlFor, label, full, error, ...props }) {
	return (
		<div className="space-y-2">
			<label
				htmlFor={htmlFor}
				className="text-neutral-900 text-sm leading-tight font-['Space Grotesk'] font-medium">
				{label}
			</label>
			<input
				className={`${
					full ? "w-full" : ""
				} rounded-lg placeholder:text-placeholder border ${
					error ? "border-error-800" : "border-neutral-300"
				} px-2 py-3 right-0 focus:right-0 focus:outline-none focus:border-primary-800 caret-[#54DF0A] overflow-ellipsis`}
				{...props}
			/>
		</div>
	);
}

function Container({ children }) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">{children}</div>
	);
}

const services = [
	{
		value: "Forex",
		label: "Forex",
	},
	{
		value: "Binary Option",
		label: "Binary Option",
	},
	{
		value: "Romance Scam",
		label: "Romance Scam",
	},
	{
		value: "Investment Scam",
		label: "Investment Scam",
	},
	{
		value: "Cryptocurrency Scam",
		label: "Cryptocurrency Scam",
	},
	{
		value: "Hacking & Blackmail",
		label: "Hacking & Blackmail",
	},
	{
		value: "Others",
		label: "Others",
	},
];

const heartAbout = [
	{ value: "Social Media", label: "Social Media" },
	{ value: "Google", label: "Google" },
	{ value: "Quora", label: "Quora" },
	{ value: "Reddit", label: "Reddit" },
	{ value: "Friend", label: "Friend" },
	{ value: "Others", label: "Others" },
];
