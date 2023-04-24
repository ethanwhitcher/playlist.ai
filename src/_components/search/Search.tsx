import { ChangeEvent, useRef, useState } from "react";
import SearchResult, { SearchResultProps } from "./SearchResult";

export default function Search() {
    const [results, setResults] = useState<SearchResultProps[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const search = ({
        currentTarget: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        if (value.length < 3) return setResults([]);
        else {
            fetch(`http://localhost:3000/search?q=${value}`)
                .then((res) => res.json())
                .then((data) => setResults(data))
                .catch((err) => console.error(err));
        }
    };

    return (
        <div className="search">
            <input
                ref={inputRef}
                type="text"
                placeholder="Search for a song or artist..."
                onChange={search}
            />
            <ul className="search__results">
                {results.length > 0 ? (
                    results.map((result) => <SearchResult {...result} />)
                ) : (
                    <li className="search__results__no-results">
                        {inputRef.current && inputRef.current.value.length > 3
                            ? "No results found."
                            : "Keep typing..."}
                    </li>
                )}
            </ul>
        </div>
    );
}
