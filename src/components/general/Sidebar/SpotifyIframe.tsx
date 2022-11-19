import React from 'react'

export default function SpotifyIframe() {
  return (
    <div className='sidebar spotify-iframe'>
      <h1>Pick of the Week</h1>
      <iframe 
        style={{borderRadius:'12px', margin: '30px 5%'}}
        width="90%" height="352" loading="lazy"
        src="https://open.spotify.com/embed/track/48mtE87RuL4eMnboCiXROX?utm_source=generator"
      />
    </div>
  )
}
