import Button from "./base/Button";
import AddSong from "./AddSong";
import { useContext } from "react";
import { SelectedSongs } from "../App";
import AlbumCover from "./base/AlbumCover";

type LandingProps = {
    onClick: () => void;
};

export default function Landing({ onClick }: LandingProps) {
    const [selectedSongs, setSelectedSongs] = useContext(SelectedSongs);

    return (
        <div className="landing">
            <div className="container">
                {selectedSongs[0] != undefined ? (
                    <AlbumCover
                        imageURL={selectedSongs[0].album.image}
                        artistName={selectedSongs[0].artist}
                        songName={selectedSongs[0].title}
                    />
                ) : (
                    <AddSong
                        onSelect={(song) => {
                            selectedSongs[0] = song;
                            setSelectedSongs(selectedSongs.slice());
                        }}
                    />
                )}
                {selectedSongs[1] != undefined ? (
                    <AlbumCover
                        imageURL={selectedSongs[1].album.image}
                        artistName={selectedSongs[1].artist}
                        songName={selectedSongs[1].title}
                    />
                ) : (
                    <AddSong
                        onSelect={(song) => {
                            selectedSongs[1] = song;
                            setSelectedSongs(selectedSongs.slice());
                        }}
                    />
                )}
                {selectedSongs[2] != undefined ? (
                    <AlbumCover
                        imageURL={selectedSongs[2].album.image}
                        artistName={selectedSongs[2].artist}
                        songName={selectedSongs[2].title}
                    />
                ) : (
                    <AddSong
                        onSelect={(song) => {
                            selectedSongs[2] = song;
                            setSelectedSongs(selectedSongs.slice());
                        }}
                    />
                )}
            </div>

            <div className="genbtn">
                <Button
                    disabled={
                        selectedSongs[0] && selectedSongs[1] && selectedSongs[2]
                            ? false
                            : true
                    }
                    variant={"primary"}
                    onClick={onClick}
                    title={"GENERATE"}
                />
            </div>
        </div>
    );
}
