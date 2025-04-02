import 'react'
import { Link } from 'react-router-dom'




const Songitem = ({image, name , duratio, artist, audio, _id, index}) => {
  return (
    <Link to = {`/song/${_id}`} className = "song-item">
    <div className = "song-item__number-album ">

      
      <p>{index +1}</p>

      <div className = "song-item__album">


      <img src={image} alt="imagem da musica x" className='song-item__image'/>
      <p className='song-item__name'>{name}</p>

      </div>
    </div>
        <p>02:30</p>
    </Link>
  )
}

export default Songitem