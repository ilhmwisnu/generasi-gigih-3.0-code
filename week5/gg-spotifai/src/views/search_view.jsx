import SongTile from "../component/song_tile";
import { useContext, useState } from "react";
import { TokenContext } from "../context/context";

const SearchView = () => {
  let [query, setQuery] = useState("");

  let handleQuery = (e) => {
    setQuery(e.target.value);
    search(query)
  };

  let [tracks, setTracks] = useState([]);

  let accessToken = useContext(TokenContext);

  let search = (q) => {
    fetch(`https://api.spotify.com/v1/search?q=${q}&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        setTracks(data.tracks?.items ?? []);
      })
    ).catch((e)=> setTracks([]));
  };

  return (

      <div className="box">
        <div className="mb-6">
          <h3 className="text-2xl">Search</h3>
          <br />
          <input className="w-full" value={query} placeholder="Search..." onChange={handleQuery} type="text" />
        </div>
        <div className="px-4 flex flex-col gap-4 pb-4">
          {tracks.map((track) => {
            return (
              <SongTile
                imgUrl={track.album.images[0].url}
                artist={track.artists.map((a) => a.name).join(", ")}
                title={track.name}
              />
            );
          })}
        </div>
      </div>
  );
};

export default SearchView;
