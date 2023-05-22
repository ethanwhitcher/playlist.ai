import { Playlist } from "../utils/types";
import PlaylistHeader from "./playlist/PlaylistHeader";
import PlaylistTable from "./playlist/PlaylistTable";

type GeneratedPlaylistProps = {
    playlist: Playlist;
};
export default function GeneratedPlaylist({
    playlist,
}: GeneratedPlaylistProps) {
    return (
        <section id="generatedPlaylist">
            <div className="playlist">
                <PlaylistHeader
                    title={playlist.title}
                    numSongs={playlist.songs.length}
                    duration={playlist.duration}
                />
                <PlaylistTable songs={playlist.songs} />
            </div>
        </section>
    );
}
