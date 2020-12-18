import { ComponentType } from 'react'
// import { Carousel } from 'antd'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import '../../styles/my.scss'
import my from '../../assets/my/icon_head_img_default_male_gray.png'
import icon_order_obligation from '../../assets/my/icon_order_obligation.png'
import icon_order_wait_2_delivered from '../../assets/my/icon_order_wait_2_delivered.png'
import icon_order_delivering from '../../assets/my/icon_order_delivering.png'
import icon_order_refund from '../../assets/my/icon_order_refund.png'
import icon_next_gray from '../../assets/my/icon_next_gray.png'
import storeImg from '../../assets/my/storeImg.png'


class Index extends Component {
    config: Config = {
        navigationBarTitleText: '个人中心'
      }
    render() {
        return (
            <View className='index'>
                <view className='user-index-page'>
                    <view className='member-info-top'>
                        <img className='member-img' src={my} alt=''></img>
                        <span className='member-name'>点击授权</span>
                    </view>
                    <view className='order-box user-info-card'>
                        <view className='order-box-header'>
                            <span className='order-box-title'>商城订单</span>
                            <view className='order-box-view-all'>
                                <span>全部</span>
                                <img className='order-box-view-all-icon' src={icon_next_gray} alt=''></img>
                            </view>
                        </view>
                        <view className='order-box-main'>
                            <view className='order-menu-item'>
                                <view >
                                    <img className='order-menu-item-icon' src={icon_order_obligation} alt=''></img>
                                </view>
                                <view className='order-menu-item-text'>
                                    待付款
                                </view>
                            </view>
                            <view className='order-menu-item'>
                                <view >
                                    <img className='order-menu-item-icon' src={icon_order_wait_2_delivered} alt=''></img>
                                </view>
                                <view className='order-menu-item-text'>
                                    待发货
                                </view>
                            </view>
                            <view className='order-menu-item'>
                                <view>
                                    <img className='order-menu-item-icon' src={icon_order_delivering} alt=''></img>
                                </view>
                                <view className='order-menu-item-text'>
                                    待收货
                                </view>
                            </view>
                            <view className='order-menu-item'>
                                <view>
                                    <img className='order-menu-item-icon' src={icon_order_refund} alt=''></img>
                                </view>
                                <view className='order-menu-item-text'>
                                    退货退款
                                </view>
                            </view>
                        </view>

                    </view>
                    <view className='my-services user-info-card'>
                        <span className='my-services-header'>更多服务</span>
                        <view className='service-main'>
                            
                                <img className='service-item-icon' src={storeImg} alt=''></img>
                                <view className='service-item-name'>门店导航</view>
                            
                        </view>
                    </view>
                </view>
                {/* <Tabbar></Tabbar> */}
            </View>
        )
    }
}
export default Index as ComponentType
