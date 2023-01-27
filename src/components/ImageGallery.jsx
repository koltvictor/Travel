import React from 'react'
import { GalleryData } from '../data/GalleryData'
import styled from 'styled-components';
import { LightgalleryItem } from "react-lightgallery";
import { Container } from 'react-bootstrap'

export default function ImageGallery() {
  return (
    <Container className="galleryFullWrap">
        <GalleryWrapper>
            {GalleryData.map((photos) => {
                return (
<div>
                    <LightgalleryItem src={photos.image} group="any" subHtml={photos.info}>
                        <img src={photos.image} alt={photos.info}  className="galleryImage" />
                    </LightgalleryItem>
                    <p className="galleryImageText">{photos.loc}</p>
                    </div>
                )
            })}
        </GalleryWrapper>
    </Container>
  )
}

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`
