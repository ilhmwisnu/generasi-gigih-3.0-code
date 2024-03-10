const FavoriteSongCard = () => {
  return (
    <div className="song">
      <div className="flex">
        <img src="https://picsum.photos/200" width="48" alt=""/>
        <div className="">
          <p className="title">Song Title</p>
          <p className="artist">Song Artist</p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteSongCard;
