import { Card } from '../card/card.component';
import './card-list.style.css';
export const CardList = ({monsters})=>(
  <div className="card-list">
    {
      monsters.map(monster=><Card key={monster.id} monster={monster}/>)
    }
  </div>
);