import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './media.css';
class Media extends Component{
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
        console.log(this.props.image);
        /*Los estados son mutables, los props no*/
        this.setState({
			author: "Luis Rosas"
		}) 
    }
   
    render(){
        const {
            image, 
            title, 
            author
        } = this.props;
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img src={image}
                         alt=""
                         width={260}
                         height={160}>
                     </img>
                     <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes ={
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
}
export default Media;