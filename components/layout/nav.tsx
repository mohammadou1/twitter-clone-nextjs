import Home from '~/svgs/home.svg';
import Explore from '~/svgs/hashtag.svg';
import Notification from '~/svgs/notification.svg';
import Envelope from '~/svgs/envelope.svg';
import Bookmark from '~/svgs/bookmark.svg';
import Profile from '~/svgs/profile.svg';
import Settings from '~/svgs/settings.svg';
import List from '~/svgs/list.svg';
import Tweet from '~/svgs/tweet.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles/nav.module.css';
import useMedia from '~/hooks/useMedia';
const links = [
	{ href: '/', icon: <Home height="1.4rem" />, title: 'Home' },
	{ href: '/explore', icon: <Explore height="1.4rem" />, title: 'Explore' },
	{ href: '/notifications', icon: <Notification height="1.4rem" />, title: 'Notifications' },
	{ href: '/messages', icon: <Envelope height="1.4rem" />, title: 'Messages' },
	{ href: '/bookmarks', icon: <Bookmark height="1.4rem" />, title: 'Bookmarks' },
	{ href: '/lists', icon: <List height="1.4rem" />, title: 'List' },
	{ href: '/profile', icon: <Profile height="1.4rem" />, title: 'Profile' },
];

const TwitterNav = () => {
	const router = useRouter();
	const isMobile = useMedia(1280);
	const path = router.asPath;
	return (
		<nav className="flex flex-col text-center xl:text-left">
			{links.map(link => {
				const classname = path === link.href ? 'text-primary' : 'text-white';
				return (
					<Link key={link.href} href={link.href}>
						<a className={`${classname} ${styles.link}`}>
							<div className="font-bold inline-flex items-center text-xl anim rounded-full px-2 xl:px-3 py-2">
								{link.icon}
								<div className="mx-5 hidden xl:inline-block">
									<span>{link.title}</span>
								</div>
							</div>
						</a>
					</Link>
				);
			})}
			<div className={styles.link}>
				<div className="font-bold inline-flex items-center text-xl anim rounded-full px-2 xl:px-3 py-2">
					<Settings height="1.4rem" />
					<div className="mx-5 hidden xl:inline-block">
						<span>More</span>
					</div>
				</div>
			</div>

			<div>
				<button className="text-white xl:w-11/12 shadow-sm focus:outline-none font-bold mt-3 bg-primary hover:bg-primary-hover py-3 px-3 text-center xl:px-4 rounded-full">
					{isMobile ? <Tweet height="1.4rem" /> : 'Tweet'}
				</button>
			</div>
		</nav>
	);
};

export default TwitterNav;
