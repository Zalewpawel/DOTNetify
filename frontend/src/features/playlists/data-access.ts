import { API_URL } from '@/lib/constants';

import { getCurrentUser } from '../users/data-access';

import type { CreatePlaylist, CreatePlaylistResponse, Playlist } from './types';

export const getUserPlaylists = async (userId: string | undefined) => {
	if (!userId) return [];

	const res = await fetch(`${API_URL}/api/Playlist/${userId}`);
	const data = (await res.json()) as Playlist[];
	return data;
};

export const createPlaylist = async (playlist: CreatePlaylist) => {
	const user = await getCurrentUser();
	if (!user) return;

	const res = await fetch(`${API_URL}/api/Playlist`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...playlist,
			userId: user.id,
		}),
	});

	console.log(res);

	const data = (await res.json()) as CreatePlaylistResponse;
	return data;
};

export const addSongToPlaylist = async (playlistId: number, songId: number) => {
	const res = await fetch(`${API_URL}/api/Playlist/${playlistId}/songs`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			songId,
		}),
	});

	console.log(res);

	return res;
};
