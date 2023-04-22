import dotenv from 'dotenv';

dotenv.config();
var accessToken = '';


export const spotify = () => {
    
    var getAuth = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials&client_id=' + process.env.CLIENT_ID + '&client_secret=' + process.env.CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', getAuth)
        .then(response => response.json())
        .then(data => {
            //console.log(data.access_token);
            accessToken = data.access_token;
            search();
            return data;
        })
        .catch(error => console.log(error));

}

// async search arrow function
export const search = async () => {
    var searchInput = 'watermelon sugar';
    var searchParams = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    }

    var song = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=album,track', searchParams)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            console.log(data.tracks.items[0].name);
            console.log(data.tracks.items[1].name);
            console.log(data.tracks.items[2]);
            return data;
        })

}