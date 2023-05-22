import { durationToString } from "../../utils/durationStrings";
import Button from "../base/Button";
import spotifyIcon from "../../assets/spotify.svg";

type PlaylistHeaderProps = {
    image: string;
    title: string;
    numSongs: number;
    duration: number;
};
export default function PlaylistHeader({
    image,
    title,
    numSongs,
    duration,
}: PlaylistHeaderProps) {
    return (
        <div className="playlist__header">
            <img className="albumCover" src={image} alt={title} />
            <div className="playlist__header__info">
                <h2>{title}</h2>
                <p>
                    {numSongs} songs, {durationToString(duration)}
                </p>
            </div>
            <Button
                disabled={true}
                icon={spotifyIcon}
                title="Add to Spotify"
                variant="primary"
                onClick={() => {}}
            />
        </div>
    );
}
