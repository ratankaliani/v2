import React from 'react';
import styled from 'styled-components';
import P from '../Shared/P/P';
import pic from './office.jpg';

const UsesWrapper = styled.section`
  text-align: left;
  margin-top: 40px;
  min-height: 100%;
  padding: 10px 0;
  a {
    font-weight: bold;
  }
`;

const UsesPic = styled.img`
  box-shadow: 0 0 0 3px white, 0 3px 8px 3px #ccc;
  margin: 20px 0;
`;

const Headline = styled.h1`
  margin-top: 20px;
  text-align: left;
`;

const About = () => (
  <UsesWrapper>
    I'm an EECS student at Berkeley wildly passionate about the impact that the Internet of Things, Deep Learning, Fintech 
    and Blockchain can have upon the future of society. I'm excited to see the impact that the next generation of startups
    will have in changing the way we approach our daily lives.
    In my free time, I'm currently learning about the ins and outs of Poker, creating
    {' '} <a href="https://open.spotify.com/user/22y5m2ldfpn27ledxb7vnryca" target="_blank" rel="noreferrer">Spotify</a> playlists,
    playing Basketball 🏀 / Table Tennis 🏓 or avidly following the NBA Bubble.
    
    <h2>Education</h2>
      <h3><a href="https://eecs.berkeley.edu/" target="_blank" rel="noreferrer">University of California, Berkeley</a></h3> 
      <ul>
        <li>
          Majoring in {' '}
          {/* <a href="https://eecs.berkeley.edu"><i>Electrical Engineering & Computer Science </i></a> */}
          <i>Electrical Engineering & Computer Science </i>
          and pursuing the {' '}
          {/* <a href="https://scet.berkeley.edu/certificate-in-entrepreneurship-and-technology/"><i>Certificate in Entreprenuership & Technology</i></a> */}
          <i>Certificate in Entreprenuership & Technology</i>
          
        </li>
        <li>
          Expected Graduation: May 2022, GPA: 3.7
        </li>
        <li>
          <u>Relevant Coursework</u>: {' '}
          Data Structures, Machine Structures, Discrete Mathematics & Probability Theory, Linear Algebra,
          Circuit Design, Multivariable Calculus, Structure & Interpretation of Computer Programs, Emerging Technologies
           & Social Impact, Introduction to Entrepreneurship
        </li>
        <li>
          Organizations: {' '}<a href="https://blockchain.berkeley.edu/">Blockchain @ Berkeley</a>, 
          {' '}<a href="https://berkeleyvss.com/">Venture Strategy Solutions</a>
        </li>
      </ul>

      <h3><a href="https://tjhsst.fcps.edu/" target="_blank" rel="noreferrer">Thomas Jefferson High School for Science and Technology</a></h3>
      <ul>
      <li>
          <i>Jefferson Diploma</i>, Focus in Computer Science Research
          
        </li>
        <li>
          SAT: 1560, GPA: 4.4/4
        </li>
        <li>
          <u>Relevant Coursework</u>: {' '}
          Parallel Computing, Artificial Intelligence, Mobile & Web Application Development, Data Structures & Algorithms, Automation & Robotics
        </li>
        <li>
          Awards: {' '}
          National Merit Finalist, National AP Scholar, All-American Model UN
        </li>
        
      </ul>

    <h2>Work Experience</h2>
      <h3><a href="https://virgilqr.com" target="_blank" rel="noreferrer">Software Engineer Intern @ Virgil Quantitative Research</a> (May - Aug 2020)</h3>
        <ul>
          
          <li>
            Created real-time data pipelines to process 500K+ token movements & transfers daily including liquidation, interest & 
            volume across cryptocurrencies exchanges to perform regression analysis of prices vs. transfers, listings & 
            token unlocks
          </li>
          <li>
            Sped up existing data collection processes by 30% by aggregating platform APIs to enhance trading workflow
          </li>
          <li>
            Leveraged ML models using Pandas & Scikit-Learn to understand market effects from shifts in large-cap tokens
          </li>
          <li>
            Analyzed decentralized finance whitepapers for potential exploits to reduce exposure during black swan scenarios
          </li>
          
        </ul>
      <h3><a href="https://blockchain.berkeley.edu" target="_blank" rel="noreferrer">Full-Stack Software Developer @ Blockchain at Berkeley</a> (Feb 2020 - Present)</h3>
        <ul>
          <li>
            Developed full stack dApps (decentralized apps) for energy & supply chain use cases for PG&E
          </li>
          <li>
            Built back-end infrastructure for member portal with 100+ users to increase efficiency of inter-organizational initiatives
          </li>
          <li>
            Deployed Solidity smart contracts on Ethereum and leveraged Blockchain tools including Truffle, Ganache & Web3
          </li>
        
          
        </ul>
      <h3><a href="https://cisco.com" target="_blank" rel="noreferrer">Software Intern @ Cisco</a> (Jun - Jul 2018) </h3>
        
        <ul>
        
          <li>
            Presented a SMART infrastructure product simplifying mass transport in urban cities to Cisco’s US Public Sector SVP
            
          </li>
          <li>
            Developed a computational model from ~1M datapoints to increase efficiency of reconstructing network infrastructure
          </li>
          
          
        </ul>
      <h3><a href="https://hitachivantara.com.com" target="_blank" rel="noreferrer"> Software Development Intern @ Hitachi Vantara</a> (Jul - Aug 2017)</h3>
        <ul>
          <li>
            Intern at REAN Cloud, a global cloud systems integrator acquired by Hitachi Vantara
          </li>
          <li>
            Worked within CEO’s office to deploy dynamic & efficient solution for aggregating management information systems
            
          </li>
          <li>
            Deployed product directly to clients, contractors and employees handling 2K+ unique users monthly
          </li>
          <li>
            Developed and published the first public corporate Alexa Skill for REAN Cloud leveraging NodeJS and AWS
          </li>
          
        </ul>
    <h2>Skills & Interests</h2>
    
      <ul>
        <li>
          <u>Programming Languages:</u> Java, Python, C, C++, Go, SQL, GraphQL, HTML/CSS, JavaScript, R, Solidity, MATLAB
          
        </li>
        <li>
          <u>Frameworks:</u> React, Angular, Flask, Amazon Web Services, Git, Scikit-Learn, TensorFlow, MERN/MEAN Stack
        </li>
        <li>
          <u>Interests</u>: {' '}
          Fintech, Blockchain, Internet of Things, Computer Vision, Geopolitics, Poker, Table Tennis, Basketball
        </li>
        
      </ul>
    
    
  </UsesWrapper>
);

export default About;
