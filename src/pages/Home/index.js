import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filmes: []
        };

        this.getFilms = this.getFilms.bind(this);

    }

    componentDidMount() {
        this.getFilms();
    }

    getFilms() {
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/';
        fetch(url).then((r) => r.json()).then((json) => {
            this.setState({ filmes: json });
            console.log(json);
        });
    }


    render() {
        return (
            <div className="container">
                {this.state.filmes.map((filme) => {
                    return (
                        <article className="card" key={filme.id}>
                            <strong className="title-film">{filme.nome}</strong>
                            <img className="img" src={filme.foto} alt={filme.nome}></img>
                            <Link className="see-more" to={`/details/${filme.id}`}> Ver mais </Link>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default Home;
