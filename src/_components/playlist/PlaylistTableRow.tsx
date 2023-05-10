import { durationToStringWithColon } from "../../utils/durationStrings";
import { Song } from "../../utils/types";

type PlaylistTableRowProps = {
    song: Song;
    index: number;
};
export default function PlaylistTableRow({
    song,
    index,
}: PlaylistTableRowProps) {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <div className="title-cell">
                    <img src={song.album.image} alt={song.album.title} />
                    <div className="song-info">
                        <h4>{song.title}</h4>
                        <p>{song.artist}</p>
                    </div>
                </div>
            </td>
            <td>{song.album.title}</td>
            <td>{durationToStringWithColon(song.duration)}</td>
        </tr>
    );
}
