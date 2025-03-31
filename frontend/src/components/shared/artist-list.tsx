import Image from 'next/image';

import { ScrollSection } from '@/components/ui/scroll-section';

interface Artist {
	id: string;
	name: string;
	image: string;
	type: string;
}

const artists = [
	{
		id: '1',
		name: 'Sanah',
		image:
			'https://res.cloudinary.com/dh72iotcd/image/upload/v1736459566/xga-sanah-w-olawie-na-ekranie-kina-tak-1732538354_meetbs.jpg',
	},
	{
		id: '2',
		name: 'Zenek Martyniuk',
		image: 'https://res.cloudinary.com/dh72iotcd/image/upload/v1736353611/dotNetify/zenek_pqqjbw.webp',
	},
	{
		id: '3',
		name: 'Lady Gaga',
		image: 'https://res.cloudinary.com/dh72iotcd/image/upload/v1736354417/dotNetify/lady-gaga_hht2ef.webp',
	},
	{
		id: '4',
		name: 'Eminem',
		image: 'https://res.cloudinary.com/dh72iotcd/image/upload/v1736354722/dotNetify/eminem_yswugy.jpg',
	},
];

export const ArtistList = () => {
	return (
		<ScrollSection title="Popular artists" showAllHref="/artists">
			{artists.map((artist) => (
				<li
					key={artist.id}
					className="group relative w-[160px] space-y-4 rounded-md p-4 transition-colors hover:bg-neutral-800"
				>
					<div className="relative aspect-square">
						<Image
							src={artist.image}
							alt={artist.name}
							className="size-full rounded-full object-cover"
							width={300}
							height={300}
						/>
					</div>
					<div className="space-y-1 text-sm">
						<h3 className="font-semibold">{artist.name}</h3>
						<p className="text-neutral-400">Artist</p>
					</div>
				</li>
			))}
		</ScrollSection>
	);
};
