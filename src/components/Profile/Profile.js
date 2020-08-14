import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import P from '../Shared/P/P';
import pic from './ratancampanile.png';

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
  width: 380px;
  height: 380px;
  
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
      I'm an undergrad @ Berkeley studying EECS.
      <br />
      Currently: Software Engineer Intern @{' '}
      <a href="https://www.virgilqr.com/" alt="virgilqr.com">
        Virgil Quantitative Research
      </a>
      <br/>
      
      
    </P>
    <ProfilePic src={pic} />
    <P>
      I'm ideating, designing & building products that transform people's lives for the better. Currently, I'm
      deeply fasincated by the impact that startups in the Finanical Technology, Blockchain
      and Deep Learning spaces are having in transforming our society.
    </P>
    <P>
      You can learn more about me on my <Link to="/blog">blog</Link>, hear my
      takes on startups, crypto & society on <a href="http://twitter.com/ratankaliani">Twitter</a>,
      look at my ideas on <a href="http://github.com/ratankaliani">Github</a>, or contact me via
      {' '}<a href="mailto:ratan@berkeley.edu">ratan (at) berkeley (dot) edu</a>!
    </P>
    <P>
      Based out of Berkeley, CA for the upcoming fall! <br />
      Looking for internship opportunities for Summer 2021!
      {/* Feel free to ~vibe~ with any one of my many moods on {' '}
      <a href="https://open.spotify.com/user/22y5m2ldfpn27ledxb7vnryca">
      Spotify
      </a>. <br /> */}
    </P>
  </ProfileWrapper>
);

export default Profile;
