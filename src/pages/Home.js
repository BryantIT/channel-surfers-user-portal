import React, { Fragment } from 'react'
// Components
import MusicPlayer from '../components/musicplayer/MusicPlayer'
import AlbumsPreview from '../components/albums/AlbumsPreview'
import Artists from '../components/artists/Artists'
import EventsList from '../components/eventsList/EventsList'
import GalleryPreview from '../components/gallery/GalleryPreview'
import BlogPreview from '../components/blog/BlogPreview'
import RecentProducts from '../components/products/RecentProducts'
import ContactMini from '../components/contact/ContactMini'
import Newsletter from '../components/newsletter/Newsletter'

const Home = () => {
  return (
    <Fragment>
      <MusicPlayer />
      <AlbumsPreview />
      <Artists />
      <EventsList />
      <GalleryPreview />
      <BlogPreview />
      <RecentProducts />
      <ContactMini />
      <Newsletter />
    </Fragment>
  )
}

export default Home
