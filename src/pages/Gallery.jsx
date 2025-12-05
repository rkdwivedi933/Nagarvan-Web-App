
import GalleryCollectionSection from '../comopents/gallery/GalleryCollectionSection'
import VideoMoments from '../comopents/gallery/VideoMoments'
import GalleryBackground from '../comopents/layout/GalleryBackground.jsx'
import NatureLandscapes from '../comopents/gallery/NatureLandscapes .jsx'
import SelfiePoints from '../comopents/gallery/SelfiePoints.jsx'
import KidsZonePlaygrounds from '../comopents/gallery/KidsZonePlaygrounds.jsx'
import RestaurantFoodArea from '../comopents/gallery/RestaurantFoodArea.jsx'



function Gallery() {
  return (
    <div>
      <GalleryBackground >
       
<div >

      <GalleryCollectionSection/>
      <VideoMoments/>
      <NatureLandscapes/>
      <SelfiePoints/>
      <KidsZonePlaygrounds/>
      <RestaurantFoodArea/>
</div>
      </GalleryBackground>
      
    </div>
  )
}

export default Gallery
