import React from 'react'
import Playlist from '~/components/Playlist'

const Playlists = () => {
  return (
    <div className='ml-[5vw] my-4'>
        <h1 className='text-xl font-medium'>Your playlists</h1>
        <Playlist />
    </div>
  )
}

export default Playlists