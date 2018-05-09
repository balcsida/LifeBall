import React from 'react';

import Argentina from '../resources/pictures/flags/Argentina.svg';
import Australia from '../resources/pictures/flags/Australia.svg';
import Belgium from '../resources/pictures/flags/Belgium.svg';
import Brazil from '../resources/pictures/flags/Brazil.svg';
import Colombia from '../resources/pictures/flags/Colombia.svg';
import CostaRica from '../resources/pictures/flags/Costa Rica.svg';
import Croatia from '../resources/pictures/flags/Croatia.svg';
import Denmark from '../resources/pictures/flags/Denmark.svg';
import Egypt from '../resources/pictures/flags/Egypt.svg';
import England from '../resources/pictures/flags/England.svg';
import France from '../resources/pictures/flags/France.svg';
import Germany from '../resources/pictures/flags/Germany.svg';
import Iceland from '../resources/pictures/flags/Iceland.svg';
import Iran from '../resources/pictures/flags/Iran.svg';
import Japan from '../resources/pictures/flags/Japan.svg';
import KoreaRepublic from '../resources/pictures/flags/Korea Republic.svg';
import Mexico from '../resources/pictures/flags/Mexico.svg';
import Morocco from '../resources/pictures/flags/Morocco.svg';
import Nigeria from '../resources/pictures/flags/Nigeria.svg';
import Panama from '../resources/pictures/flags/Panama.svg';
import Peru from '../resources/pictures/flags/Peru.svg';
import Poland from '../resources/pictures/flags/Poland.svg';
import Portugal from '../resources/pictures/flags/Portugal.svg';
import Russia from '../resources/pictures/flags/Russia.svg';
import SaudiArabia from '../resources/pictures/flags/Saudi Arabia.svg';
import Senegal from '../resources/pictures/flags/Senegal.svg';
import Spain from '../resources/pictures/flags/Spain.svg';
import Sweden from '../resources/pictures/flags/Sweden.svg';
import Switzerland from '../resources/pictures/flags/Switzerland.svg';
import Tunisia from '../resources/pictures/flags/Tunisia.svg';
import Uruguay from '../resources/pictures/flags/Uruguay.svg';

import MatchDate from './MatchDate.js';


class Match extends React.Component {
  render(props) {
    const flags ={Argentina,
                  Australia,
                  Belgium,
                  Brazil,
                  Colombia,
                  CostaRica,
                  Croatia,
                  Denmark,
                  Egypt,
                  England,
                  France,
                  Germany,
                  Iceland,
                  Iran,
                  Japan,
                  KoreaRepublic,
                  Mexico,
                  Morocco,
                  Nigeria,
                  Panama,
                  Peru,
                  Poland,
                  Portugal,
                  Russia,
                  SaudiArabia,
                  Senegal,
                  Spain,
                  Sweden,
                  Switzerland,
                  Tunisia,
                  Uruguay}
    return (
      <div className="row text-center mx-2">
        <div className="col-2 ticket-date shadow">
          <MatchDate date={this.props.match.date} />
        </div>
        <div className="col-10 ticket-card shadow">
          <div className="row">
            <div className="col-5 ">
              <img src={flags[this.props.match.home.replace(/\s/g, '')]} alt="flag" height="50" />
              <div>{this.props.match.home}</div>
            </div>
            <div className="col-2 ">
              <div>VS</div>
              <div>Group C</div>
            </div>
            <div className="col-5 ">
              <img src={flags[this.props.match.away.replace(/\s/g, '')]} alt="flag" height="50" />
              <div>{this.props.match.away}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Match;
