import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

//https://app-hrsei-api.herokuapp.com/api/recastly/videos

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO

  // $.get(url, [data], [callback])
  $.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=cats&maxResults=8&type=video&part=snippet`, {
    // part: 'snippet',
    // key: API_KEY,
    // q: query,
    // maxResults: 5,
    // type: 'video',
    // videoEmbaddable: 'true',
  })
    .done((data) => {
      console.log(data);
      if (callback) {
        callback(data.items);
      }
    })
    .fail(({ responseJSON }) => {
      response.JSON.error.errors.forEach((err) => console.log(err));
    });
};

export default searchYouTube;
