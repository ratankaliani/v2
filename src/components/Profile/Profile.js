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
    <h3>hi, i'm ratan!</h3>

    <P>
      i'm an undergrad @ berkeley studying eecs
      <br />
      currently: swe intern @{' '}
      <a href="https://www.coinbase.com/" alt="coinbase.com">
        coinbase
      </a>
      <br/>
      
      
    </P>
    <ProfilePic src={pic} />
    <P>
      i'm ideating, designing & building products that transform people's lives for the better. currently, i'm
      deeply fasincated by the impact that startups in fintech, blockchain
      and deep learning spaces are having in transforming society.
    </P>
    <P>
      i post every couple decades on my <Link to="/blog">blog</Link>, drop freezing cold
      takes on startups, crypto & society on my <a href="http://twitter.com/ratankaliani">twitter</a>,
      and explore my 3am ideas on my <a href="http://github.com/ratankaliani">github</a>. feel contact me via
      {' '}<a href="mailto:ratan@berkeley.edu">ratan (at) berkeley (dot) edu</a> if you want to chat!
    </P>
    <P>
      currently between washington d.c. and berkeley, ca <br />
      looking for exciting and interesting new opportunities at any time!
      {/* Feel free to ~vibe~ with any one of my many moods on {' '}
      <a href="https://open.spotify.com/user/22y5m2ldfpn27ledxb7vnryca">
      Spotify
      </a>. <br /> */}
    </P>
  </ProfileWrapper>
);

export default Profile;
