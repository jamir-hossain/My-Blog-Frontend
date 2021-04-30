import React from 'react';
import { Button, Paper } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import CakeIcon from '@material-ui/icons/Cake';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useHistory } from 'react-router-dom';
import { useContextData } from '../ContextProvider/ContextProvider';

const ProfileSection = (props) => {
   const {user, userData, userProfile} = props;
   const history = useHistory()
   const {signout} = useContextData()

   const {profilePic, gender, createdAt} = userData
   const toDate = new Date(createdAt).toDateString().slice(4)
   console.log(toDate)

   const {country, bio, socialLinks, education, work} = userProfile;
   const {website, facebook, twitter, linkedin} = socialLinks
   const {degree, institute} = education
   const {position, organization} = work

   return (
      <Paper elevation={3} className='profileSection'>
         <div className="profileImg">
            <div className='profileBg'></div>
            <img className='profilePic rounded-circle' src={profilePic} alt=""/>
            <h4> {user && user.username} </h4>
         </div>
         <div className='profileDetails'>
            <ul className="d-flex justify-content-center socialLinks">
               <a href={website} target="_blank"> <LanguageIcon/> </a>
               <a href={facebook} target="_blank"> <FacebookIcon/> </a>
               <a href={twitter} target="_blank"> <TwitterIcon/> </a>
               <a href={linkedin} target="_blank"> <LinkedInIcon/> </a>
            </ul>
            <div className="d-flex justify-content-between overview">
               <span>0 Article Published</span>
               <span>0 Followed</span>
               <span>0 Followers</span>
            </div>
            <ul className="d-flex justify-content-around joinAndCountry">
               <li> <RoomIcon /> {country} </li>
               <li> <CakeIcon /> Joined at {toDate} </li>
            </ul>
            <div className="Objective">
               <span>Career Objective</span><br/>
               <p>{bio}</p>
            </div>
            <div className="Education"> 
               <h5>Education</h5>
               <p> {degree} </p>
               <p> {institute} </p>
            </div>
            <div className="Work"> 
               <h5>Work OR Job</h5> 
               <p> {position} </p>
               <p> {organization} </p>
            </div>
         </div>
         <Button
            variant='contained'
            className="logOutBtn"
            onClick={() => signout(history)}
         >
            Logout
         </Button>
      </Paper>
   );
};

export default ProfileSection;