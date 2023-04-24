export type SearchResultProps = {
    title: string;
    artist: string;
    album: {
        image: string;
    };
};
export default function SearchResult({
    title,
    artist,
    album,
}: SearchResultProps) {
    return (
        <li className="search__result">
            <img src={album.image} alt={title} />
            <div className="search__result__info">
                <h3>{title}</h3>
                <p>{artist}</p>
            </div>
        </li>
    );
}
