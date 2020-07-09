import Head from 'next/head';
import { INextPage } from '~/types/INextPage';
import dynamic from 'next/dynamic';
const LoginComponent = dynamic(() => import('~/components/login-page'));

const LoginPage: INextPage = () => {
	return (
		<div className="flex">
			<Head>
				<title>Login / Twitter Clone</title>
			</Head>
			<LoginComponent />
		</div>
	);
};

LoginPage.hideLayout = true;
export default LoginPage;
