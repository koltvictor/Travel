import React from 'react'
// import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default function Itinerary() {
    // const goToTravel = () => {
    //     window.location.href = '/travel';
    // }
  return (
//     <div>
//         <Container fluid className="internalComponentsWrapper">
//             <div className="row">
//                 <div className="column d-flex align-items-center justify-content-center col-md-6">
//                         
//                 </div> 
//                 <div className="column d-flex align-items-center justify-content-center col-md-6">
//                         <h4>CUSTOM ITINERARIES</h4>
//                         <p className="componentText">
//                             If you seek unique travel experiences that capture the essence of a destination, immersing you in the culture and connecting you with local customs and traditions, our itineraries will excite and inspire you. Our goal is to ensure travelers have meaningful and captivating experiences that are as unique as you are.
//                         </p>
//                 </div>
//             </div>
//         </Container>
//     </div>
//   )
// };


      <div>
          <Container className="internalComponentsWrapper">
              <div className="row">

                  <div className="column d-flex align-items-center justify-content-center col-md-6">
                    <Link to="/travel">
                  <img src="https://i.imgur.com/ZSL5YTz.png" alt="Pang Oung, Thailand" className="itineraryImage" />
                    </Link>
                  </div>
                  <div className="column d-flex align-items-center justify-content-center col-md-6">
                      <h4>UNIQUELY TAILORED CUSTOM ITINERARIES</h4>
                      <p className="componentText">Every client is a VIP, and every trip is meant to be remarkable. No matter where in the world you travel, you will be received as an honored guest and provided access to exclusive privileges, complimentary benefits, cutting-edge technology, and unmatched service.</p>
                  </div>
              </div>
          </Container>
      </div>
    )
  }