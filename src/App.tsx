import { createContext, useEffect, useRef, useState } from "react";
import Search from "./_components/search/Search";
import GeneratedPlaylist from "./_components/GeneratedPlaylist";
import { Playlist, Song } from "./lib/types";
import Header from "./_components/Header";
import Landing from "./_components/Landing";
import Loading from "./_components/Loading";
import { generatePlaylist } from "./lib/api";

export const SelectedSongs = createContext<[Song[], (songs: Song[]) => void]>([
    [],
    () => {},
]);

export default function App() {
    const selectedSongsState = useState<Song[]>([]);
    const [playlist, setPlaylist] = useState<Playlist | null>(null);
    const [loading, setLoading] = useState(false);
    const playlistRef = useRef<HTMLElement>(null);

    const generate = async () => {
        setLoading(true);

        const songs = selectedSongsState[0].map((song) => ({
            title: song.title,
            artist: song.artist,
        }));
        const pl = await generatePlaylist(songs);
        setPlaylist(pl);
        setLoading(false);
    };

    useEffect(() => {
        if (playlist != null) {
            playlistRef.current?.scrollIntoView();
        }
    }, [playlist]);

    return (
        <SelectedSongs.Provider value={selectedSongsState}>
            {loading && <Loading />}
            <Header />
            <Landing onClick={generate} />
            {playlist && (
                <GeneratedPlaylist ref={playlistRef} playlist={playlist} />
            )}
        </SelectedSongs.Provider>
    );
}
