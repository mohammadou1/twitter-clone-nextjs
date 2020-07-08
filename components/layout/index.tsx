import Header from './header';
import styles from './styles/index.module.css';
const Layout: React.FC = ({ children }) => {
	return (
		<div className="flex min-h-screen">
			<Header />
			<main className="flex-grow">
				<div className={styles.main}>{children}</div>
			</main>
		</div>
	);
};

export default Layout;
