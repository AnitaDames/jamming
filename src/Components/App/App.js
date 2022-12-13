import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "Perfect",
          artist: "John Legend",
          album: "The One",
          id: "1",
        },
        {
          name: "The Lamb",
          artist: "Pentatonix",
          album: "Christmas",
          id: "2",
        },
        {
          name: "Happy",
          artist: "Feliz",
          album: "Smile",
          id: "3",
        },
        {
          name: "Picture",
          artist: "Ed Sherin",
          album: "Grass",
          id: "4",
        },
      ],
      playlistName: "Most played",
      playlistTracks: [
        {
          name: "Perfect",
          artist: "John Legend",
          album: "The One",
          id: "1",
        },
        {
          name: "Happy",
          artist: "Feliz",
          album: "Smile",
          id: "3",
        },
        {
          name: "Picture",
          artist: "Ed Sherin",
          album: "Grass",
          id: "4",
        },
      ],
    };

    this.addTrack = this.addTrack.bind(this);
  }
  // I used song instead of track
  addTrack(track) {
    let songs = this.state.playlistTracks;
    if (songs.find((savedSongs) => savedSongs.id === track.id)) {
      return;
    }
    songs.push(track);
    this.setState({
      playlistSongs: songs,
    });
  }

  removeTrack(track) {
    let songs = this.state.playlistTracks;
    songs = songs.filter(currentSong => currentSong.id !==track.id);
    this.setState({
      playlistTracks: songs
    })
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
