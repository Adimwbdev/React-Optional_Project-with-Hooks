import {useState, useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) =>{
  const [videos, setVideos] = useState([]);

useEffect(() => {
    search(defaultSearchTerm);
}, []);

const search = async term => {
  const response = await youtube.get('/search', {
       params: {
           q:term
       },
   });


   setVideos(response.data.items);

  }
  //Etsi sinithizetai stin React oi epistrofi pollwn metavlitwn, fuction klp, san objects 
  // enallaktika tha borousa return {videos, onTermSubmit}
  return [videos, search ];
};

export default useVideos;