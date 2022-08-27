import "./styles.css"
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOtter, faList, faGift, faDice, faArrowDown19, faBank, faStore } from '@fortawesome/free-solid-svg-icons'

const Apps = () => {
  return(
    <div className="container-apps">
      <div className="sidebar-apps">
        <h1>Apps</h1>
        <ul>
          <li><div className="action"><Link to="/apps/to-do-list"> <FontAwesomeIcon icon={faList} /></Link></div></li>
          <li><div className="action"><Link to="/apps/poke-api"><FontAwesomeIcon icon={faOtter} /></Link></div></li>
          <li><div className="action"><Link to="/apps/gif-api"><FontAwesomeIcon icon={faGift} /></Link></div></li>
          <li><div className="action"><Link to="/apps/game-dados"><FontAwesomeIcon icon={faDice} /></Link></div></li>
          <li><div className="action"><Link to="/apps/game-number"><FontAwesomeIcon icon={faArrowDown19} /></Link></div></li>
          <li><div className="action"><Link to="/apps/app-bank"><FontAwesomeIcon icon={faBank} /></Link></div></li>
          <li><div className="action"><Link to="/apps/ecommerce"><FontAwesomeIcon icon={faStore} /></Link></div></li>
        </ul>
      </div>
      <Outlet/>
    </div>
  );
};

export default Apps;
