'use client';

import Image from 'next/image';

export interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  album?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
  profile?: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    images: { url: string }[];
  };
}

interface SpotifyCardProps {
    data: SpotifyData | null;
    loading: boolean;
}

const SpotifyCard = ({ data, loading }: SpotifyCardProps) => {
  if (loading) {
    return (
      <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 p-6 rounded-2xl shadow-lg text-white max-w-sm w-full min-h-[180px] flex justify-center items-center">
        <p>Loading Spotify data...</p>
      </div>
    );
  }

  if (!data || !data.profile) {
    return (
      <div className="bg-red-800/80 backdrop-blur-md border border-red-700 p-6 rounded-2xl shadow-lg text-white max-w-sm w-full min-h-[180px] flex justify-center items-center">
        <p>Could not load Spotify data. Please check your setup.</p>
      </div>
    );
  }

  const { profile } = data;

  return (
    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 p-6 rounded-2xl shadow-lg text-white max-w-sm w-full flex flex-col gap-4 transition-all duration-300">
        <div className="flex items-center gap-4">
            {profile.images?.[0]?.url && (
                <Image
                    src={profile.images[0].url}
                    alt={profile.display_name}
                    width={50}
                    height={50}
                    className="rounded-full"
                />
            )}
            <div>
                <p className="text-zinc-400 text-sm">Spotify Profile</p>
                <a
                    href={profile.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg hover:underline"
                >
                    {profile.display_name}
                </a>
            </div>
        </div>
        
        <hr className="border-zinc-700" />
        
        {data.title ? (
            <a 
                href={data.songUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
            >
                {data.albumImageUrl && (
                    <Image
                        src={data.albumImageUrl}
                        alt={data.album || 'Album art'}
                        width={64}
                        height={64}
                        className="rounded-md shadow-md group-hover:scale-105 transition-transform"
                    />
                )}
                <div>
                    <p className="font-semibold text-base group-hover:underline">{data.title}</p>
                    <p className="text-zinc-400 text-sm">{data.artist}</p>
                    <p className={`text-xs font-semibold ${data.isPlaying ? 'text-green-400' : 'text-zinc-500'}`}>
                        {data.isPlaying ? 'Currently Playing' : 'Last Played'}
                    </p>
                </div>
            </a>
        ) : (
             <div>
                <p className="text-zinc-400 text-sm">Not currently listening to anything.</p>
             </div>
        )}
    </div>
  );
};

export default SpotifyCard; 