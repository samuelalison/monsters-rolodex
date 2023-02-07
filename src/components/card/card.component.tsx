import { Monsters } from '../../App';

import './card.styles.css';


type CardProps = {
  monster: Monsters;
}

const Card = ({monster}: CardProps) => {
const { name, email, id} = monster;
      
       return(
        <div className='card-container' key={id}>
        <img className='pic' src={`https://robohash.org/${id}?set=set2`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
            </div>

       );
}
    

 
export default Card;