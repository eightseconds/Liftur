import React from 'react';
import plus from './plus.png'
import { Link } from 'react-router-dom';
import Navbar from '../nav/navbar_container';
import './home_page.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
                <div className="liftur--ui">
                    <Navbar />
                    <div className="plan--wrapper">
                        <div className="plan--header">
                            Plan 1
                        </div>
                        <div className="plan--scrollable">
                        </div>
                        <div className="plan--footer">
                            <Link to={"/create"}>
                                <img src={plus} alt="Plus" className="plus" />
                            </Link>
                        </div>
                    </div>
                </div>
        );
    }
}

export default HomePage;