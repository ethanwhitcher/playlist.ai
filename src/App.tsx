import { createContext, useEffect, useRef, useState } from "react";
import Search from "./_components/search/Search";
import GeneratedPlaylist from "./_components/GeneratedPlaylist";
import { Playlist, Song } from "./utils/types";
import Header from "./_components/Header";
import Landing from "./_components/Landing";
import Loading from "./_components/Loading";

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
        const pl = await fetch("http://localhost:3000/gpt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(songs),
        })
            .then((res) => res.json())
            .then((res) => ({
                ...res,
                duration: res.songs.reduce(
                    (dur: number, song: Song) => dur + song.duration,
                    0
                ),
            }))
            .catch((err) => {
                console.error(err);
                alert("Something went wrong, please try again later");
                return null;
            });
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
