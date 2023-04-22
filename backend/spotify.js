import dotenv from 'dotenv';

dotenv.config();
var accessToken;

export const spotify = () => {
    
    var getAuth = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=' + process.env.CLIENT_ID + '&client_secret=' + process.env.CLIENT_SECRET
    }

    if (accessToken == null) {
        getAccessToken(getAuth);
    } else if (accessToken) {
        return search(accessToken);
    }

}

// get access token
const getAccessToken = (authentication) => {
        fetch('https://accounts.spotify.com/api/token', authentication)
            .then(response => response.json())
            .then(data => {
                accessToken = data.access_token;
                search(accessToken);
                return data;
            })
            .catch(error => console.log(error));
}

// async search arrow function
const search = async (token) => {
    var searchInput = 'billionaire';
    var limit = 10;
    var searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    var song = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album,track' + '&limit=' + limit, searchParams)
        .then(response => response.json())
        .then(data => {
            // map the song title, artist, album name, album image, duration
            const songs = data.tracks.items.map(item => ({
                title: item.name,
                artist: item.artists.map(artist => artist.name).join(', '),
                album: {
                    name: item.album.name,
                    image: item.album.images[0].url
                },
                duration: item.duration_ms
            }));
            console.log(songs);
            return songs;
        })
}