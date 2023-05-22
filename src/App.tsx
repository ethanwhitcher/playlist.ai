import { createContext, useState } from "react";
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
                title: "Playlist",
                image: "https://via.placeholder.com/200",
                duration: res.reduce(
                    (dur: number, song: Song) => dur + song.duration,
                    0
                ),
                songs: res,
            }));
        setPlaylist(pl);
        setLoading(false);
    };

    return (
        <SelectedSongs.Provider value={selectedSongsState}>
            {loading && <Loading />}
            <Header />
            <Landing onClick={generate} />
            {playlist && <GeneratedPlaylist playlist={playlist} />}
        </SelectedSongs.Provider>
    );
}
