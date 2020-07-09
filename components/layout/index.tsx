import Header from './header';
import styles from './styles/index.module.css';

export type ILayout = {
	hideLayout?: boolean;
};

const Layout: React.FC<ILayout> = ({ children, hideLayout = false }) => {
	return (
		<div className="flex min-h-screen">
			{!hideLayout && <Header />}
			<main className="flex-grow ">
				{!hideLayout ? <div className={styles.main}>{children}</div> : children}
			</main>
		</div>
	);
};

export default Layout;
