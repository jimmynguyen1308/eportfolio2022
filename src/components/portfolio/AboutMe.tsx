import { useState, useEffect } from 'react'
import Button from '../general/Button'
import Image from '../general/Image'

export default function AboutMe() {
  const [chosen, setChosen] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (chosen===2)
        setChosen(0)
      else
        setChosen(chosen+1)
    }, 6500)
    return () => clearInterval(interval)
  }, [chosen])
  
  return (
    <div className='portfolio-aboutme'>
      <p className='ask-me-something'>Ask me something...</p>
      <div className='button-pill-list'>
        <Button 
          buttonClass={'button-pill' + (chosen===0 ? ' active' : '')}
          handleClick={() => setChosen(0)}
          text={`Who am I?`}
        />
        <Button 
          buttonClass={'button-pill' + (chosen===1 ? ' active' : '')}
          handleClick={() => setChosen(1)}
          text={`What's my passion?`}
        />
        <Button 
          buttonClass={'button-pill' + (chosen===2 ? ' active' : '')}
          handleClick={() => setChosen(2)}
          text={`What's the site for?`}
        />
      </div>
      <div className='aboutme-card-wrapper'>
        <div
          className='aboutme-card-list'
          style={{transform: `translateX(calc(${chosen} * -100%))`}}
        >
          <article className='aboutme-card'>
            <Image
              imgClass='aboutme-portrait'
              folder='images'
              file='portrait-self.jpg'
            />
            <h1 className='background-text'>About Me</h1>
            <p>My name is <b>Nhat</b>, but for those English speakers you can just call me <b>James</b>. I'm from Vietnam and I am currently living and working in <b>Sydney, Australia</b> as a <b>frontend web developer</b>.</p>
          </article>
          <article className='aboutme-card'>
            <h1 className='background-text'>My Passion</h1>
            <p>I used to run a blog on WordPress when I was in high school. Alongside with writting blog posts in my pastime, <b>styling and designing</b> my blogsite to be <b>eye-catching</b> has slowly but surely become one of my passion to persue to this day.</p>
          </article>
          <article className='aboutme-card'>
            <h1 className='background-text'>The Site</h1>
            <p>This website was made mainly for the purpose of having <b>an updated ePortfolio</b>; however, in the near future, I will be putting <b>articles</b> and <b>various types of content</b> to the site. Welcome to my website, enjoy your stay!</p>
          </article>
        </div>
      </div>
    </div>
  )
}
