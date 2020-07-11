import Layout from '~/components/layout';
import '~/css/tailwind.css';
import '~/css/main.css';
import Head from 'next/head';

export default function MyApp({ pageProps, Component }: any) {
	const { hideLayout } = Component;
	return (
		<Layout hideLayout={hideLayout}>
			<Head>
				<title>
					Twitter
				</title>
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
