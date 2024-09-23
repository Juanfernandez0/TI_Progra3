import "./MovieGrid.css";
import { Link } from "react-router-dom";
import { Component } from "react";

class MovieGrid extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: []
      };
    }
  
    componentDidMount() {
      const  apiUrl = this.props.url; 
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data && data.results) {
            this.setState({ movies: data.results });
          } else {
            console.error("No se encuentran películas");
          }
        })
        .catch(error => console.log(error));
    }

    render() {
        const { limit, link, titulo } = this.props;
    
        return (
          <section className='ConteinerPopulares'>
            <div className="titulo_Grup">
              <div className="BotonTitulo">
                <h2 className="SeccionTitulo">
                  {titulo} 
                </h2>
                {limit ? <Link to={link}><button>Ver todas</button></Link> : null}
              </div>
            </div>            
          </section>
        );
      }
    }
    
export default MovieGrid;