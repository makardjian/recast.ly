// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import VideoList from './components/VideoList.js';
import VideoListEntry from './components/VideoListEntry.js';
import VideoPlayer from './components/VideoPlayer.js';
import exampleVideoData from './data/exampleVideoData.js';

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBcHAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBT0EsR0FBUCxNQUFnQixxQkFBaEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiBSZW5kZXIgdGhlIGBBcHBgIGNvbXBvbmVudCB0byB0aGUgRE9NXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAuanMnO1xuXG4iXX0=

// VideoList(exampleVideoData);
var root = document.getElementById('app');
ReactDOM.render(App(), root);

// ReactDOM.render(<VideoListEntry title={exampleVideoData[0].snippet.title} description={exampleVideoData[0].snippet.description} />,
//   document.getElementsByClassName('col-md-5'));


/*
Pseudocode:

/declare a videos variable and set equal to exampleVideoData.
/itterate over the videos
  /at each video object, we want to invoke VideoListEntry and pass in video[i];
  

*/

