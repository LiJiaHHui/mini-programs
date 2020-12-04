import React, { Component } from 'react'
import Tabbar from '../components/tabbar/tabbar'

import '../style/my.scss'
import my from '../assets/my/icon_head_img_default_male_gray.png'
import icon_order_obligation from '../assets/my/icon_order_obligation.png'
import icon_order_wait_2_delivered from '../assets/my/icon_order_wait_2_delivered.png'
import icon_order_delivering from '../assets/my/icon_order_delivering.png'
import icon_order_refund from '../assets/my/icon_order_refund.png'
import icon_next_gray from '../assets/my/icon_next_gray.png'
import storeImg from '../assets/my/storeImg.png'
class My extends Component {
    render() {
        return (
            <div>
                <div className='user-index-page'>
                    <div className='member-info-top'>
                        <img className='member-img' src={my} alt=''></img>
                        <span className='member-name'>点击授权</span>
                    </div>
                    <div className='order-box user-info-card'>
                        <div className='order-box-header'>
                            <span className='order-box-title'>商城订单</span>
                            <div className='order-box-view-all'>
                                <span>全部</span>
                                <img className='order-box-view-all-icon' src={icon_next_gray} alt=''></img>
                            </div>
                        </div>
                        <div className='order-box-main'>
                            <div className='order-menu-item'>
                                <div >
                                    <img className='order-menu-item-icon' src={icon_order_obligation} alt=''></img>
                                </div>
                                <div className='order-menu-item-text'>
                                    待付款
                                </div>
                            </div>
                            <div className='order-menu-item'>
                                <div >
                                    <img className='order-menu-item-icon' src={icon_order_wait_2_delivered} alt=''></img>
                                </div>
                                <div className='order-menu-item-text'>
                                    待发货
                                </div>
                            </div>
                            <div className='order-menu-item'>
                                <div>
                                    <img className='order-menu-item-icon' src={icon_order_delivering} alt=''></img>
                                </div>
                                <div className='order-menu-item-text'>
                                    待收货
                                </div>
                            </div>
                            <div className='order-menu-item'>
                                <div>
                                    <img className='order-menu-item-icon' src={icon_order_refund} alt=''></img>
                                </div>
                                <div className='order-menu-item-text'>
                                    退货退款
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='my-services user-info-card'>
                        <span className='my-services-header'>更多服务</span>
                        <div className='service-main'>
                            <div>
                                <img className='service-item-icon' src={storeImg} alt=''></img>
                                <div className='service-item-name'>门店导航</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

export default My