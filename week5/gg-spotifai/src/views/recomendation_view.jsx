import { useState } from "react";
import SongTile from "../component/song_tile";
import useFetch from "../utils/use_fetch";

const RecomendationView = () => {
  let { data, loading, error } = useFetch("");

  return (
    <div className="box">
      <h2 className="text-2xl">For You</h2>
      {loading && "Loading..."}
      {!loading && (
        <div className="px-4 flex flex-col gap-4 pb-4">
          {data.map((track) => {
            return (
              <SongTile
                imgUrl={track.album.images[0].url}
                artist={track.artists.map((a) => a.name).join(", ")}
                title={track.name}
              />
            );
          })}
        </div>
      )}
      { error && <p>{error}</p> }
    </div>
  );
};

export default RecomendationView;
