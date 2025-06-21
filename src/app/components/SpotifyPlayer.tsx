'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import SpotifyCard, { type SpotifyData } from './SpotifyCard';

const SpotifyPlayer = () => {
  // Spotify data and modal state
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data only when the modal is about to open
  const openSpotifyModal = async () => {
    setIsModalOpen(true);
    if (spotifyData) return; // Don't refetch if we already have data
    setLoading(true);
    try {
      const res = await fetch('/api/spotify');
      const result = await res.json();
      setSpotifyData(result);
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      setSpotifyData({ isPlaying: false });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Spotify Icon Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
            onClick={openSpotifyModal}
            className="w-16 h-16 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-full flex items-center justify-center group hover:border-green-500 transition-colors duration-300"
            aria-label="Show my Spotify status"
        >
            <Image src="/spotify.svg" alt="Spotify" width={32} height={32} className="group-hover:scale-110 transition-transform" />
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
              <SpotifyCard loading={loading} data={spotifyData} />
              {!loading && spotifyData?.profile && (
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