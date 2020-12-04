import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

import aImg from '../assets/xgs.jpg'
import select from '../assets/cart/select.png'
import unselect from '../assets/cart/unselect.png'
import '../style/cart.scss'
import Tabbar from '../components/tabbar/tabbar'

import '../style/home.scss'
@inject('cartStore')
@observer
class CartItem extends Component {
    constructor(props) {
        super(props);
        this.data = this.props.cartStore;
    };
    //单个元素选中
    itemSelect = (item) => {
        this.data.select_one(item.goodsId);
    };
    //单个元素增加
    itemIncrease = (item) => {
        let carACtion = this.data;
        carACtion.add_num(item.goodsId);
        console.log(222)
    };
    //单个元素减少
    itemReduce = (item) => {
        let carACtion = this.data;
        carACtion.red_num(item.goodsId);

    };
    //删除列表某个元素
    delectItem = (item) => {
        let carACtion = this.data;
        carACtion.delete_none(item.goodsId);

    }

    render() {
        let itemData = this.props.itemData
        // console.log(itemData)
        return (
            <div>
                <div className='item info-card'>
                    <img className='selectPic' src={itemData.selectOne ? select : unselect} alt=''
                        onClick={() => this.itemSelect(itemData)} />
                    <img src={aImg} className='img'></img>
                    <p className='text'>{itemData.name}
                        <p className='price'>￥{itemData.prices}</p>
                    </p>
                    <div className='input-num'>
                        <span className='redNum' onClick={() => this.itemReduce(itemData)}  >-</span>
                        <p className='count'>{itemData.count}</p>
                        <span className='addNum' onClick={() => this.itemIncrease(itemData)} >+</span>
                    </div>

                </div>
            </div>
        )
    }
}
@inject('cartStore')
@observer
class Cart extends Component {
    selectAll = (item) => {
        if (this.props.cartStore.selectAll) {
            this.props.cartStore.select_none()
        }
        else { this.props.cartStore.select_all(); }
    };
    render() {
        //   console.log(this.props.cartStore)
        let items = []
        this.props.cartStore.cartData.map((item) => items.push(<CartItem itemData={item} key={item.goodsId}></CartItem>))
        let itemData = this.props.cartStore
        console.log(itemData)
        return (
            <div className='page'>
                <div className='title'>购物车</div>
                {items}
                <div className='fixed-bottom'>
                    <div className='fixed-bottom-main'>
                        {<img className='fixed-bottom-select' src={itemData.selectAll ? select : unselect} alt=''
                            onClick={() => this.selectAll()}
                        />}
                        <div className='fixed-bottom-text'>全选</div>
                        <div className='sum-box'>
                            <div className='sum-price'>合计:
                            <span className='sum-price-num'>￥{itemData.sum_prices}</span>
                            </div>
                            <div>优惠:￥0</div>
                        </div>
                        <div className='fixed-bottom-button'>
                            <div className='fixed-bottom-button-text'>结算</div>

                        </div>
                    </div>
                </div>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
export default Cart