import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

function PhotosEnlarge() {
   const [photosUrl,setPhotosUrl] = useState('')
    const {id} = useParams()
    useEffect(()=>{
        axios
        .get(`https://picsum.photos/id/${id}/info`)
        .then((res) => setPhotosUrl(res.data.download_url))
        .catch((err) => console.log(err.message));
    },[id])

    let imgStyle={
        width:'90vw',
        height: '85vh',
        margin : '20px 0'
    }
  return (
    <div style={{ textAlign: "center" }}>
      {photosUrl ? <img src={photosUrl}style={imgStyle}  alt="lageimg"/>: (
          <div style={{display:'flex', height: '90vh',alignItems: 'center', justifyContent:'center'}}>
          <Spinner animation="border"/>
          </div>
        )}
    </div>
  );
}

export default PhotosEnlarge;
