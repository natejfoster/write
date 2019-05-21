import React from 'react';
import '../css/about.scss'

const About = () => {
  return ( 
    <div className='about'>
      <p className='about__paragraph'>
        Day after day we’re barraged by notifications and to-dos. Write is here to relieve the burden that technology places on our lives.
      </p> 
      <p className='about__paragraph'>
        Write is a place to breathe, think deeply, and communicate with the ones you love.
      </p>
      <p className='about__paragraph'>
        When you send a letter through Write, it is delivered at a random point within seven days after clicking the send button. Many digital communication methods let us know when the other person receives something, and all digital communication methods send things immediately. This creates a burden on both parties—a burden to read quickly and reply promptly. Write isn’t supposed to be burdensome.
      </p>
      <p className='about__paragraph'>
        Write is a project designed by Matt Wright and<br />developed by Nathan Foster. 
      </p>
      <p className='about__paragraph'>
        Want to chat? Send Matt an email at<br />matt.wright.matt@gmail.com.
      </p>
    </div>
   );
}
 
export default About;