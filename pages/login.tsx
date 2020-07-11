import Head from 'next/head';
import { INextPage } from '~/types/INextPage';
import dynamic from 'next/dynamic';
import SignupModal from '~/components/signup-page/signup-modal';
const LoginComponent = dynamic(() => import('~/components/login-page/login-component'));

const LoginPage: INextPage = () => {
	return (
		<div className="flex">
			<SignupModal />

			<Head>
				<title>Login / Twitter Clone</title>
			</Head>
			<LoginComponent />
		</div>
	);
};

LoginPage.hideLayout = true;
export default LoginPage;
