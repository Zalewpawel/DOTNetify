import Image from 'next/image';

import { ScrollSection } from '@/components/ui/scroll-section';

import { PlayButton } from './play-button';

interface Album {
	id: string;
	title: string;
	image: string;
}

const albums: Album[] = [
	{
		id: '1',
		title: 'Szampan',
		image:
			'https://res.cloudinary.com/dh72iotcd/image/upload/v1736459566/xga-sanah-w-olawie-na-ekranie-kina-tak-1732538354_meetbs.jpg',
	},
	{
		id: '2',
		title: 'Przez Twe Oczy Zielone',
		image: 'https://res.cloudinary.com/dh72iotcd/image/upload/v1736353611/dotNetify/zenek_pqqjbw.webp',
	},
	{
		id: '3',
		title: 'Przekorny Los',
		image: 'https://res.cloudinary.com/dh72iotcd/image/upload/v1736353611/dotNetify/zenek_pqqjbw.webp',
	},
	{
		id: '4',
		title: 'Mocking Bird',
		image: 'https://res.cloudinary.com/dh72iotcd/image/upload/v1736354722/dotNetify/eminem_yswugy.jpg',
	},
];

export const AlbumList = () => {
	return (
		<ScrollSection title="Songs You like" showAllHref="/songs">
			{albums.map((album) => (
				<li
					key={album.id}
					className="group relative w-[160px] space-y-2 rounded-md p-4 transition-colors hover:bg-neutral-800"
				>
					<div className="relative aspect-square">
						<Image
							src={album.image}
							alt={album.title}
							className="h-full w-full rounded-md object-cover"
							width={300}
							height={300}
						/>
						<PlayButton songId={album.id} />
					</div>
					<div className="space-y-1 text-sm">
						<h3 className="line-clamp-1 font-semibold">{album.title}</h3>
						<p className="line-clamp-2 text-neutral-400">{album.artist}</p>
					</div>
				</li>
			))}
		</ScrollSection>
	);
};
