import React, { useState, useEffect } from 'react'
import { GalleryData } from './GalleryData'
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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
                <Col>
                    <Card>
                        <Card.Img src={image.image} className="galleryImage"/>
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
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
display: flex;
flex-direction: row;
    padding: 10rem 5rem 0rem 5rem;
`
