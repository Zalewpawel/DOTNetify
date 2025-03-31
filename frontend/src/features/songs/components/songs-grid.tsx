import { Grid } from '@/components/shared/grid';
import { getUserPlaylists } from '@/features/playlists/data-access';
import { getCurrentUser } from '@/features/users/data-access';

import { type Song } from '../types';

import { SongCard } from './song-card';

interface Props {
	songs: Song[];
}

export const SongsGrid = async ({ songs }: Props) => {
	const user = await getCurrentUser();
	const playlists = await getUserPlaylists(user?.id);

	return (
		<Grid as="ul">
			{songs.map((song) => (
				<SongCard key={song.id} song={song} playlists={playlists} />
			))}
		</Grid>
	);
};
