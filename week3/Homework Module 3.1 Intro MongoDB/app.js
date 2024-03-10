const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/spotipy")
  .then(() => console.log("Connected!"));

const Schema = mongoose.Schema

const ArtistSchema = new Schema({
  name: String,
  date_of_birth: Date,
  genres: [String],
});

const Artist = mongoose.model("Artist", ArtistSchema);

for (let i = 1; i < 11; i++) {
  let newArtist = new Artist();
  newArtist.name = `Artist ${i}`;
  newArtist.date_of_birth = Date.now();
  if (i % 2 == 0) {
    newArtist.genres = ["Pop"];
  } else {
    newArtist.genres = ["Jazz", "Classic"];
  }
  newArtist.save()
}

const SongSchema = new Schema({
  title: String,
  artists : [String],
  album: String,
});

const Song = mongoose.model("Song", SongSchema);

for (let i = 1; i < 11; i++) {
  let song = new Song();
  song.title = `Song ${i}`;
  song.artists = (i % 3 == 0) ? [ `Artist ${ i }`, `Artist ${ i + 1 }` ] : (i % 2 == 0) ? [ `Artist ${ i }` ] : [ `Artist ${ i + 1 }`]
  if (i % 2 == 0) {
    song.album = `Album 1`;
  } else {
    song.album = `Album 2`;
  }
  song.save()
}

const PopularSongSchema = new Schema({
  title: String,
  play_count : Number,
  period_of_time: Object,
});

const PopularSong = mongoose.model("popular_song", PopularSongSchema);

for (let i = 1; i < 11; i++) {
  let popSong = new PopularSong();
  popSong.title = `Song ${i}`;
  popSong.play_count = 0
  popSong.period_of_time = {
    start : new Date(2023,1,1),
    end :  new Date(2023,7,21)
  }
  popSong.save()
}