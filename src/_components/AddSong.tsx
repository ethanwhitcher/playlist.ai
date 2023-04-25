import Button from "./base/Button";

type AddSongProps = {
    onClick: () => void;
};

export default function AddSong({ onClick }: AddSongProps) {
    return (
        <div className="addsong">
            <Button variant={"secondary"} onClick={onClick} title={"ADD"} />
        </div>
    );
}
