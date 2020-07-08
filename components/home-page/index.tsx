import dynamic from 'next/dynamic'
import { tweets } from '../../fake-data/tweets';
import ReactList from 'react-list';
const TweetComponent = dynamic(() => import('../shared/tweet'), { ssr: false })
const TweetBox = dynamic(() => import('./tweet-box'), { ssr: false })





const HomeCenterComponent = () => {
	return (
		<div>
			<div className="p-3 border-b border-white border-opacity-15 sticky top-0 bg-dark z-50">
				<span className="text-white text-xl font-extrabold">Home</span>
			</div>
			<TweetBox />
			<div >
				<ReactList type="variable" axis="y" length={tweets.length} itemRenderer={((idx, key) => <TweetComponent key={key} {...tweets[idx]} />)} />
			</div>
		</div>
	);
};

export default HomeCenterComponent;
