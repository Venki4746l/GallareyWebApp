// import React from 'react'
// import './DetailedPage.css'

// const DetailedPage = (props) => {
//     const backToimages=()=>{
//         props.BackToMain(false)
//     }
//   return (
//       <div className="animation">
//           {props.SinglePageInfo.map((info) => {
//             return (
//               <div key={info.id} className="mainBackgruond">
//                 <h1 className="mainheading">{info.title}</h1>
//                 <img
//                   className="detailedimage"
//                   src={`https://farm${info.farm}.staticflickr.com/${info.server}/${info.id}_${info.secret}.jpg`}
//                   alt="imagesLogo"
//                 />
//                 <button onClick={backToimages} className="backButton">
//                   Back
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//   )
// }

// export default DetailedPage

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DetailedPage.css";

const DetailedPage = (props) => {
  const { title, id, farm, server, secret } = props.singlepageinfo[0];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Select Image Details</Modal.Title>
      </Modal.Header>

      <Modal.Body className="container-image">
        <div>
          <p>
            <span>Title: </span>
            {title}
          </p>
          <p>
            <span>id: </span>
            {id}
          </p>
          <p>
            <span>farm: </span>
            {farm}
          </p>
          <p>
            <span>server: </span>
            {server}
          </p>
          <p>
            <span>secret: </span>
            {secret}
          </p>
        </div>

        <img
          className="detailedimage"
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
          alt="imagesLogo"
        />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Back
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DetailedPage;
