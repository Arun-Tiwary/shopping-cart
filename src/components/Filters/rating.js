
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating, onClick, style}) => {
    let fontSize = "20px";

  return (
    <div>
        {
            [...Array(5)].map((_, index) => (
                <span key={index} onClick = {() => onClick(index)} >
                    {
                        rating > index  ? 
                        (<AiFillStar fontSize={fontSize}  />) :
                        
                        (<AiOutlineStar fontSize={fontSize} />)
                    }

                </span>
            ))
                
          
        }
    
    </div>
  )
}

export default Rating