import React, { createContext, useEffect, useState } from 'react';

export const songDataContext = createContext();

const SongContext = ({ children }) => {

  const [songs, setSongs] = useState()
   
  useEffect(()=>{
    const storedSongs = JSON.parse(localStorage.getItem("songs")) || []

    setSongs(storedSongs)
} ,[])

  const UploadSong = (newSong) => {

    const existingSongs = JSON.parse(localStorage.getItem("songs")) || [];

    const alreadyExist = existingSongs.some((song) => {
      return (
        song.title.toLowerCase() === newSong.title.toLowerCase() &&
        song.artist.toLowerCase() === newSong.artist.toLowerCase()
      );
    });

    if (alreadyExist) {
      return {
        success: false,
        message: "Cannot upload duplicate song title and artist"
      };
    }

    const updatedSongs = [
      ...existingSongs,
      {
        ...newSong,
        id: Date.now()
      }
    ];

    setSongs(updatedSongs);

    localStorage.setItem("songs", JSON.stringify(updatedSongs));

    return {
      success: true,
      message: "Song uploaded successfully"
    };
  };

  return (
    <songDataContext.Provider value={{ UploadSong, songs }}>
      {children}
    </songDataContext.Provider>
  );
};

export default SongContext;