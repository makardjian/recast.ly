import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  // TODO
  var url = options['url'] || 'https://www.googleapis.com/youtube/v3/search';
  var max = options['max'] || '5';
  var part = options['part'] || '';
  var query = options['query'] || 'react';
  var type = options['type'] || '';
  var key = options[ 'key'] || YOUTUBE_API_KEY;
  
  $.get(url,
  {
    'maxResults': max,
    'part': part,
    'q': query,
    'type': type,
    'key': key
  });
  
};

export default searchYouTube;

