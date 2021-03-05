import React from 'react';
import {Link} from 'react-router-dom';

// Import Styles
import styled from 'styled-components';

// import images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';




export default function OurWork() {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>
            <Movie>
                <h2>The racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="Racer"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }

`;

const Movie = styled.div`
    min-height: 100vh;
    .line{
        height: .5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    
`;
