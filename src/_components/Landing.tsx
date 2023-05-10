import Button from "./base/Button";
import AddSong from "./AddSong";

type LandingProps = {
    onClick: () => void;
};

export default function Landing({ onClick }: LandingProps) {

    return (
        <div className="landing">
            <div className="sharebtn">
                <Button variant={"primary"} onClick={onClick} icon={"shareIcon"} title={"Share"} />
            </div>
            
            <div className="container">
                <AddSong />
                <AddSong />
                <AddSong />
            </div>

            <div className="genbtn">
                <Button variant={"primary"} onClick={onClick} title={"GENERATE"} />
            </div>
            
            
        </div>
    );
}