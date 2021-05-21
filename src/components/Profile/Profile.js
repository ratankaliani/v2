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
    <h3>Hi, I'm Ratan!</h3>

    <P>
      
      <br />
      Currently: SWE Intern @{' '}
      <a href="https://www.coinbase.com/" alt="coinbase.com">
        Coinbase (Crypto)
      </a>,
      EECS @ Berkeley
      <br/>
      
      
    </P>
    <ProfilePic src={pic} />
    <P>
      I'm ideating, designing & building products that transform people's lives for the better. 
    </P>
    <P>
      Currently, I'm
      deeply fasincated by the impact that startups in Fintech, Blockchain
      and Deep Learning spaces are having in transforming society and uplifting underserved communities.
    </P>
    <P>
      I post every couple decades on my <Link to="/blog">blog</Link>, drop
      takes on startups, crypto & society on <a href="http://twitter.com/ratankaliani">Twitter</a>, and
      explore my 3AM ideas on <a href="http://github.com/ratankaliani">Github</a>. 
    </P>
    {/* <P>
      Based out of Berkeley, CA & Washington D.C. <br />
      
      {/* Feel free to ~vibe~ with any one of my many moods on {' '}
      <a href="https://open.spotify.com/user/22y5m2ldfpn27ledxb7vnryca">
      Spotify
      </a>. <br /> */}
    {/* </P> */}
    <P>
    Feel free to contact me via
      {' '}<a href="mailto:ratan@berkeley.edu">ratan (at) berkeley (dot) edu</a> if you want to chat!
    </P>
  </ProfileWrapper>
);

export default Profile;
