import moment from 'moment';

export interface INewsItem {
    image: string;
    username: string;
    name: string;
    url: string;
}

const FollowItem: React.FC<INewsItem> = ({ image, username, name, url }) => {
    return <div className="px-4 py-3 anim hover:bg-dark-hover cursor-pointer border-b border-gray-100 border-opacity-15">
        <div className="flex">
            <div>
                <img src={image} className="w-12 h-12 rounded-lg" />
            </div>
            <div className="flex-grow px-3 items-center">
                <span className="text-white text-md font-bold">{name}</span>
                <span className="block text-gray-600 text-sm leading-none">
                    @{username}
                </span>
            </div>
            <a href={url} target="_blank"
                className="px-4 py-2 text-primary border-primary hover:bg-primary flex items-center border rounded-full hover:bg-opacity-25 h-8">
                Follow
            </a>
        </div>
    </div>
}

const WhoToFollowWidget: React.FC = () => {
    return <div className="widget">
        <div className="px-4 border-b border-gray-100 border-opacity-15 py-2">
            <span className="text-xl font-bold text-white">
                Who to follow
            </span>
        </div>
        <FollowItem url="http://localhost:3000/mhmdou1" image="/images/tailwind.png" name="Tailwind" username="tailwindcss" />
        <FollowItem url="https://twitter.com/vercel" image="/images/vercel.jpg" name="Vercel" username="vercel" />
        <FollowItem url="https://twitter.com/tailwindcss" image="/images/personal.jpg" name="Mohammad" username="mhmdou1" />

        <div className="px-4 py-3">
            <span className="text-primary hover:text-primary-hover cursor-pointer hover:underline">
                Show more
        </span>
        </div>
    </div>
}

export default WhoToFollowWidget;