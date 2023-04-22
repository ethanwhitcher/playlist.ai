type AlbumCoverProps = {
    imageURL: string;
    songName: string;
    artistName: string;
};
export default function AlbumCover({
    imageURL,
    songName,
    artistName,
}: AlbumCoverProps) {
    return (
        <div className="albumcover">
            <img src={imageURL} alt={songName} />
            <div className="albumcover__info">
                <h3>{songName}</h3>
                <p>{artistName}</p>
            </div>
        </div>
    );
}
