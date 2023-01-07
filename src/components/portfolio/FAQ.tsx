import { useState, useEffect } from "react"
import Button from "../general/Button"

export default function AboutMe() {
  const [chosen, setChosen] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (chosen === 2) setChosen(0)
      else setChosen(chosen + 1)
    }, 6500)
    return () => clearInterval(interval)
  }, [chosen])

  return (
    <div className="portfolio-section portfolio-faq">
      <h1>FAQ</h1>
      <div className="button-pill-list">
        <Button
          buttonClass={"button-pill" + (chosen === 0 ? " active" : "")}
          handleClick={() => setChosen(0)}
          text="Why web development?"
        />
        <Button
          buttonClass={"button-pill" + (chosen === 1 ? " active" : "")}
          handleClick={() => setChosen(1)}
          text="Any extra skills?"
        />
        <Button
          buttonClass={"button-pill" + (chosen === 2 ? " active" : "")}
          handleClick={() => setChosen(2)}
          text="What is the site about?"
        />
      </div>
      <div className="faq-card-wrapper">
        <div
          className="faq-card-list"
          style={{ transform: `translateX(calc(${chosen} * -100%))` }}
        >
          <article className="faq-card">
            <h1 className="background-text prevent-highlight">Web Dev</h1>
            <p>
              While studying cybersecurity major during my university years, my
              passion towards web development (frontend specifically) has risen
              due to my keen eyes on details. Over time, I've picked up several
              langauges including <b>ReactJS</b> in order to persue my
              newly-developed passion.
            </p>
          </article>
          <article className="faq-card">
            <h1 className="background-text prevent-highlight">Extras</h1>
            <p>
              Acknowledging my new career path, I've also taken time to learn
              <b>UI/UX</b> for design purposes relating to web dev somewhat.
              Hence, I also have some experience using design tools such as{" "}
              <b>Figma</b>.
            </p>
          </article>
          <article className="faq-card">
            <h1 className="background-text prevent-highlight">The Site</h1>
            <p>
              This website was made mainly for the purpose of having{" "}
              <b>an updated ePortfolio</b>; however, in the near future, I will
              be putting <b>articles</b> and <b>various types of content</b> to
              the site. Welcome to my website, enjoy your stay!
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
