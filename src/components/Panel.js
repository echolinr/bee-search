import React from 'react';
import Card from './Card';
import mediaData from '../data.json';
import _ from 'lodash';

class Panel extends React.Component {
    constructor() {
        super();
        this.state = { media: null };
        this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        this.loadMoreCards();
    }

    // scroll left to load more search results
    handleScroll() {
        let scrollX = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
        if ((window.innerWidth + scrollX) >= (document.body.offsetWidth - 50)) {
            console.log('Loading more cards');
            this.loadMoreCards();
        }
    }


    loadMoreCards() {
        this.setState({
            media: mediaData
        });
    }

    // use map to loop through all media
    renderCards() {
        const media_list = this.state.media.map(function (media) {
            return (
                    <Card media={media}></Card>
            );
        });

        return (
            <div className='container-fluid'>
                <div className='list-group' >
                    {media_list}
                </div>
            </div>
        )
    }
    render() {
        if (this.state.media) {
            return (
                <div className="col-md-6 hit-container">
                    <div className="row">
                        {/* Help Topics */}
                        <div className="hit-group col-xs-12 col-md-12">
                            <div className="hit-category hit-title-html">
                                <i className="fa fa-html5" aria-hidden="true"></i>
                                <h1>Help Topics</h1>
                            </div>
                            {this.renderCards()}
                        </div>
                        {/* PDF topics */}
                        <div className="hit-group col-xs-12 col-md-12">
                            <div className="hit-category hit-title-pdf">
                                <h1>PDF Topics</h1>
                            </div>
                            {this.renderCards()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id='' >
                    No results.
                </div>
            )
        }
    }

}
export default Panel;