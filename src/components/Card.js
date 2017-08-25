import React from 'react';
import '../App.css';


class Card extends React.Component {
    // redirectToUrl(url) {
    //     window.open(url, '_blank');  // _blank defines that a new tab opens

    // }

    render() {
        const imgStyle = {
            backgroundImage: `url(${this.props.media.urlToImage})`,
            width: '300px',
            height: '150px',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        };
        return (
            <a className='list-group-item' href={this.props.media.url} target='_blank'  >
                <div className="hit-item" id='hit-html'>
                    <div className='media-body'>
                        <div className='col s4 fill'>
                            <div style={imgStyle}></div>
                            {/* <img src={this.props.media.urlToImage} alt='image is missing' /> */}
                        </div>
                        <div className="col s8">
                            <div className="news-intro-col">
                                <div className="hit-title">
                                    <h4>{this.props.media.title}</h4>
                                </div>
                                <div className="hit-info expanded">
                                    <p>{this.props.media.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default Card;