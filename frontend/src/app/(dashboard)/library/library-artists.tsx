import Image from 'next/image';
import Link from 'next/link';

interface Artist {
	id: string;
	name: string;
	image: string;
	type: string;
}

const artists: Artist[] = [
	{
		id: '1',
		name: 'Quebonafide',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '2',
		name: 'Quebonafide',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '3',
		name: 'Quebonafide',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '4',
		name: 'Quebonafide',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '5',
		name: 'Quebonafide',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '6',
		name: 'Quebonafide',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '7',
		name: 'Metallica',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '8',
		name: 'AC/DC',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '9',
		name: 'Queen',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '10',
		name: "Guns N' Roses",
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '11',
		name: 'Nirvana',
		image: '/album.jpg',
		type: 'Artist',
	},
	{
		id: '12',
		name: 'Led Zeppelin',
		image: '/album.jpg',
		type: 'Artist',
	},
];

export function LibraryArtists() {
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{artists.map((artist) => (
				<Link
					key={artist.id}
					href={`/artists/${artist.id}`}
					className="group space-y-4 rounded-md p-4 transition-colors hover:bg-slate-800"
				>
					<div className="relative aspect-square">
						<Image
							src={artist.image}
							alt={artist.name}
							className="rounded-full object-cover"
							fill
							sizes="(min-width: 1280px) 16.67vw, (min-width: 1024px) 20vw, (min-width: 640px) 33.33vw, 50vw"
						/>
					</div>
					<div className="space-y-1 text-sm">
						<h3 className="font-medium text-white">{artist.name}</h3>
						<p className="text-sm text-neutral-400">{artist.type}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
