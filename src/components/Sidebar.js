import * as React from "react";
import {Card} from "@blueprintjs/core";
import {Link} from "react-router-dom";

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
  {name: 'a', id: '114'},
  {name: 'a', id: '115'},
  {name: 'a', id: '116'},
  {name: 'a', id: '171'},
  {name: 'a', id: '1123'},
  {name: 'a', id: '1123'},
  {name: 'a', id: '1144'},
  {name: 'a', id: '1512'},
  {name: 'a', id: '1623'},
  {name: 'a', id: '16743'},
  {name: 'a', id: '11263'},
  {name: 'a', id: '771'},
  {name: 'a', id: '341'},
  {name: 'a', id: '23461'},
];

const Sidebar = () => {

  return (
    <ul className='ElementList'>
      {/*<Link to="/account?name=zillow-group">Zillow Group</Link>*/}

      {data.map(d => (<Link to={`/users/${d.id}`}><li className='Element'>Pāris: {d.name} - {d.id}</li></Link>))}
    </ul>
  );
};

export default Sidebar;
