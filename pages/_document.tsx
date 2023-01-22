import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* 여기는 모든 헤더에 공통적으로 사용되는 것들. title  next/head -> page에 */}
					{/* 웹 폰트. next/document의 Head에 넣는 위치. */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Roboto" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
