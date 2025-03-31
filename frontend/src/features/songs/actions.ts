'use server';

import { addSongToHistory, editSong, likeSong, removeLikedSong } from './data-access';
import { type Song } from './types';

export const addSongToHistoryAction = async (song: Song) => {
	try {
		await addSongToHistory(song.id);

		const updatedSong: Song = {
			...song,
			viewCount: song.viewCount + 1,
		};

		await editSong(updatedSong);

		return { success: true };
	} catch (error) {
		console.error('Failed to update song history:', error);
		return { success: false, error: 'Failed to update song history' };
	}
};

export const editSongAction = async (song: Song) => {
	await editSong(song);
};

export const likeSongAction = async (songId: number) => {
	try {
		const res = await likeSong(songId);
		if (!res?.ok) {
			return { success: false, error: 'Failed to like song' };
		}

		return { success: true, message: 'Song liked successfully' };
	} catch (error) {
		console.error('Failed to like song:', error);
		return { success: false, error: 'Failed to like song' };
	}
};

export const removeLikedSongAction = async (songId: number) => {
	try {
		await removeLikedSong(songId);
		return { success: true, message: 'Song has been removed from your Liked Songs' };
	} catch (error) {
		console.error('Failed to remove liked song:', error);
		return { success: false, error: 'Failed to remove liked song' };
	}
};
