'use client';

import { useCallback } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

import { LibraryArtists } from './library-artists';
import { LibraryPlaylists } from './library-playlists';

export default function LibraryPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const tab = searchParams.get('tab') || 'playlists';

	const createQueryString = useCallback(
		(params: Record<string, string>) => {
			const newSearchParams = new URLSearchParams(searchParams.toString());
			
			Object.entries(params).forEach(([key, value]) => {
				newSearchParams.set(key, value);
			});

			return newSearchParams.toString();
		},
		[searchParams],
	);

	return (
		<div className="space-y-6 rounded-xl bg-slate-800/50 p-6">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Your Library</h1>
			</div>

			<Tabs defaultValue={tab} onValueChange={(value) => router.push(`/library?${createQueryString({ tab: value })}`)}>
				<TabsList className="bg-slate-900">
					<TabsTrigger 
						value="playlists"
						className={cn(
							'data-[state=active]:bg-slate-800',
							'data-[state=active]:text-white',
							'data-[state=active]:shadow-none'
						)}
					>
						Playlists
					</TabsTrigger>
					<TabsTrigger 
						value="artists"
						className={cn(
							'data-[state=active]:bg-slate-800',
							'data-[state=active]:text-white',
							'data-[state=active]:shadow-none'
						)}
					>
						Artists
					</TabsTrigger>
				</TabsList>
				<TabsContent value="playlists" className="mt-6">
					<LibraryPlaylists />
				</TabsContent>
				<TabsContent value="artists" className="mt-6">
					<LibraryArtists />
				</TabsContent>
			</Tabs>
		</div>
	);
} 