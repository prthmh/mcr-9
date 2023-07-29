import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import VideoList from "../../components/VideoList/VideoList";

const PlayListVids = () => {
  const { playlistId } = useParams();
  const {
    dataState: { playlists },
  } = useData();
  const findPlaylist = playlists.find((p) => p.id === Number(playlistId));
  return (
    <div>
      <h2 style={{ marginTop: "0" }}>Playlists</h2>
      <VideoList list={findPlaylist.vids} />
    </div>
  );
};

export default PlayListVids;
