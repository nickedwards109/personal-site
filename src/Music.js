import React, { Component } from 'react';
import './Music.css';
import greenFieldsOfAmerica from './audio/GreenFieldsOfAmerica.mp3';
import ganAinmJigG from './audio/GanAinmJigG.mp3';

class Music extends Component {
  render () {
    return (
      <div>
        <p>Although I enjoy listening to a broad range of music, most of what I play is Irish Traditional music. I play the Fiddle, Banjo, Guitar, Anglo Concertina, and a few other instruments.</p>
        <p>Irish Traditional music is a huge set of semi-standardized melodies (or "tunes") that have been shared among musicians, dancers, and listeners for many generations. The structure of a traditional tune offers a common framework for multiple musicians to collaborate within. At the same time, the individual musician is free to improvise by spontaneously expressing unique interpretations of notes, chords, timing, and more.</p>
        <p>Over my 15+ years of playing Irish music, my life has benefited immeasurably from this structure and freedom, community and individuality, and melding of the past and present and future. I aim to share this wonderful music with anyone who would like to listen. So, here is some music I have recorded in hopes that it may benefit others as well.</p>
        <div className="content-divider"></div>
        <p>Here is a tune I learned from friends in New Hampshire which is called "The Green Fields of America". I love this tune's aspirational and celebratory mood. This recording features the Fiddle and Anglo Concertina.</p>
        <audio controls>
          <source src={greenFieldsOfAmerica} />
        </audio>
        <div className="content-divider"></div>
        <p>Here is my take on a very nice tune whose name I don't know. In the Irish language, an expression for something without a name is 'Gan Ainm', so that's what we'll call this tune for now. This recording, featuring the Anglo Concertina, demonstrates spontaneous improvisational departures from a canonical or commonly understood version of the tune. This structure and departure from structure is a defining feature of Irish music.</p>
        <audio controls>
          <source src={ganAinmJigG} />
        </audio>
        <div className="content-divider"></div>
      </div>
    );
  }
}

export default Music;
