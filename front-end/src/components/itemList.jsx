import'react'
import Singleitem from './Singleitem';
import { useLocation } from 'react-router-dom';

const itemList = ({title, items,ItemsArray,path,idpath}) => {
  
  const pathname = useLocation().pathname

  const ishome = pathname === '/'
  const finalitems = ishome ? items : Infinity

  return (
    <div className="item-list">
            <div className="item-list__header">
              <h2 className="main_texts">{title} populares</h2> 
              {ishome ? (<a href={path} className="main_links">mostrar tudo</a>) : null}
             
            </div>
            <div className='item-list__container'>
              {ItemsArray.filter((currentValue, index) => index < finalitems).map((currobj, index) => (<Singleitem 
              
              
              idpath={idpath}
              {...currobj}
              key={`${title}-${index}`}/>))}
    
    
                </div>
                
          
          </div>
  )
}

export default itemList