import { useState } from "react"
import Button from "../general/Button"
import SVGLogo from "../general/SVGLogo"
import JsonData from "../../utils/mywork.json"

export default function MyWork() {
  const [expand, setExpand] = useState<number>(0)
  const handleClick = (index: number) => {
    if (index !== expand) setExpand(index)
    else setExpand(-1)
  }

  return (
    <div className="portfolio-section portfolio-mywork">
      <h1>My Work</h1>
      {JsonData ? (
        [...JsonData.data].reverse().map((item: any, index: number) => {
          return (
            <div key={index} className="mywork-item">
              <div className="mywork-card">
                <div className="title">
                  <h2>{item.name}</h2>
                  <p>{`(${item.startTime} - ${item.endTime}) ${item.title}`}</p>
                </div>
                <Button
                  buttonClass={
                    expand === index
                      ? "mywork-expand-button active"
                      : "mywork-expand-button"
                  }
                  handleClick={() => handleClick(index)}
                  text=""
                  icon={
                    <SVGLogo
                      imgClass={"icon-expand"}
                      path={"icon-next-arrow"}
                    />
                  }
                />
              </div>
              {expand === index ? (
                <ul className={expand === index ? "active" : ""}>
                  {item.responsibilities.map((res: string, index: number) => {
                    return <li key={index}>{res}</li>
                  })}
                </ul>
              ) : null}
            </div>
          )
        })
      ) : (
        <></>
      )}
    </div>
  )
}
