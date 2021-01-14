import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import SpinnerPage from './spinner'
const CardExample = ({avatar,title,repo,bio,followers,following,url}) => {
  return !avatar ? (
      <SpinnerPage/>
  ):(
    <div class="d-flex justify-content-center mt-5 mb-5">
<MDBCol style={{ maxWidth: "22rem" }}>
      <MDBCard className="justify-content-center">
        <MDBCardImage className="img-fluid" src={avatar}
          waves />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          
         
          <MDBCardText>
              <strong>Bio :</strong> <br/>
              {bio}
               <br/>
               <br/>
               <strong> Public Repositories :</strong>
               <br/>
              {repo}
              <br/>
               <br/>
               <strong> Following :</strong>
               <br/>
              {following}
              <br/>
               <br/>
               <strong> Followers :</strong>
               <br/>
              {followers}
              <br/>
               <br/>
               <strong>Visit :</strong>
               <br/>
              <a href={url} target="_blank">Github Profile</a>
              </MDBCardText>
        
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
    
  )
}

export default CardExample;