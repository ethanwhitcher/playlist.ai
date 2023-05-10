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
        title: string;
        image: string;
    };
    duration: number;
};
