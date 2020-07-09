import Logo from '~/svgs/logo.svg';
import Input from '../shared/input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
const LoginComponent = () => {
	const router = useRouter();
	const { handleSubmit, register, errors } = useForm({
		mode: 'onSubmit',
	});

	const submitForm = (values: any) => {
		router.push('/home');
	};
	return (
		<div className="flex flex-col justify-center  container mt-5 text-white mx-auto">
			<Logo height="2.3rem" />
			<span className="font-bold text-2xl mt-6 pt-1 text-center">Log in to Twitter</span>

			<div className=" lg:w-5/12 lg:px-0 px-5 w-full mt-5 mx-auto">
				<form noValidate onSubmit={handleSubmit(submitForm)}>
					<div className="mb-5">
						<Input
							type="text"
							spellCheck="false"
							autoComplete="on"
							autoCorrect="off"
							name="username_or_email"
							placeholder="Phone, email or username"
							className="w-full"
							error={!!errors?.username_or_email?.message}
							innerRef={register({ required: 'This field is required' })}
						/>
						{errors?.username_or_email?.message && (
							<span className="text-pinkish text-sm">{errors?.username_or_email?.message}</span>
						)}
					</div>
					<div className="mb-5">
						<Input
							type="password"
							spellCheck="false"
							autoComplete="on"
							autoCorrect="off"
							name="password"
							placeholder="Password"
							className="w-full"
							error={!!errors?.password?.message}
							innerRef={register({ required: 'This field is required' })}
						/>
						{errors?.password?.message && (
							<span className="text-pinkish text-sm">{errors?.password?.message}</span>
						)}
					</div>
					<div className="-mx-1 mb-5">
						<button
							className={`bg-primary focus:outline-none font-bold hover:bg-primary-hover text-white rounded-full w-full py-3`}>
							Log in
						</button>
					</div>
					<div className="flex justify-center">
						<Link href="/signup">
							<a className="text-primary items-center hover:underline mr-2">Forgot password?</a>
						</Link>
						<div className="text-gray-500 leading-none">.</div>
						<Link href="/signup">
							<a className="text-primary hover:underline ml-2">Sign up for Twitter</a>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginComponent;
