import React from 'react';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

import Popup from "reactjs-popup";
import PopUpContact from "../../Components/PopupContact";

const Contact = () => {

  return (
    
    <section>
         <div className='container d-flex flex-column'>
             <h3>Contact us</h3>
             <br />
                 <span>You can reach us  by phone at: 917 30 36 80</span>
               <span>You can reach us via e-mail: info@hogaranimal.org</span>
               <p class="border-bottom"></p>
                 <p>Customer Service hours:</p>
                <span>Monday to Thursday: 10am to 2pm and 3pm to 5pm. / Friday from 10 a.m. to 2 p.m.</span>
                <p class="border-bottom"></p>

         </div>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Your message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                {/* <MDBBtn color="dark" >Submit</MDBBtn> */}
                <Popup modal trigger={<button type="submit" class="btn btn-dark">Submit</button>}>
                        {close => <PopUpContact close={close} />}
                    </Popup>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "430px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
        </MDBCol>
      </MDBRow>
    </section>
  );
}


// const Contact = () => {
//     const { t } = useTranslation();

//     return (
//         <div className='container d-flex flex-column'>
//             <h3>{t('h3-contact.1')}</h3>
//             <br />
//             <p class="border-bottom">{t('p-border-bottom.1')}</p>
//                 <span>{t('span-contact.1')}</span>
//                 <span>{t('span-contact2.1')}</span>
//             <br />
//                 <p class="border-bottom">{t('p-border-bottom-contact.1')}</p>
//                 <span>{t('span-contact3.1')}</span>
//         </div>
//     )  
//   }
 
  export default Contact;
