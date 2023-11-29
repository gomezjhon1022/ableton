import { useContext } from "react";
import { AbletonContext } from "../../components/Context";
import { textHome } from "../../assets/text/textHome";

function Home() {
  const { language } = useContext(AbletonContext)
  const textList = textHome[language];
  return (
  <>
    <div className="home">
      <main>
        <div className="page-about">
          <div className="page-about__header">
          </div>
          <div className="page-about__text">
            <div className="body-text">
              <h1>{textList.links[0]}<a>{textList.links[1]}</a> , <a>{textList.links[2]}</a>{textList.links[3]}<a>{textList.links[4]}</a>{textList.title[0]}</h1>
              <p>{textList.paragraph[0]}</p>
            </div>
          </div>
          <div className="page-about__collage">
            <div className="page-about__collage__background"></div>
            <div className="page-about__media"></div>
            <div className="page-about__media"></div>
          </div>
          <div className="page-agout__text has-video">
            <div className="body-text">
                <h1>{textList.title[1]}</h1>
                <p>{textList.paragraph[1]}</p>
            </div>
          </div>
          <div className="page-about__media">

          </div>
          <div className="page-about__text">
            <div className="body-text">
              <h1>{textList.title[2]}</h1>
              <p>{textList.paragraph[2]}</p>
            </div>
          </div>
          <div className="page-about__collage"></div>
          <div className="page-about__text">
            <div className="body-text">
              <h1>{textList.title[3]}</h1>
              <p>{textList.paragraph[3]}</p>
            </div>
          </div>
          <div className="page-about__media"></div>
          <div className="page-about__text">
            <div className="body-text">
              <h1>{textList.title[4]}</h1>
              <p>{textList.paragraph[4]}</p>
              <p>{textList.paragraph[5]}</p>
            </div>
          </div>
          <div className="page-about__collage"></div>
          <div className="page-about__text">
            <div className="body-text">
              <h1>{textList.title[5]}</h1>
              <p>{textList.paragraph[6]}</p>
            </div>
          </div>
          <div className="page-about__jobs-teaser"></div>
        </div>
      </main>
    </div>
  </>
  )

}

export { Home };