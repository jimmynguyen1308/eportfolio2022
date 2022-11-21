import Image from '../general/Image'

export default function AboutMe() {
  return (
    <div className='homepage-aboutme'>
      <Image
        imgClass='aboutme-portrait'
        folder='images'
        file='portrait-self.jpg'
      />
      <div className='background-text'>About Me</div>
      <p><b>Welcome to my personal website/blog/ePortoflio!</b></p>
      <p>My name is Nhat, but for those English speakers you can just call me James. I'm from Vietnam 🇻🇳 and currently I am living and working in Sydney, Australia 🇦🇺 as a frontend web developer.</p>
      <p>Alongside mastering my designing and web-developing skills, I often write blog posts and articles casually; thus, this site is the place for me to store and show all of my work.</p>
    </div>
  )
}
