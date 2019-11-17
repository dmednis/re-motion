import * as React from "react";
import {Link} from "react-router-dom";
import './Home.scss';

const data = [
  {name: 'John & Jane', id: '1'},
  {name: 'Tom & Bob', id: '2'},
];

const Home = () => {
  return (
    <div className="Home">
      {data.map(d => (<Link className="Home__button" to={`/users/${d.id}`}>Therapy: {d.name} - {d.id}</Link>))}
    </div>
  );
};
export default Home;
