
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onVideoEntryListClick = this.onVideoEntryListClick.bind(this);
    // add state
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
    };

  }


  //click handler
  onVideoEntryListClick(video) {
    this.setState({
      video: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.video} />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} onClickHandler={this.onVideoEntryListClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//
// var App = () => (
// <div>
//   <nav className="navbar">
//     <div className="col-md-6 offset-md-3">
//       <div><h5><em>search</em> view goes here</h5></div>
//     </div>
//   </nav>
//   <div className="row">
//     <div className="col-md-7">
//       <div><h5><em>videoPlayer</em> view goes here</h5></div>
//     </div>
//     <div className="col-md-5">
//       <div><h5><em>videoList</em> view goes here</h5></div>
//     </div>
//   </div>
// </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
