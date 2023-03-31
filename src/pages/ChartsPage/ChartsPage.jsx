import "./ChartsPage.scss";
import progressImgFive from "../../assets/progress-images/Results.png";
import sidebar from "../../assets/visier-sidebar.png";

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
                </div>
              </div>


        </div>
      </div>
    )
}

export default ChartsPage;