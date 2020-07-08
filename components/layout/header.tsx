import styles from './styles/header.module.css';
import Link from 'next/link';
import Logo from '~/svgs/logo.svg';
import dynamic from 'next/dynamic'
const TwitterNav = dynamic(() => import('./nav'), { ssr: false })

const Header: React.FC = () => {
	return (
		<header className="flex-grow flex justify-end">
			<div className={styles.header}>
				<Link href="/">
					<a>
						<div className="w-12 h-12 flex justify-center items-center rounded-full cursor-pointer hover:bg mt-1 mb-4 hover:bg-dark-hover">
							<Logo height="1.75rem" />
						</div>
					</a>
				</Link>
				<TwitterNav />
			</div>
		</header>
	);
};

export default Header;
