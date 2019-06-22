import React from 'react';

const NotFound = (props) => {
    return (
        <div>
            <article className="card" key={porps.id}>
                <strong className="title-film">{filme.nome}</strong>
                <img className="img" src={filme.foto} alt={filme.nome}></img>
                <Link className="see-more" to={`/details/${filme.id}`}> Ver mais </Link>
            </article>
        </div>
    );
}

export default NotFound;