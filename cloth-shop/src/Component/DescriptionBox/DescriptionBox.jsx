import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Corrupti laudantium alias dolore ullam. Dicta, accusantium 
            possimus explicabo, placeat perspiciatis expedita sit deleniti 
            harum eveniet quaerat facilis nemo hic qui dolor fugiat. Sunt 
            rem doloremque quos perspiciatis molestiae officiis excepturi 
            consectetur.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Perferendis molestias, vero error nihil architecto nam omnis 
            ratione rem quod deleniti esse magnam eligendi ab placeat unde 
            voluptates iste. Enim, necessitatibus.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
