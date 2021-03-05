import React from 'react';

// Import images
import clock from '../img/clock.svg';
import diagraph from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';


export default function ServicesSection() {
    return (
        <div>
            <div className="services">
                <div className="description">
                    <h2>High <span>quality</span> services.</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt="clock"/>
                                <h3>Efficent</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={diagraph} alt="diagraph"/>
                                <h3>Efficent</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={money} alt="money"/>
                                <h3>Efficent</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt="teamwork"/>
                                <h3>Efficent</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={home2} alt="home2"/>
            </div>
        </div>
    )
}
