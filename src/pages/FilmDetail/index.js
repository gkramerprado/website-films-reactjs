import React, { Component } from 'react';


class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filme: [],
            loading: true,
        };

    }

    componentDidMount() {
        let { match: { params } } = this.props;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${params.id}`;

        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filme: json });
                this.setState({ loading: false });
            });
    }


    render() {
        return (
            <div>
                {this.state.loading === true ? <h1>Loading...</h1> : <article className="card" key={this.state.filme.id}>
                    <strong className="title-film">{this.state.filme.nome}</strong>
                    <img className="img" src={this.state.filme.foto} alt={this.state.filme.nome}></img>
                    <p className="sinopse">{this.state.filme.sinopse}</p>
                </article>}
            </div >
        );
    }
}

export default Details;