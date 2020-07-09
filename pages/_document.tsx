import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<link rel="icon" type="image/png" href="/twitter.ico" />
				</Head>
				<body className="bg-dark overflow-y-scroll">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
