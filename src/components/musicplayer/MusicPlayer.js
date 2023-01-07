import React, { useState } from 'react'
// Style
import './style.css'
// Icons
import { FaVolumeMute } from 'react-icons/fa'
import { CgPlayBackwards, CgPlayForwards, CgPlayButtonO } from 'react-icons/cg'
import { AiOutlineBars } from 'react-icons/ai'

const MusicPlayer = () => {
  // Constants
  const spotifyBase = 'https://api.spotify.com/v1'
  // States
  const [playlist, setPlaylist] = useState(null)
  return (
    <div className='home-player-wrapper-2'>
      <div className='wrapper-container'>
        <div id='jquery_jplayer_1' className='jp-jplayer'></div>
        <div
          id='jp_container_1'
          className='jp-audio'
          role='application'
          aria-label='media player'
        >
          <div className='jp-type-playlist'>
            <div className='interface-round-wrapper'>
              <div className='jp-gui jp-interface'>
                <div className='jp-controls'>
                  <div className='jp-seek-bar'>
                    <div className='jp-play-bar'></div>
                  </div>
                  <button id='home-p-mute' className='jp-mute' tabIndex='0'>
                    <FaVolumeMute size='1.5em' />
                  </button>
                  <button className='jp-previous' tabIndex='0'>
                    <CgPlayBackwards />
                  </button>
                  <button className='jp-play' tabIndex='0'>
                    <div className='jp-play-wrapper'>
                      <CgPlayButtonO size='1.25em' />
                    </div>
                  </button>
                  <button className='jp-next' tabIndex='0'>
                    <CgPlayForwards />
                  </button>
                  <button id='playlist-toggle'>
                    <AiOutlineBars size='1.5em' />
                  </button>
                  <div id='home-p-volume-bar' className='jp-volume-bar'>
                    <div className='jp-volume-bar-value'></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-lines-wrapper'>
              <div className='h-lines-inner-wrapper'>
                <div id='nowPlaying' className='nowPlaying clearfix'>
                  <h3 className='artist-name'>Artist Name</h3>
                  <h3 className='track-name'>Track Name</h3>

                  <div className='chevron left chevron-1'></div>
                  <div className='chevron left chevron-2'></div>
                  <div className='chevron left chevron-3'></div>

                  <div className='chevron right chevron-1'></div>
                  <div className='chevron right chevron-2'></div>
                  <div className='chevron right chevron-3'></div>
                </div>
              </div>
            </div>

            <div className='jp-playlist'>
              <div className='playlist-container container'>
                <ul id='main-player-playlist'>
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
