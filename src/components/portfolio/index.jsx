import React from 'react';
import Sheduler from './images/scheduler.png';
import Burger from './images/burger.png';
import EmployeeManagement from './images/employeeManagement.png';
import Holiday from './images/holiday.png';
import Team from './images/team.png';
import Weather from './images/weather.png';


export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="max-width">
        <h2 className="title">Portfolio</h2>
        <div className="portfolio-content">
          <div className="card display">
            <div className="box">
              <a href="https://grandbearsleepy.github.io/WorkDayScheduler/" target="blank">
                <img src={Sheduler} alt="work day scheduler" />
                <div className="name"> Day scheduler</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://grandbearsleepy.github.io/WeatherDashboard/" target="blank">
                <img src={Weather} alt="weather dashboard" />
                <div className="name">Weather forecast</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://grandbearsleepy.github.io/Public-Holiday-Checker/" target="blank">
                <img src={Holiday} alt="holiday checker" />
                <div className="name">Holiday checker</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://github.com/GrandBearSleepy/TeamProfileGenerator" target="blank">
                <img src={Team} alt="team Generator" />
                <div className="name">Team Generator</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://github.com/GrandBearSleepy/EployeeManagementSystem" target="blank">
                <img src={EmployeeManagement} alt="Employee Management" />
                <div className="name">Employee Management</div>
              </a>
            </div>
          </div>
          <div className="card display">
            <div className="box">
              <a href="https://github.com/GrandBearSleepy/Burger" target="blank">
                <img src={Burger} alt="Burgers' Burger" />
                <div className="name">Burgers' Burger</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}