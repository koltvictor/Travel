import React, { useState, useEffect } from 'react'
import { GalleryData } from '../data/GalleryData'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Lightbox from 'react-image-lightbox'

export default function ImageGallery() {
    const [photos, setPhotos] = useState([]);
    const columnsPerRow = 3;

    const getGalleryData = async () => {
        const response = GalleryData;
        setPhotos(response);
    }

    const getColumnsForRow = () => {
        let items = photos.map((image) => {
            return (
                <Col className="cardGrid">
                    <Card className="cardImage">
                        <Card.Img src={image.image} className="galleryImage" />
                    </Card>
                </Col>
            );
        });
        return items;
    };

    useEffect(() => {
        getGalleryData();
    })

  return (
    <GalleryWrapper>
        <Row md={columnsPerRow}>
            {getColumnsForRow()}
        </Row>

        {/* {isOpen && (
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={() => this.setState({ isOpen: false })}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % images.length,
          })
        }
      />
    )} */}
    
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
display: flex;
flex-direction: row;
    padding: 10rem 5rem 0rem 5rem;
`
