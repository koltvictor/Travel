import React from 'react'
import { GalleryData } from '../data/GalleryData'
import { LightgalleryItem } from "react-lightgallery";
import Container from 'react-bootstrap/Container'

export default function ImageGallery() {
  return (
    <Container className="galleryFullWrap">
            {GalleryData.map((photos) => {
                return (

                    <LightgalleryItem src={photos.image} group="any" subHtml={photos.info}>
                        <img src={photos.image} alt={photos.info}  className="galleryImage" />
                    </LightgalleryItem>
                )
            })}
    </Container>
  )
}
