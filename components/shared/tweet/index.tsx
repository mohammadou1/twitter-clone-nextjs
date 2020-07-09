import Link from 'next/link';
import moment from 'moment';
import ArrowDown from '~/svgs/arrow-down.svg';
import Replies from '~/svgs/replies.svg';
import Retweet from '~/svgs/retweet.svg';
import Heart from '~/svgs/heart.svg';
import Share from '~/svgs/share.svg';

export interface ITweet {
	id?: string;
	avatar?: string;
	username?: string;
	name?: string;
	description?: string;
	assets?: { type: string; url: string }[];
	replies?: number;
	retweets?: number;
	likes?: number;
	date?: string | Date;
}

const TweetComponent: React.FC<ITweet> = props => {
	return (
		<div className="flex cursor-pointer hover:bg-dark-lighter p-3 anim border-b border-gray-100 border-opacity-15">
			<Link href="/mhmdou1">
				<a className="flex-shrink-0 h-12 w-12 pt-1">
					<div className="relative">
						<div className="absolute anim left-0 right-0 top-0 bottom-0 z-10 hover:bg-black rounded-full hover:bg-opacity-15"></div>
						<img src={props.avatar} alt="mhmdou1" className="rounded-full min-w-full asd h-12 w-12" />
					</div>
				</a>
			</Link>
			<div className="flex-grow px-3 pb-1 relative">
				<div className="flex">
					<div className="flex flex-grow flex-wrap items-center">
						<div>
							<span className="text-white font-bold mr-1 cursor-pointer hover:underline">
								{props.name}
							</span>
							<span className="text-gray-600">
								{props.username} . {moment(props.date).format('ll')}
							</span>
						</div>
					</div>
					<button className="text-white rounded-full anim px-1 py-1 hover:bg-primary hover:bg-opacity-15 focus:bg-opacity-50 focus:outline-none">
						<ArrowDown height="1rem" />
					</button>
				</div>
				<div className="pr-1">
					<span
						className="text-white"
						dangerouslySetInnerHTML={{ __html: props.description || '' }}></span>
					<div className="mt-3 flex-wrap flex">
						{props.assets?.map((file, idx) => (
							<div
								key={idx}
								className={`rounded-lg overflow-hidden border border-gray-100 border-opacity-15 ${
									props.assets && props.assets.length > 1 ? 'w-full lg:w-1/2' : 'w-full'
								}`}>
								<img src={file.url} className="w-full" />
							</div>
						))}
					</div>
				</div>
				<div className="flex mt-3">
					<div className="text-gray-500 select-none hover:text-primary anim flex items-center flex-grow">
						<Replies height="1.2rem" />
						<span className="ml-3 text-xs">{props.replies}</span>
					</div>
					<div className="text-gray-500 select-none hover:text-green-600 anim flex items-center flex-grow">
						<Retweet height="1.2rem" />
						<span className="ml-3 text-xs">{props.retweets}</span>
					</div>
					<div className="text-gray-500 select-none hover:text-pinkish anim flex items-center flex-grow">
						<Heart height="1.2rem" />
						<span className="ml-3 text-xs">{props.likes}</span>
					</div>
					<div className="text-gray-500 select-none  hover:text-primary anim flex items-center flex-grow">
						<Share height="1.2rem" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TweetComponent;
