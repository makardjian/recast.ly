import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options = {}, callback) => {
  // TODO
  var url = options['url'] || 'https://www.googleapis.com/youtube/v3/search';
  var max = options['max'] || '5';
  var part = options['part'] || 'snippet';
  var query = options['query'] || 'react';
  var type = options['type'] || '';
  var key = options[ 'key'] || YOUTUBE_API_KEY;
  
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      'maxResults': max,
      'part': part,
      'q': query,
      'type': type,
      'key': key
    }
  }).done(function(data) {
    return callback(data.items);
  });
  
};

export default searchYouTube;
