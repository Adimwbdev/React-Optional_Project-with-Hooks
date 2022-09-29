import axios from "axios";

const KEY = 'AIzaSyBAUYpvghjjY_v1QqmDA7dKW9necGuMWSY';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key : KEY
    }
});