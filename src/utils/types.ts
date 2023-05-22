export type Playlist = {
    title: string;
    image: string;
    duration: number;
    songs: Song[];
};
export type Song = {
    title: string;
    artist: string;
    album: {
        name: string;
        image: string;
    };
    duration: number;
};
