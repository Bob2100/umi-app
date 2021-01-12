import React, { Component } from 'react';
import styles from './goods.css';
import { connect } from "dva";
import { Card } from "antd";

@connect(
  state => ({
    goods: state.goods
  }),
  {
    addGood: title => ({
      type: 'googs/addGood',
      payload: { title }
    })
  }
)
class Goods extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.title}>Page goods</h1>
        <div>
          {this.props.goods.map(good => (
            <Card key={good.title}>
              <div>{good.title}</div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Goods;
