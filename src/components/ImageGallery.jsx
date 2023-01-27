import React from 'react'
import { GalleryData } from '../data/GalleryData'
import styled from 'styled-components';
import { LightgalleryItem } from "react-lightgallery";

export default function ImageGallery() {
  return (
    <div className="galleryFullWrap">
        <h4>Click on Images to Expand</h4>
        <GalleryWrapper>
            {GalleryData.map((photos) => {
                return (
                    <LightgalleryItem src={photos.image} group="any" subHtml={photos.info}>
                        <img src={photos.image} alt={photos.info}  className="galleryImage" />
                    </LightgalleryItem>
                )
            })}
        </GalleryWrapper>
    </div>
  )
}

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10rem 5rem 0rem 5rem;
`
