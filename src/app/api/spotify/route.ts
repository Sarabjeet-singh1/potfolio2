import { NextResponse } from 'next/server';
import { 
    getAccessToken, 
    NOW_PLAYING_ENDPOINT, 
    RECENTLY_PLAYED_ENDPOINT, 
    USER_PROFILE_ENDPOINT 
} from '@/lib/spotify';

const getNowPlaying = async (access_token: string) => {
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentlyPlayed = async (access_token: string) => {
    return fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

const getUserProfile = async (access_token: string) => {
    return fetch(USER_PROFILE_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
}

export async function GET() {
  try {
    const access_token = await getAccessToken();

    if (!access_token) {
        return NextResponse.json({ isPlaying: false, error: "Could not get access token." }, { status: 500 });
    }

    const [nowPlayingRes, userProfileRes] = await Promise.all([
        getNowPlaying(access_token),
        getUserProfile(access_token)
    ]);
    
    const userProfile = await userProfileRes.json();


    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      // Not currently playing, get recently played.
      const recentlyPlayedRes = await getRecentlyPlayed(access_token);
      if(!recentlyPlayedRes.ok) {
          return NextResponse.json({ isPlaying: false, profile: userProfile });
      }
      const songData = await recentlyPlayedRes.json();
      const recentSong = songData.items[0].track;
      const isPlaying = false;
      const title = recentSong.name;
      const artist = recentSong.artists.map((_artist: any) => _artist.name).join(', ');
      const album = recentSong.album.name;
      const albumImageUrl = recentSong.album.images[0].url;
      const songUrl = recentSong.external_urls.spotify;
      
      return NextResponse.json({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
        profile: userProfile,
      });
    }

    const song = await nowPlayingRes.json();

    if (!song || !song.item) {
        return NextResponse.json({ isPlaying: false, profile: userProfile });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    return NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      profile: userProfile,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ isPlaying: false, error: error.message || 'Something went wrong' }, { status: 500 });
  }
} 