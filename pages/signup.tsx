import Head from 'next/head';
import { INextPage } from '~/types/INextPage';
import dynamic from 'next/dynamic';
const SignupModal = dynamic(() => import('~/components/signup-page/signup-modal'));

const SignupPage: INextPage = () => {
	return (
		<div className="flex">
			<Head>
				<title>Signup / Twitter Clone</title>
			</Head>

			<SignupModal />
		</div>
	);
};

SignupPage.hideLayout = true;
export default SignupPage;
