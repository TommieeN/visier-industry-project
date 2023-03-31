import "./ChartsPage.scss";
import progressImgFive from "../../assets/progress-images/Results.png";
import sidebar from "../../assets/visier-sidebar.png";
import download from "../../assets/progress-images/Download-hover.svg";
import share from "../../assets/progress-images/Share-hover.svg";


function ChartsPage() {

    return(
        <div className="container">
            <div className="sidebar">
              <img src={sidebar} alt="sidebar navigation" className="sidebar__img" />
            </div>

            <div className="main">
              <div className="main__progression">
                <div className="main__progression-box">

                    <img className="main__progression-img" src={progressImgFive} alt="progression of search query indicator" />
                    <div className="main__progression-link-container">
                        <div className="main__progression-linkbox">
                            <p className="main__progression-text">Download</p>
                            <img src={download} alt="" className="main__progression-link-img" />
                        </div>

                        <div className="main__progression-linkbox">
                            <p className="main__progression-text">Share</p>
                            <img src={share} alt="" className="main__progression-link-img" />
                        </div>
                    </div>


                </div>
              </div>


        </div>
      </div>
    )
}

export default ChartsPage;