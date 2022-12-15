
const clientId ='';
const redirectUrl = 'http://localhost:3000/';
let accessToken;

const Spotify = {
    getAccessToken(){
        if(accessToken) {
            return accessToken;
        } 

        //check for an access token match
        const accessTokenMatch = window.location.href.match(access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(expires_in=([^&]*)/);
    if(accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);

        //Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
    } else {
       const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
    window.location = accessUrl;
    }
    
    },
    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`
        {
            headers: {Authorization: `Bearer ${accessToken}`}
          })
     
    }
}

export default Spotify;
