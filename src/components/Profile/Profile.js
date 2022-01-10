import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import P from '../Shared/P/P';
import pic from './ratantahoe.jpg';

const ProfileWrapper = styled.section`
  text-align: center;
  margin-top: 40px;
  min-height: 100%;
  padding: 10px 0;
  a {
    font-weight: bold;
  }
`;

const ProfilePic = styled.img`
  width: 450px;
  height: 600px;
  
  box-shadow: 0 0 0 3px white, 0 3px 8px 3px #ccc;
  margin: 20px 0;
`;

const NameWrapper = styled.div`
  margin-bottom: 20px;
  font-family: 'Alike', serif;
  h3 {
    margin: 10px auto;
    font-size: 1.1em;
    font-weight: 500;
  }
  h2,
  h3 {
    font-family: inherit;
  }
`;

const Name = styled.h2`
  font-size: 2.5em;
  display: inline-block;
  margin: 0;
  font-weight: 600;
`;

const Profile = () => (
  <ProfileWrapper>
    <h3>Ratan Kaliani</h3>

    <P>
      
      <br />
      
      President @ {' '}
      <a href="https://blockchain.berkeley.edu" alt="https://blockchain.berkeley.edu">
        Blockchain at Berkeley
      </a>
      <br/>
      Prev: Intern @{' '}
      <a href="https://www.coinbase.com/" alt="coinbase.com">
        Coinbase 
      </a>, Director @{' '}<a href="https://www.xcelerator.berkeley.edu/" alt="xcelerator.berkeley.edu">
        Berkeley Blockchain Xcelerator
      </a>
      
      
      
    </P>
    <ProfilePic src={pic} />
    {/* </P> */}
    <P>
    If you'd like to get in touch, I'm available
      {' '}<a href="mailto:ratan@berkeley.edu">here</a>.
    </P>
  </ProfileWrapper>
);

export default Profile;
