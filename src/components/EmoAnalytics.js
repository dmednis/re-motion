import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import {history} from "../App";
import Plot from "./Plot";
import emotions from '../emotions';
import mock from '../data.js'
import './EmoAnalytics.scss'
import { Icon } from "@blueprintjs/core";

class EmoAnalytics extends React.Component {

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

  async fetchData(pairID) {
    const user1_snap = await this.db.collection("user-pairs").doc("dAlSFMlR6bENZuno2bGJ").collection("user1").get();
    const user1_data = user1_snap.docs.map(doc => doc.data())

    const user2_snap = await this.db.collection("user-pairs").doc("dAlSFMlR6bENZuno2bGJ").collection("user2").get();
    const user2_data = user2_snap.docs.map(doc => doc.data())
    return [user1_data, user2_data]
  }

  elemCount(elem, array) {
    return array.reduce((pre, cur) => (cur === elem) ? ++pre : pre, 0)
  }

  emptyData() {
    return emotions.reduce((acc, [val]) => {
      acc[val] = [];
      return acc
    }, {})
  }

  transformData(data) {
    const user = {
      self: this.emptyData(),
      other: this.emptyData(),
      labels: data.map((_, i) => `Day ${i + 1}`),
    };

    data.forEach(entry => {
      const { self, other } = entry;
      emotions.forEach(([key]) => {
        user.self[key].push(this.elemCount(key, self));
        user.other[key].push(this.elemCount(key, other))
      })
    })

  }

  async fetchAndTransformData(pairID) {
    // const [data1, data2] = await this.fetchData(pairID)
    // const user1 = this.transformData(data1);
    // const user2 = this.transformData(data2);

    const [user1, user2] = mock;

    this.setState({
      ...this.state,
      user1,
      user2,
    })
  }

  componentDidMount() {
    this.fetchAndTransformData(this.props.pairID);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.pairID !== prevProps.pairID) {
      this.fetchAndTransformData(this.props.pairID);
    }
  }

  render() {
    const { user1, user2 } = this.state;

    return (
      <div className="EmoAnalytics">
        <Icon className="backIcon" icon="chevron-left" onClick={()=> {history.goBack()}}/>
        <Plot title={"Child emotions"} data1={user1} label1={"Parent"} data2={user2} label2={"Child"}/>
        <Plot title={"Parent emotions"} data1={user2} label1={"Child"} data2={user1} label2={"Parent"}/>
      </div>
    )
  }
}

export default EmoAnalytics;