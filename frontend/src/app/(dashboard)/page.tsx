import { AlbumList } from '@/components/shared/album-list';
import { ArtistList } from '@/components/shared/artist-list';
import { GenreList } from '@/features/genres/components/genre-list';
import { getGenres } from '@/features/genres/data-access';
import { SongsGrid } from '@/features/songs/components/songs-grid';
import { getSongsByGenre } from '@/features/songs/data-access';
import { type SearchParams } from '@/types';

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {
	const genre = (await searchParams).genre;
	const genres = await getGenres();

	if (genre) {
		const songs = await getSongsByGenre(Number(genre as string));

		return (
			<div className="h-full space-y-6 rounded-xl p-6">
				<GenreList genres={genres} />
				<SongsGrid songs={songs} />
			</div>
		);
	}

	return (
		<div className="space-y-6 rounded-xl p-6">
			<GenreList genres={genres} />
			<AlbumList />
			<ArtistList />
		</div>
	);
}
