songs = [
  {
    title: "song title 1",
    artist: [
      {
        name: "artist name 1",
      },
    ],
    duration: 200,
  },
];

function songPromise(songs) {
  return new Promise((resolve, reject) => {
    if (songs.length == 0) {
      reject("Song not found");
    } else {
      resolve(songs);
    }
  });
}

function getSongOne(songPromise) {
  songPromise
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

async function getSongTwo(songPromise) {
  try {
    songs = await songPromise;

    console.log(songs);
  } catch (error) {
    console.log(error);
  }
}

// getSongOne(songPromise([]));
// getSongTwo(songPromise([]))

// getSongOne(songPromise(songs));
getSongTwo(songPromise(songs))
