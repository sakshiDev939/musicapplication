import React, { useContext } from 'react';

import {
  Music,
  UploadCloud,
  User,
  LogOut,
  Search,
  Heart,
  Disc3,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

import { useNavigate } from 'react-router';
import { songDataContext } from '../context/SongContext';
import { AuthContextData } from '../context/AuthContext';

const ArtistDashBoard = () => {

  const navigate = useNavigate();

  const { songs = [], deleteSong } = useContext(songDataContext);
  const { user, logoutUser } = useContext(AuthContextData);

  // Delete Song
  const handleDeleteSong = (id) => {
    const response = deleteSong(id);

    if (response?.success) {
      console.log('Song deleted successfully');
    }
  };

  // Logout
  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  // Artist Songs
  const mySongs = songs.filter(
    (song) => song.uploadBy === user?.email
  );

  return (

    <div className="flex min-h-screen bg-slate-900 text-white">

      {/* Sidebar */}

      <div className="w-56 bg-slate-800 border-r border-slate-700 flex flex-col p-6">

        {/* Logo */}

        <div className="mb-12">

          <h1 className="text-2xl font-bold flex items-center gap-2 mb-1">

            <Music size={28} className="text-purple-400" />

            Artist Studio

          </h1>

          <p className="text-sm text-gray-400">
            Creator Account
          </p>

        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2">

          <NavItem icon={<Disc3 size={20} />} label="Dashboard" active />

          <NavItem
            icon={<Music size={20} />}
            label="My Songs"
          />

          <button
            onClick={() => navigate('/upload-song')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg"
          >
            <UploadCloud size={20} />
            <span>Upload Song</span>
          </button>

          <NavItem icon={<User size={20} />} label="Profile" />

        </nav>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
        >

          <LogOut size={20} />

          <span>Logout</span>

        </button>

      </div>


      {/* Main Content */}

      <div className="flex-1 overflow-auto">

        {/* Top Bar */}

        <div className="bg-slate-800 border-b border-slate-700 px-8 py-4 flex items-center justify-between sticky top-0 z-10">

          <div className="flex-1 max-w-md">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search analytics or tracks..."
                className="w-full bg-slate-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

            </div>

          </div>

          <div className="flex items-center gap-4 ml-8">

            <Bell size={20} />

            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center font-bold">

              {user?.email?.charAt(0).toUpperCase() || 'A'}

            </div>

          </div>

        </div>


        {/* Welcome Section */}

        <div className="px-8 py-8 border-b border-slate-700">

          <h2 className="text-4xl font-bold mb-2">
            Welcome Back, {user?.name || user?.email?.split('@')[0] || 'Artist'}
          </h2>

          <p className="text-gray-400 mb-6">

            Manage your music and connect with your listeners.

          </p>

          <div className="flex gap-4">

            <button
              onClick={() => navigate('/upload-song')}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-6 py-2 rounded-lg font-semibold transition-all"
            >
              Upload New Song
            </button>

            <button
              onClick={() => navigate('/')}
              className="bg-slate-700 hover:bg-slate-600 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Explore Music
            </button>

          </div>

        </div>


        {/* Stats */}

        <div className="px-8 py-8 grid grid-cols-3 gap-6">

          <StatCard
            icon={<Music size={24} />}
            label="Total Songs"
            value={mySongs.length}
          />

          <StatCard
            icon={<Heart size={24} className="text-pink-500" />}
            label="Total Likes"
            value="0"
          />

          <StatCard
            icon={<Disc3 size={24} className="text-purple-400" />}
            label="Total Albums"
            value="0"
          />

        </div>


        {/* My Songs Section */}

        <div className="px-8 py-8">

          <div className="flex justify-between items-center mb-6">

            <div>

              <h3 className="text-2xl font-bold">
                My Songs
              </h3>

              <p className="text-gray-400 text-sm">
                Manage your published discography
              </p>

            </div>

            <button
              onClick={() => navigate('/upload-song')}
              className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Upload More
            </button>

          </div>


          {/* Songs Grid */}

          {mySongs.length === 0 ? (

            <div className="text-center py-16 bg-slate-800 rounded-xl">

              <Music
                size={48}
                className="mx-auto text-gray-500 mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                No Songs Uploaded Yet
              </h3>

              <p className="text-gray-400 mb-6">
                Start sharing your music with the world.
              </p>

              <button
                onClick={() => navigate('/upload-song')}
                className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg font-semibold"
              >
                Upload Your First Song
              </button>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {mySongs.map((song) => (

                <div
                  key={song.id}
                  className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >

                  {/* Image */}

                  <div className="relative aspect-square overflow-hidden bg-slate-700">

                    <img
                      src={song.albumCoverUrl}
                      alt={song.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-3">

                      <button
                        title="Edit Song"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-500 hover:bg-purple-600 p-2 rounded-lg"
                      >
                        <Edit size={20} />
                      </button>

                      <button
                        title="Delete Song"
                        onClick={() => handleDeleteSong(song.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 hover:bg-red-600 p-2 rounded-lg"
                      >
                        <Trash2 size={20} />
                      </button>

                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-4">

                    <div className="mb-2">

                      <h4 className="font-semibold text-base truncate">
                        {song.title}
                      </h4>

                      <p className="text-sm text-gray-400">
                        {song.artist}
                      </p>

                      <span className="inline-block bg-slate-700 px-2 py-1 rounded text-xs text-gray-300 mt-2">
                        {song.genre}
                      </span>

                    </div>

                    <p className="text-gray-400 text-xs mb-3">
                      {song.date || 'Recently uploaded'}
                    </p>

                    {/* Stats */}

                    <div className="flex justify-between text-sm text-gray-400 border-t border-slate-700 pt-3">

                      <div className="flex items-center gap-1">

                        <Eye size={16} />

                        <span>{song.uploads || 0}</span>

                      </div>

                      <div className="flex items-center gap-1">

                        <Heart size={16} />

                        <span>{song.likes || 0}</span>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>


      {/* Upload Button */}

      <div className="fixed bottom-8 right-8">

        <button
          onClick={() => navigate('/upload-song')}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >

          <UploadCloud size={20} />

          Upload Song

        </button>

      </div>

    </div>

  );
};


// Navigation Item

const NavItem = ({ icon, label, active }) => (

  <button
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
      active
        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
    }`}
  >

    {icon}

    <span className="font-medium">
      {label}
    </span>

  </button>

);


// Stats Card

const StatCard = ({ icon, label, value }) => (

  <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-colors">

    <div className="flex items-center gap-3 mb-4">

      <div className="p-2 bg-slate-700 rounded-lg text-purple-400">
        {icon}
      </div>

    </div>

    <p className="text-gray-400 text-sm mb-1">
      {label}
    </p>

    <p className="text-3xl font-bold">
      {value}
    </p>

  </div>

);


// Bell Icon

const Bell = ({ size }) => (

  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >

    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />

    <path d="M13.73 21a2 2 0 0 1-3.46 0" />

  </svg>

);

export default ArtistDashBoard;