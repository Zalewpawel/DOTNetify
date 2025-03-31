'use client';

import { useMemo } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { AudioLines, Clock, Play } from 'lucide-react';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn, formatTime } from '@/lib/utils';
import { usePlayerStore } from '@/store/use-player-store';
import { type Playlist, type Song } from '@/types';

const playlist = {
	id: '1',
	title: 'Zenek Martyniuk',
	image: 'https://res.cloudinary.com/dh72iotcd/image/upload/v1736353611/dotNetify/zenek_pqqjbw.webp',
	type: 'Artist',
	songs: [
		{
			id: 1,
			title: 'Przez Twe Oczy Zielone',
			artist: 'Zenek Martyniuk',
			duration: 208,
			audioUrl: '/audio.mp3',
			addedAt: '2024-01-15',
			albumId: '1',
			imageUrl: '/album.jpg',
		},
		{
			id: 2,
			title: 'Przekorny Los',
			artist: 'Zenek Martyniuk',
			duration: 356,
			audioUrl: '/audio.mp3',
			addedAt: '2024-01-15',
			albumId: '1',
			imageUrl: '/album.jpg',
		},
	],
};

const columnHelper = createColumnHelper<Song>();

export default function PlaylistPage() {
	const { currentSong, isPlaying, playPlaylist } = usePlayerStore();

	const handlePlay = (startIndex: string = '1') => {
		playPlaylist(playlist.songs, parseInt(startIndex) - 1);
	};

	const columns = useMemo(
		() => [
			columnHelper.accessor('id', {
				header: '#',
				cell: (info) => (
					<div className="flex items-center gap-2">
						{currentSong?.id === info.row.original.id ? (
							<AudioLines className={cn('size-4 text-brand-400', isPlaying && 'animate-pulse')} />
						) : (
							<span className="text-sm font-medium text-neutral-200">{info.getValue()}</span>
						)}
					</div>
				),
			}),
			columnHelper.accessor('title', {
				header: 'Title',
				cell: (info) => (
					<div className="flex items-center gap-4">
						<span
							className={cn(
								'text-sm font-medium text-neutral-200',
								currentSong?.id === info.row.original.id && 'text-brand-400',
							)}
						>
							{info.getValue()}
						</span>
					</div>
				),
			}),
			columnHelper.accessor('artist', {
				header: 'Artist',
				cell: (info) => <span className="text-sm text-neutral-400">{info.getValue()}</span>,
			}),
			columnHelper.accessor('addedAt', {
				header: 'Date added',
				cell: (info) => (
					<span className="text-sm text-neutral-400">{new Date(info.getValue()).toLocaleDateString()}</span>
				),
			}),
			columnHelper.accessor('duration', {
				header: () => (
					<TooltipProvider>
						<Tooltip delayDuration={300}>
							<TooltipTrigger asChild>
								<Clock className="size-4" aria-label="Song duration" />
							</TooltipTrigger>
							<TooltipContent side="top" align="center">
								<p className="text-sm">Duration</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				),
				cell: (info) => <span className="text-sm text-neutral-400">{formatTime(info.getValue())}</span>,
			}),
		],
		[currentSong?.id, isPlaying],
	);

	const table = useReactTable({
		data: playlist.songs,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="space-y-6">
			<div className="flex items-end gap-6 rounded-t-xl bg-gradient-to-b from-slate-600/50 to-slate-900/50 p-6">
				<div className="size-[232px] flex-shrink-0">
					<Image
						src={playlist.image}
						alt={playlist.title}
						className="size-full rounded-md object-cover shadow-lg"
						width={232}
						height={232}
					/>
				</div>
				<Button
					aria-label="Play playlist"
					size="icon"
					className="rounded-full bg-brand p-0 text-white hover:scale-105 hover:bg-brand/90"
					onClick={() => handlePlay()}
				>
					<span className="sr-only">Play</span>
					<Play className="size-4 fill-white" />
				</Button>
				<div className="flex flex-col gap-6">
					<div>
						<p className="text-sm font-medium">Artist</p>
						<h1 className="mt-2 text-5xl font-bold">{playlist.title}</h1>
					</div>
					<div className="flex items-center gap-1 text-sm text-neutral-400">
						<span>{playlist.songs.length} songs</span>
					</div>
				</div>
			</div>

			<div className="rounded-b-xl bg-slate-800/50 p-6">
				<div className="relative overflow-x-auto">
					<table className="w-full table-fixed text-left">
						<thead className="border-b border-white/5">
							{table.getHeaderGroups().map((headerGroup) => (
								<tr key={headerGroup.id}>
									{headerGroup.headers.map((header) => (
										<th
											key={header.id}
											className="pb-4 text-sm font-medium text-neutral-400"
											style={{ width: header.getSize() }}
										>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody>
							{table.getRowModel().rows.map((row) => (
								<tr
									key={row.id}
									className={cn(
										'group h-14 cursor-pointer rounded-md transition-colors hover:bg-white/5',
										currentSong?.id === row.original.id && '!text-brand',
									)}
									onClick={() => handlePlay(row.id)}
								>
									{row.getVisibleCells().map((cell) => (
										<td
											key={cell.id}
											className={cn(
												'first:rounded-l-md last:rounded-r-md',
												currentSong?.id === row.original.id && '!text-brand',
											)}
										>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
