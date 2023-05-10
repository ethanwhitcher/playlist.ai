import { useState } from "react";
import Search from "./_components/search/Search";
import GeneratedPlaylist from "./_components/GeneratedPlaylist";
import { Playlist } from "./utils/types";
import Header from "./_components/Header";

export default function App() {
    const [playlist, setPlaylist] = useState<Playlist>({
        title: "Josh's Playlist",
        image: "https://via.placeholder.com/200",
        duration: 10650600,
        songs: [
            {
                title: "Song",
                artist: "john",
                album: {
                    title: "Albuuum",
                    image: "https://via.placeholder.com/100",
                },
                duration: 1000 * 60 * 3.25,
            },
            {
                title: "Song",
                artist: "john",
                album: {
                    title: "Albuuum",
                    image: "https://via.placeholder.com/100",
                },
                duration: 1000 * 60 * 3.25,
            },
            {
                title: "Song",
                artist: "john",
                album: {
                    title: "Albuuum",
                    image: "https://via.placeholder.com/100",
                },
                duration: 1000 * 60 * 3.25,
            },
            {
                title: "Song",
                artist: "john",
                album: {
                    title: "Albuuum",
                    image: "https://via.placeholder.com/100",
                },
                duration: 1000 * 60 * 3.25,
            },
        ],
    });

    return (
        <>
            <Header />
            {playlist && <GeneratedPlaylist playlist={playlist} />}
        </>
    );
}
