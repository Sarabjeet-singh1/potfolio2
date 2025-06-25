'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SpotifyCard, { type SpotifyData } from './SpotifyCard';

const SpotifyPlayer = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/spotify');
      setSpotifyData(await res.json());
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      // Set a default state on error only if there's no data yet
      if (!spotifyData) {
        setSpotifyData({ isPlaying: false });
      }
    }
  };

  // 1. Pre-load data as soon as the component is ready.
  useEffect(() => {
    fetchData();
  }, []);

  // 2. Keep data fresh by re-fetching every 5 seconds, but only when the modal is open.
  useEffect(() => {
    if (isModalOpen) {
      const interval = setInterval(fetchData, 5000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen]);

  // The loading state is now true only if the modal is open AND we don't have data yet.
  const isLoading = isModalOpen && !spotifyData;

  return (
    <>
      {/* Floating Spotify Icon Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-full flex items-center justify-center group hover:border-green-500 transition-colors duration-300"
            aria-label="Show my Spotify status"
        >
            <Image src="/spotify.svg" alt="Spotify" width={28} height={28} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Spotify Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center gap-6"
            >
              <SpotifyCard loading={isLoading} data={spotifyData} />
              {!isLoading && spotifyData?.profile && (
                <motion.a
                  href={spotifyData.profile.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                  View Playlists on Spotify
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpotifyPlayer; 