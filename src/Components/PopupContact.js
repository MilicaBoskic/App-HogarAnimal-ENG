    import React from "react";
    import Popup from "reactjs-popup";

    export const PopUpContact = () => {

    return (
        <div className = "popup">

    <Popup trigger={
    <>
    <p className="h2">Request received</p>
    <hr></hr>
    <p className="h5">Thanks for wanting to adopt.</p>
        <div>We have received your request and will shortly review it. We will contact you within 5 business days.</div>
    <br />
    </>} modal>

    )
    </Popup>
    </div>
    )
    }

    export default PopUpContact ;