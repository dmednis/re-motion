import React from 'react';
import { Line } from 'react-chartjs-2';

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import mock from '../data.js'

const emotions = ['love', 'happy', 'sad', 'angry', 'left-out', 'thoughtful'];

const baseSettings = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
}

const chartSettings = {
  'love': { borderColor: 'rgba(199,53,88,1)', },
  'happy': { borderColor: 'rgba(243,169,53,1)', },
  'sad': { borderColor: 'rgba(110,190,159,1)', },
  'angry': { borderColor: 'rgba(255,149,0,1)', },
  'left-out': { borderColor: 'rgba(85,89,106,1)', },
  'thoughtful': { borderColor: 'rgba(37,134,164,1)', },
  'love-other': { borderColor: 'rgba(199,53,88,0.7)', },
  'happy-other': { borderColor: 'rgba(243,169,53,0.7)', },
  'sad-other': { borderColor: 'rgba(110,190,159,0.7)', },
  'angry-other': { borderColor: 'rgba(255,149,0,0.7)', },
  'left-out-other': { borderColor: 'rgba(85,89,106,0.7)', },
  'thoughtful-other': { borderColor: 'rgba(37,134,164,0.7)', },
}

class EmoChart extends React.Component {

  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
      user1: {
        self: this.emptyData(),
        other: this.emptyData(),
      },
      user2: {
        self: this.emptyData(),
        other: this.emptyData(),
      },
    }
  }

  componentDidMount() {
    this.getData();
  };

  elemCount = (elem, array) => array.reduce((pre, cur) => (cur === elem) ? ++pre : pre, 0)

  emptyData = () => emotions.reduce((acc, val) => {
    acc[val] = [];
    return acc
  }, {})

  async getData() {
    // const user1_snap = await this.db.collection("user-pairs").doc("dAlSFMlR6bENZuno2bGJ").collection("user1").get();
    // const user1_data = user1_snap.docs.map(doc => doc.data())
    //
    // const user2_snap = await this.db.collection("user-pairs").doc("dAlSFMlR6bENZuno2bGJ").collection("user2").get();
    // const user2_data = user2_snap.docs.map(doc => doc.data())

    // const user1 = {
    //   self: this.emptyData(),
    //   other: this.emptyData(),
    //   labels: user1_data.map((_, i) => `Day ${i + 1}`),
    // };
    //
    // const user2 = {
    //   self: this.emptyData(),
    //   other: this.emptyData(),
    //   labels: user1_data.map((_, i) => `Day ${i + 1}`),
    // }
    //
    // user1_data.forEach(entry => {
    //   const { self, other } = entry
    //   emotions.forEach(key => {
    //     user1.self[key].push(this.elemCount(key, self));
    //     user1.other[key].push(this.elemCount(key, other))
    //   })
    // })
    //
    // user2_data.forEach(entry => {
    //   const { self, other } = entry
    //   emotions.forEach(key => {
    //     user2.self[key].push(this.elemCount(key, self));
    //     user2.other[key].push(this.elemCount(key, other))
    //   })
    // })

    const [user1, user2] = mock;

    this.setState({
      ...this.state,
      user1,
      user2,
    })
  };

  datasets = (user1, keys1, user2, keys2) => {
    return [...Object.keys(user1.self).map(key => {
      return {
        ...baseSettings,
        ...chartSettings[key],
        label: key,
        data: user1.self[key],
        hidden: !keys1.includes(key)
      }
    }),
      ...Object.keys(user2.other).map(key => {
        return {
          ...baseSettings,
          ...chartSettings[key + '-other'],
          label: key + '-other',
          data: user2.other[key],
          hidden: !keys2.includes(key)
        }
      })]
  };

  charData = () => {
    const { user1, user2 } = this.state;
    const { keys1, keys2 } = this.props;
    return {
      labels: user1.labels,
      datasets: this.datasets(user1, keys1, user2, keys2),
    };
  }

  render() {
    return (
      <div className="EmoChart">
        <Line data={this.charData()} options={{ legend: { display: false } }}/>
      </div>
    );
  }
}

export default EmoChart;
