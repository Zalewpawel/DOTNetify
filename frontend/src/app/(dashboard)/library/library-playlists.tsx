import Link from 'next/link';

import { PlayButton } from '@/components/shared/play-button';
import { PlaylistCover } from '@/components/ui/playlist-cover';
import { type Playlist } from '@/types';

const playlists: Playlist[] = [
	{
		id: '1',
		title: 'Playlist 1',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 1',
	},
	{
		id: '2',
		title: 'Playlist 2',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 2',
	},
	{
		id: '3',
		title: 'Playlist 3',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 3',
	},
	{
		id: '4',
		title: 'Rock Classics',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Spotify',
	},
	{
		id: '5',
		title: 'Chill Vibes',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Spotify',
	},
	{
		id: '6',
		title: 'Workout Mix',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 4',
	},
	{
		id: '7',
		title: 'Study Session',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 5',
	},
	{
		id: '8',
		title: 'Party Hits',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 2',
	},
	{
		id: '9',
		title: 'Road Trip Mix',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 1',
	},
	{
		id: '10',
		title: 'Jazz Collection',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 3',
	},
	{
		id: '11',
		title: 'Morning Coffee',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 4',
	},
	{
		id: '12',
		title: 'Evening Relaxation',
		type: 'playlist',
		image: '/album.jpg',
		author: 'Author 5',
	},
];

export function LibraryPlaylists() {
	return (
		<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{playlists.map((playlist) => (
				<Link
					key={playlist.id}
					href={`/playlists/${playlist.id}`}
					className="group space-y-4 rounded-md p-4 transition-colors hover:bg-slate-800"
				>
					<div className="relative aspect-square">
						<PlaylistCover title={playlist.title} />
						<PlayButton songId={playlist.id} />
					</div>
					<div className="space-y-1 text-sm">
						<h3 className="font-medium text-white">{playlist.title}</h3>
						<p className="text-sm text-neutral-400">
							{playlist.type} • {playlist.author}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
