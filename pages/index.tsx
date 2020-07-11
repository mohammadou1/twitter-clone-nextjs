import { INextPage } from '../types/INextPage';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

//  This page is gonna be twitter index page later
const IndexPage: INextPage = () => {
	const router = useRouter();
	useEffect(() => {
		router.replace('/login');
	}, []);
	return null;
};

export async function getServerSideProps(ctx: NextPageContext) {
	try {
		ctx.res?.writeHead(302, { Location: '/login' });
		ctx.res?.end();
		return {
			props: {},
		};
	} catch (error) {
		console.log(error);
	}
}
export default IndexPage;
