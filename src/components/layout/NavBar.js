import React, { Component } from 'react';
import styled from 'styled-components';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                < nav
                className="navbar navbar-expand-md navbar-dark fixed-top align-center"
                >
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokedex-tool-674593.png" style={{
                        height: "50px",
                        width: "50px"
                    }}/>
                    <a  href=""
                    className="navbar-brand col-sm-3 col-md-2 mr-0 line-items-center">
                        Pokédex
                        </a>
                </nav>
            </div>
        );
    }
}