import { useContext, useState } from "react";
import Button from "./base/Button";
import Search from "./search/Search";
import { SelectedSongs } from "../App";
import { Song } from "../lib/types";
import { SearchResultProps } from "./search/SearchResult";

type AddSongProps = {
    onSelect: (song: Song) => void;
};

export default function AddSong({ onSelect }: AddSongProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="addsong">
            <Button
                variant={"secondary"}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                title={"ADD"}
            />
            <Search
                isOpen={isOpen}
                onSelect={(song) => {
                    setIsOpen(false);
                    onSelect(song);
                }}
            />
        </div>
    );
}
