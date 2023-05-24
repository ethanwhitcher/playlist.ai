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
                {Array.from({ length: 3 }, (_, i) =>
                    selectedSongs[i] != undefined ? (
                        <AlbumCover
                            onRemove={() => {
                                delete selectedSongs[i];
                                setSelectedSongs(selectedSongs.slice());
                            }}
                            imageURL={selectedSongs[i].album.image}
                            artistName={selectedSongs[i].artist}
                            songName={selectedSongs[i].title}
                        />
                    ) : (
                        <AddSong
                            onSelect={(song) => {
                                selectedSongs[i] = song;
                                setSelectedSongs(selectedSongs.slice());
                            }}
                        />
                    )
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
