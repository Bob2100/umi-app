import React, { Component } from 'react';
import styles from './goods.css';
import { connect } from "dva";
import { Button, Card } from "antd";

@connect(
  state => ({
    goods: state.goods
  }),
  {
    addGood: title => ({
      type: 'goods/addGood',
      payload: { title }
    }),
    getList: () => ({
      type: 'goods/getList'
    })
  }
)
class Goods extends Component {
  componentDidMount() {
    this.props.getList();
  }
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
        <div>
          <Button onClick={() => this.props.addGood('商品' + new Date().getTime())}>添加商品</Button>
        </div>
      </div>
    );
  }
}

export default Goods;
