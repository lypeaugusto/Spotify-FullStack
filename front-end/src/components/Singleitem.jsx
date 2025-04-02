import'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


const Singleitem = ({_id,name,image,banner,artist,idpath,audio}) => {
  return (
    <a href={`${idpath}/${_id}`} className="single-item">
                  <div className="single-item__div-image-button">
                    <div className="single-item__div-image">
        
                  <img
                    className="single-item_image"
                    src={image}
                    alt={`imagem do artista ${name}`}
                    />
                  <FontAwesomeIcon className='single-item__icon' icon={faCirclePlay} />
                    </div>
                    </div>
        
                <div className='single-item__texts'>
                  <div className='single-item__2lines'></div>
                  <p className="single-item_title">{name}</p>
                  <p className='single-item__texts'>{artist ?? `Artista`}</p>
                    </div>
                </a>
  )
}

export default Singleitem