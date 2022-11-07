import React, { useEffect, useState } from "react";
import "./PhotoGallary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const detailsLink =
  "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1";

const PhotosGallaery = () => {
  const [details, setDetails] = useState([]);

  const [imageClick, setImageClick] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const handleFetchData = async () => {
    const response = await fetch(detailsLink);
    const data = await response.json();
    setDetails(data.photos.photo);
    console.log(data.photos);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  const onMainShowdisplay = (e) => {
    const filteredData = details.filter((info) => {
      return info.id === e.target.id;
    });
    setFilterData(filteredData);
    setImageClick(true);
  };

  const backToimages = () => {
    setImageClick(false);
  };

  return (
    <div>
      {imageClick ? (
        <div>
          {filterData.map((info) => {
            return (
              <div key={info.id} className="mainBackgruond">
                <h1 className="mainheading">{info.title}</h1>
                <img

                  className="detailedimage"
                  src={`https://farm${info.farm}.staticflickr.com/${info.server}/${info.id}_${info.secret}.jpg`}
                  alt="imagesLogo"
                />
                <button onClick={backToimages} className="backButton">
                  Back
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <Container>
          <h1 className="heading"> PhotosGallaery</h1>
          <Row className="photoscontainer">
            {details.map((info) => {
              return (
                <Col className="imageConatiner" key={info.id}>
                  <img
                    id={info.id}
                    className="photo"
                    onClick={onMainShowdisplay}
                    src={`https://farm${info.farm}.staticflickr.com/${info.server}/${info.id}_${info.secret}.jpg`}
                    alt="imagesLogo"
                  />
                  <h5>{info.title}</h5>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default PhotosGallaery;
// [
//   {
//     id: "8432423659",
//     owner: "37107167@N07",
//     secret: "dd1b834ec5",
//     server: "8187",
//     farm: 9,
//   },
// ]
