import Layout from '~/components/layout';
import '~/css/tailwind.css';
import '~/css/main.css';

export default function MyApp({ pageProps, Component }: any) {
	const { hideLayout } = Component;
	return (
		<Layout hideLayout={hideLayout}>
			<Component {...pageProps} />
		</Layout>
	);
}
