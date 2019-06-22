import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="main-header">
            <Link className="title" to="/">
                <h1>Projeto de Filmes - ReactJS</h1>
            </Link>
        </div>
    );
}

export default Header;