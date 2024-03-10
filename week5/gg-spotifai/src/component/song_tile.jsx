const SongTile = ({ title, artist, imgUrl, onClick }) => {
  return (
    <div className="bg-appBlack-2">
      <div className="flex items-center gap-4">
        <img className="rounded-md" src={imgUrl} width="48" alt="" srcset="" />
        <div className="flex-1">
          <p className="title">{title}</p>
          <p className="artist">{artist}</p>
        </div>
        <div onClick={onClick} className="flex justify-center items-center w-10 h-10 cursor-pointer hover:border rounded-full border-appBlack-3">
          +
        </div>
      </div>
    </div>
  );
};

export default SongTile;
