import React, { Component } from 'react';


class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filme: []
        };

    }

    componentDidMount() {
        let { match: { params } } = this.props;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${params.id}`;

        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filme: json });
            });
    }


    render() {
        return (
            <div>
                <article className="card" key={this.state.filme.id}>
                    <strong className="title-film">{this.state.filme.nome}</strong>
                    <img className="img" src={this.state.filme.foto} alt={this.state.filme.nome}></img>
                    <p className="sinopse">{this.state.filme.sinopse} sd</p>
                </article>
            </div >
        );
    }
}

export default Details;