import { ActiveLink } from '@/components/ui/active-link';
import { PlaylistCover } from '@/components/ui/playlist-cover';
import { type Playlist } from '@/types';

interface Props {
	playlist: Playlist;
}

export const SidebarPlaylist = ({ playlist }: Props) => {
	return (
		<ActiveLink
			href={`/playlists/${playlist.id}`}
			className="group flex cursor-pointer items-center justify-center gap-3 rounded-md p-2 hover:bg-slate-800 md:justify-start md:p-0"
			activeClassName="bg-slate-800"
		>
			<div className="size-10 flex-shrink-0 md:size-12">
				<PlaylistCover title={playlist.title} />
			</div>
			<div className="hidden min-w-0 flex-1 md:block">
				<p className="truncate font-medium text-neutral-200">{playlist.title}</p>
				<p className="truncate text-sm text-neutral-400">
					{playlist.type} • {playlist.author}
				</p>
			</div>
		</ActiveLink>
	);
};
