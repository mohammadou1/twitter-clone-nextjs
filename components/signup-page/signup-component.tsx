import Logo from '~/svgs/logo.svg';
import Input from '../shared/input';
import { useState, useRef, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
const SignupComponent: React.FC = () => {
	const [isPhone, setIsPhoneOrEmail] = useState(true);
	const { register, unregister, errors, handleSubmit, setValue } = useForm({
		mode: 'onChange',
	});

	// using ref instead of state, to not rerender this component just to update a number
	const nameLengthRef = useRef<HTMLSpanElement>(null);

	const updateNameLength = (e: any) => {
		if (nameLengthRef.current) {
			nameLengthRef.current.innerHTML = e.target.value.length + '/50';
		}
	};
	const togglePhoneOrEmail = () => {
		setValue('email', null);
		setValue('phone', null);
		// * we are just unregistering the phone if email is selected, and unregistering email if phone is selected
		if (isPhone) unregister('phone');
		else unregister('email');
		setIsPhoneOrEmail(prev => !prev);
	};

	const submitForm = (values: any) => console.log(values);

	return (
		<div className="p-3 w-full">
			<form noValidate onSubmit={handleSubmit(submitForm)}>
				<div className="flex justify-between items-center">
					<div className="w-1/3"></div>
					<div className="w-1/3 flex justify-center">
						<Logo height="1.7rem" />
					</div>
					<div className="w-1/3 text-right">
						<button
							type="submit"
							className="focus:outline-none bg-primary hover:bg-primary-hover text-white font-bold rounded-full px-4 py-1">
							Next
						</button>
					</div>
				</div>
				<div className="mt-8 px-3">
					<span className="text-white text-2xl font-bold mb-5 block">Create your account</span>
					<div className="mb-5">
						<Input
							maxLength={50}
							onChange={updateNameLength}
							placeholder="Name"
							name="name"
							innerRef={register({ required: "What's your name?" })}
							error={!!errors?.name?.message}
						/>
						<div className="flex mt-1 text-gray-600 px-2">
							<div className="block flex-grow">
								{errors?.name?.message && (
									<span className="text-pinkish text-sm">{errors.name.message}</span>
								)}
							</div>
							<span ref={nameLengthRef}>0/50</span>
						</div>
					</div>
					{isPhone ? (
						<div className="mb-5">
							{/* Fake phone validation obivously xD */}
							<Input
								type="text"
								inputMode="numeric"
								maxLength={50}
								placeholder="Phone"
								name="phone"
								innerRef={register({ required: 'Please enter a valid phone number' })}
								error={!!errors?.phone?.message}
							/>
							{errors?.phone?.message && (
								<span className="text-pinkish text-sm">{errors.phone.message}</span>
							)}
						</div>
					) : (
						<div className="mb-5">
							<Input
								type="email"
								maxLength={50}
								placeholder="Email"
								name="email"
								innerRef={register({
									validate: value => validator.isEmail(value) || 'Please enter a valid email address',
								})}
								error={!!errors?.email?.message}
							/>
							{errors?.email?.message && (
								<span className="text-pinkish text-sm">{errors.email.message}</span>
							)}
						</div>
					)}
					<div className="mb-5">
						<span
							onClick={togglePhoneOrEmail}
							className="text-primary hover:underline text-sm cursor-pointer">
							Use {isPhone ? 'email' : 'phone'} instead
						</span>
					</div>

					<span className="block text-white font-bold">Date of birth</span>
					<p className="text-gray-600 leading-4 mb-4">
						This will not be shown publicly. Confirm your age to receive the appropriate experience.
					</p>

					<div className="flex">
						<div className="w-1/2">
							<Input
								placeholder="Month"
								name="month"
								type="select"
								options={[{ label: 'January', value: 'January' }]}
							/>
						</div>
						<div className="w-1/4 px-3">
							<Input placeholder="Day" name="day" type="select" options={[{ value: 1, label: 1 }]} />
						</div>
						<div className="w-1/4">
							<Input placeholder="Year" name="year" type="select" options={[{ value: 1, label: 1 }]} />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
export default SignupComponent;
