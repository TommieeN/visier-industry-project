import "./LandingPage.scss";
import sidebar from "../../assets/visier-sidebar.png";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import progressImgOne from "../../assets/progress-images/Numbers.png";
import progressImgTwo from "../../assets/progress-images/People.png";
import progressImgThree from "../../assets/progress-images/Talent.png";
import progressImgFour from "../../assets/progress-images/Employee.png";
import progressImgFive from "../../assets/progress-images/Results.png";

function LandingPage() {

  let navigate = useNavigate(); 

  const [ optionOne, setOptionOne ] = useState(false);
  const [ optionTwo, setOptionTwo ] = useState(false);
  const [ optionThree, setOptionThree ] = useState(false);
  const [ optionFour, setOptionFour ] = useState(false);
  
  const [ progressOne, setProgressOne ] = useState(true);
  const [ progressTwo, setProgressTwo ] = useState(false);
  const [ progressThree, setProgressThree ] = useState(false);
  const [ progressFour, setProgressFour ] = useState(false);
  const [ progressFive, setProgressFive ] = useState(false);



  function firstClicked(e) {
    setOptionOne(true);
    setProgressTwo(true);
    setProgressOne(false);
    e.preventDefault();
    e.target.classList.add("active");
    e.target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  function secondClicked(e) {
    setOptionTwo(true);
    setProgressTwo(false);
    setProgressThree(true);
    e.preventDefault();
    e.target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    e.target.classList.add("active");
  }

  function thirdClicked(e) {
    setOptionThree(true);
    setProgressThree(false);
    setProgressFour(true);
    e.preventDefault();
    e.target.classList.add("active");
    if (optionFour === true) {
      navigate('/charts')
    }
  }

  function fourthClicked(e) {
    setOptionFour(true);
    e.preventDefault();
    e.target.classList.add("active");
    if (optionThree === true) {
      navigate('/charts')
      window.scrollTo({top: 0})
    }
  }

  function clicked(e) {
    e.preventDefault();
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
    e.target.classList.add("active");
    }
  }



  return (
      <div className="container">
        <div className="sidebar">
          <img src={sidebar} alt="sidebar navigation" className="sidebar__img" />
        </div>

        <div className="main">
          <div className="main__progression">
            <div className="main__progression-box">
              {progressOne === true && 
            <img className="main__progression-img" src={progressImgOne} alt="progression of search query indicator" />
              }
              {progressTwo === true && 
            <img className="main__progression-img" src={progressImgTwo} alt="progression of search query indicator" />
              }
              {progressThree === true &&
            <img className="main__progression-img" src={progressImgThree} alt="progression of search query indicator" />
              }
              {progressFour === true &&
            <img className="main__progression-img" src={progressImgFour} alt="progression of search query indicator" />
              }
              {progressFive === true &&
            <img className="main__progression-img" src={progressImgFive} alt="progression of search query indicator" />
              } 
            </div>
          </div>

          <div className="main__content">
            <div className="main__content-box content-one">
              <div className="main__option">
                <h2 className="main__option-title">1. What do you want to focus on today?</h2>
                <div className="main__option-buttons">
                  <button className="main__option-button" onClick={firstClicked}>People Data</button>
                  <button href="http://www.google.com" className="main__option-button" onClick={clicked}>Business Data</button>
                </div>
              </div>
            </div>

            {optionOne === true && 
              <div className="main__content-box content-two">
                <div className="main__option">
                  <h2 className="main__option-title">2. What kind of people data are you looking for?</h2>
                  <div className="main__option-buttons">
                    <button className="main__option-button" onClick={clicked}>Talent Management</button>
                    <button className="main__option-button" onClick={secondClicked}>Employee Engagement</button>
                    <button className="main__option-button" onClick={clicked}>Diversity & Equity</button>
                    <button className="main__option-button" onClick={clicked}>Compensation</button>
                  </div>
                </div>
              </div>
            }

            {optionOne === true && optionTwo === true && 
              <div className="main__content-box content-three">
                <div className="main__option">
                  <h2 className="main__option-title">3. What kind of Employee data are you looking for? <span className="regular">(Select as many as you like)</span></h2>
                  <div className="main__option-buttons">
                    <button className="main__option-button" onClick={clicked}>Employee Experience</button>
                    <button className="main__option-button" onClick={thirdClicked}>Employee Feedback</button>
                    <button className="main__option-button" onClick={clicked}>Employee Sentiment</button>
                    <button className="main__option-button" onClick={clicked}>Compensation</button>
                    <button className="main__option-button" onClick={fourthClicked}>Performance</button>
                    <button className="main__option-button" onClick={clicked}>Retention</button>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
  );
}

export default LandingPage;
