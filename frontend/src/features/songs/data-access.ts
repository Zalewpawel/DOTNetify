import { API_URL } from '@/lib/constants';

import { getCurrentUser } from '../users/data-access';

import { type LikedSongResponse, type Song } from './types';

export const getSongsByQuery = async (query: string) => {
	const response = await fetch(`${API_URL}/api/Songs?query=${query}`);
	const data = (await response.json()) as Song[];
	return data;
};

export const getSongsByGenre = async (genreId: number) => {
	const response = await fetch(`${API_URL}/api/Songs?genreId=${genreId}`);
	const data = (await response.json()) as Song[];
	return data;
};

export const getLikedSongs = async () => {
	const user = await getCurrentUser();
	if (!user) return [];

	const response = await fetch(`${API_URL}/api/LikedSongs/user/${user.id}`);
	const data = (await response.json()) as LikedSongResponse[];

	return data.map((likedSong) => ({
		id: likedSong.id,
		song: {
			...likedSong.songDto,
			artist: likedSong.artist,
		} satisfies Song,
	}));
};

export const getSongById = async (songId: number) => {
	const response = await fetch(`${API_URL}/api/Songs/${songId}`, {
		cache: 'no-store',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch song');
	}

	const data = (await response.json()) as Song;
	return data;
};

export const addSongToHistory = async (songId: number) => {
	const user = await getCurrentUser();

	if (!user) return;

	const response = await fetch(`${API_URL}/api/UserHistory`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ songId, userId: user.id }),
	});

	if (!response.ok) {
		console.error('Failed to add song to history', response);
	}

	return response;
};

export const editSong = async (song: Song) => {
	const response = await fetch(`${API_URL}/api/Songs`, {
		method: 'PUT',
		credentials: 'include',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(song),
	});

	if (!response.ok) {
		throw new Error('Failed to update song');
	}

	return response;
};

export const likeSong = async (songId: number) => {
	const user = await getCurrentUser();
	if (!user) return;

	const response = await fetch(`${API_URL}/api/LikedSongs`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			userId: user.id,
			songId,
		}),
	});

	return response;
};

export const removeLikedSong = async (songId: number) => {
	const res = await fetch(`${API_URL}/api/LikedSongs/${songId}`, {
		method: 'DELETE',
		credentials: 'include',
	});

	return res;
};
