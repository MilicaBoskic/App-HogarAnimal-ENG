import React from "react";
import Popup from "reactjs-popup";

export const PopUpAddPet = () => {

    return (
        <div className = "popup">

  <Popup trigger={<>
        <p className="h2">Request received</p>
    <hr></hr>
    <p className="h5">Thank you for choosing our platform for adoption.</p>
        <div>We have received your request and will shortly review it. In the next 24 hours your publication will appear on our website, in the 'Adopt a pet' section.</div>
    <br />
</>} modal>

    )
  </Popup>
  </div>
    )
}

export default PopUpAddPet ;