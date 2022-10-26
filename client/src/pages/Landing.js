import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby selvage bitters lomo narwhal sustainable tilde. Tattooed
            tilde offal celiac fashion axe. Cardigan chillwave narwhal,
            dreamcatcher tattooed kombucha fanny pack master cleanse offal.
            Chartreuse before they sold out vegan typewriter succulents.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        {/* main image*/}
        <img src={main} alt="Job Hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
