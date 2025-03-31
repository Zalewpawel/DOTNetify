import { ScrollSection } from '@/components/ui/scroll-section';
import { getUserPlaylists } from '@/features/playlists/data-access';
import { getCurrentUser } from '@/features/users/data-access';

import { getLikedSongs } from '../data-access';

import { SongCard } from './song-card';

export const LikedSongs = async () => {
	const user = await getCurrentUser();
	const [likedSongs, playlists] = await Promise.all([getLikedSongs(), getUserPlaylists(user?.id)]);

	if (!likedSongs.length) {
		return null;
	}

	return (
		<ScrollSection title="Liked Songs" showAllHref="/liked-songs" showAllLabel="Show all">
			{likedSongs.map(({ id, song }) => (
				<SongCard key={id} song={song} isLiked={true} playlists={playlists} />
			))}
		</ScrollSection>
	);
};
