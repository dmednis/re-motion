import * as React from "react";
import {Link} from "react-router-dom";
import './Home.scss';

const data = [
  {name: 'a', id: '1'},
  {name: 'a', id: '12'},
  {name: 'a', id: '13'},
  {name: 'a', id: '14'},
  {name: 'a', id: '15'},
  {name: 'a', id: '16'},
  {name: 'a', id: '17'},
  {name: 'a', id: '112'},
  {name: 'a', id: '113'},
];

const Home = () => {
  return (
    <div className="userPairs">
      {data.map(d => (<Link to={`/users/${d.id}`}><li className='Element'>Pāris: {d.name} - {d.id}</li></Link>))}
    </div>
  );
};
export default Home;
