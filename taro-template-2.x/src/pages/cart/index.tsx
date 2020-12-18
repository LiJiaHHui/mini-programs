import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import cartStore from '~/store/CartStore';

import aImg from '../../assets/xgs.jpg'
import select from '../../assets/cart/select.png'
import unselect from '../../assets/cart/unselect.png'
import '../../styles/cart.scss'

// import { View, Button, Text, Input } from '@tarojs/components'
@inject('cartStore')
@observer
type propsType = {
    itemData: any,
    // counter: {
    //   counter: number,
    //   increment: Function,
    //   decrement: Function,
    //   incrementAsync: Function
    // }
  }
  type stateType = {
}
  interface CartItem {
    props: propsType,
    state: stateType
  }
class CartItem extends Component {
    config: Config = {
        navigationBarTitleText: '购物车'
      }
    constructor(props) {
        super(props);
        // data = cartStore;
    };
    
    //单个元素选中
    itemSelect = (item) => {
        // let {data}=cartStore
        cartStore.select_one(item.goodsId);
    };
    //单个元素增加
    itemIncrease = (item) => {
        // let carACtion = this.data;
        cartStore.add_num(item.goodsId);
        console.log(222)
    };
    //单个元素减少
    itemReduce = (item) => {
        // let carACtion = this.data;
        cartStore.red_num(item.goodsId);
    };
    
    // //删除列表某个元素
    // delectItem = (item) => {
    //     // let carACtion = this.data;
    //     cartStore.delete_none(item.goodsId);

    // }

    render() {
        let itemData = this.props.itemData
        console.log(itemData)
        return (
            <View>
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
            </View>
        )
    }
}
@inject('cartStore')
@observer
class Cart extends Component {
    selectAll = () => {
        if (cartStore.selectAll) {
            cartStore.select_none()
        }
        else {cartStore.select_all(); }
    };
    render() {
        //   console.log(this.props.cartStore)
        let items = []
        cartStore.cartData.map((item) => items.push(
        <CartItem itemData={item}></CartItem>))
        let itemData =cartStore
        console.log(itemData)
        return (
            <View className='page'>
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
                {/* <Tabbar></Tabbar> */}
            </View>
        )
    }
}
export default Cart as ComponentType