import Layout from '~/components/layout';
import { AppProps } from 'next/app';
import '~/css/tailwind.css';
import '~/css/main.css';

export default function MyApp({ pageProps, Component }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
