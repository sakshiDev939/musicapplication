import React, { useState } from 'react'
import { Heart, Play } from 'lucide-react'

const Favrouite = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Midnight City',
      artist: 'M83',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      isFavorite: true
    },
    {
      id: 2,
      title: 'After Hours',
      artist: 'The Weeknd',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=300&h=300&fit=crop',
      isFavorite: true
    },
    {
      id: 3,
      title: 'Coffee & Rain',
      artist: 'Lofi Girl',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      isFavorite: true
    },
    {
      id: 4,
      title: 'Blue in Green',
      artist: 'Miles Davis',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
      isFavorite: true
    },
    {
      id: 5,
      title: 'Ghost Voices',
      artist: 'Virtual Self',
      image: 'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=300&h=300&fit=crop',
      isFavorite: true
    },
    {
      id: 6,
      title: 'The Night We Met',
      artist: 'Lord Huron',
      image: 'https://images.unsplash.com/photo-1496180727252-10fde7e2e547?w=300&h=300&fit=crop',
      isFavorite: true
    },
    {
      id: 7,
      title: 'Neon Dreams',
      artist: 'Synthwave Collection',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
      isFavorite: true
    },
    {
      id: 8,
      title: 'Chromatic Fluidity',
      artist: 'Electronic Artist',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
      isFavorite: true
    },
  ])

  const toggleFavorite = (id) => {
    setFavorites(favorites.map(song =>
      song.id === id ? { ...song, isFavorite: !song.isFavorite } : song
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-5xl font-bold mb-2">Your Favorite Songs</h1>
          <p className="text-gray-400 text-lg">{favorites.length} tracks saved to your library</p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
          <Play size={20} fill="currentColor" />
          Shuffle Play
        </button>
      </div>

      {/* Songs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map((song) => (
          <div
            key={song.id}
            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-slate-700">
              <img
                src={song.image}
                alt={song.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay with Play Button */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-500 hover:bg-purple-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform">
                  <Play size={28} fill="white" />
                </button>
              </div>

              {/* Favorite Heart Button */}
              <button
                onClick={() => toggleFavorite(song.id)}
                className="absolute top-3 right-3 z-10 transition-all duration-300"
              >
                <Heart
                  size={24}
                  className={song.isFavorite ? 'fill-red-500 text-red-500' : 'text-white hover:text-red-500'}
                />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-base mb-1 truncate group-hover:text-purple-400 transition-colors">
                {song.title}
              </h3>
              <p className="text-gray-400 text-sm truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favrouite