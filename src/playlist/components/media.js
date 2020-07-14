import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import './media.css';
// PureComponent:si recibe nuevas propiedades pero son las que ya teniamos, no se re-renderiza.
class Media extends PureComponent{
    state={
        author:"Willy"
    }
    /*
    constructor(props){
        
        super(props);
        this.state={
            author:props.author
        }
        //Enlazando eventos del DOM
        //this.handleClick = this.handleClick.bind(this);
    }*/
   /* nueva syntaxis de ES2017+ es mucho más corta y moderna(stage2) */
	handleClick = (event) => {
        /*Los estados son mutables, los props no*/
        /*this.setState({
			author: "Luis Rosas"
        }) */
        this.props.openModal(this.props);
    }
   
    render(){
        const {
            cover, 
            title, 
            author
        } = this.props;
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img src={cover}
                         alt=""
                         width={240}
                         height={160}>
                     </img>
                     <h3 className="Media-title">{title} 🎵</h3>
                    <p className="Media-author">{author} 🙍</p>
                </div>
            </div>
        )
    }
}  



Media.propTypes ={
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}
export default Media;