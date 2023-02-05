import React, { Fragment, useState } from 'react'
import {
  TbPlayerSkipBack,
  TbPlayerPause,
  TbPlayerPlay,
  TbPlayerStop,
  TbPlayerSkipForward,
} from 'react-icons/tb'

import './style.css'

const MediaPlayer = () => {
  const [isPaused, setIsPause] = useState(true)
  return (
    <Fragment>
      <div className='player'>
        <div className='head'>
          <div className='back'></div>
          <div className='front'>
            <div className='avatar'>
              <img src='http://vignette4.wikia.nocookie.net/lyricwiki/images/1/15/Semisonic_portrait.jpg/revision/latest?cb=20090409134209' />
            </div>
            <div className='infos'>
              <div className='title'>KFC - Killing Fabulous Chickens</div>
              <div className='duration'>Total time 45:12</div>
            </div>
          </div>
        </div>
        <div className='timeline'>
          <div className='soundline'></div>
          <div className='controllers active'>
            <div className='back'>
              <TbPlayerSkipBack />{' '}
            </div>
            {isPaused ? (
              <div className='play'>
                <TbPlayerPause />
              </div>
            ) : (
              <div className='play'>
                <TbPlayerPlay />
              </div>
            )}
            <div className='forward'>
              <TbPlayerSkipForward />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MediaPlayer
