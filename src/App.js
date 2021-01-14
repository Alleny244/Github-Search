import axios from 'axios';
import React, {  useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import MenuAppBar from './components/navbar'
import CardExample from './components/card'


function App() {
const[followers,setFollowers]=useState("");   
const[following,setFollowing]=useState("");   
const[bio,setbio]=useState("");    
const[repo,setrepo]=useState("");  
const[title,setTitle]=useState("");
const[userName,setUserName]=useState({name:""});
const[avatar,setAvatar]=useState("");
const[url,seturl]=useState("");
const find=()=>{
  axios.get(`https://api.github.com/users/${userName.name}`)
  .then(res=>{
    
    setAvatar(res.data.avatar_url);
    setrepo(res.data.public_repos);
    setbio(res.data.bio);
    setFollowers(res.data.followers);
    setFollowing(res.data.following);
    seturl(res.data.html_url);
  });
}

  return (
<div>
  <MenuAppBar/>
  <br/>
  <br/>
  <br/>
  <div class="d-flex justify-content-center">
  <MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Search</p>
        <div className="grey-text">
          <MDBInput label="Enter Username" icon="user" group type="text" validate error="wrong"
            success="right" onChange={e=>{setUserName({...userName,name:e.target.value})}} />
        
        </div>
        <div className="text-center">
          <MDBBtn  color="dark" onClick={find}>
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
  </div>
 

<br/>
<br/>
<CardExample avatar={avatar} title={title} repo={repo} bio={bio}
followers={followers} following={following}
url={url}/>
</div>
   
  );
  
}

export default App;
