import React, { Component } from 'react';
// test ama klklklkl

import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = ' AIzaSyC7Xnesv9BPDxJbDaocYTynNU18FgN1uUA';

// Create a new component. This will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboard' }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.video[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


// Take this components generated HTML and put it on the 
// page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));