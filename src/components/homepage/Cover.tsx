import Image from '../general/Image'

export default function Cover() {
  return (
    <div className='homepage-cover'>
      <Image
        imgClass='cover-img'
        folder='images'
        file='homepage-cover.jpg'
      />
      <div className='cover-text'>
        <p>Greetings!<br />My name is <mark>Nhat K. "James" Nguyen</mark>.</p>
      </div>
    </div>
    
  )
}
