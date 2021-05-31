import './style.css'

function Filters(props) {
    function handleFilterClick(filter) {
        if (filter === 'all') {
            props.setMovieCategory([]);
            return;
        }
        
        const estaAtivo = props.movieCategory.includes(filter);

        if (estaAtivo) {
            const novosFiltros = props.movieCategory.filter(x => x !== filter);
            props.setMovieCategory(novosFiltros);
            return;
        }

        props.setMovieCategory([...props.movieCategory, filter]);

    }

    return (
        <div className="footer-movies__generos">
            <button 
                className={`theButton ${props.movieCategory.length === 0? 'teste': ''}`}
                onClick={ () => handleFilterClick('all') }
            >
                Todos
            </button>
            <button 
                className={`theButton ${props.movieCategory.includes('action')? 'teste': ''}`}
                onClick={ () => handleFilterClick('action') }
            >
                Ação
            </button>
            <button 
                className={`theButton ${props.movieCategory.includes('romance')? 'teste': ''}`}
                onClick={ () => handleFilterClick('romance') }
            >
                Romance
            </button>
            <button 
                className={`theButton ${props.movieCategory.includes('science fiction')? 'teste': ''}`}
                onClick={ () => handleFilterClick('science fiction') }
            >
                Ficção Cientifica
            </button>
            <button 
                className={`theButton ${props.movieCategory.includes('horror')? 'teste': ''}`}
                onClick={ () => handleFilterClick('horror') }
            >
                Terror
            </button>
        </div>
    )
}

export default Filters;