import { ComponentType } from 'react'
// import { Carousel } from 'antd'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import '../../styles/shop.scss'
import search from '../../assets/shop/icon_search.png'
import address from '../../assets/shop/address_icon.png'
import cancel from '../../assets/shop/cancel_icon.png'
import phone_icon from '../../assets/shop/phone_icon.png'
import time_icon from '../../assets/shop/time_icon.png'
import nav_icon from '../../assets/shop/nav_icon.png'

class Shop extends Component {
    render() {
        return (
            <div className='page'>
                <div>
                    <div className='shop-select-search'>
                        <div className='shop-select-search-box'>
                            <img className='icon' src={search} alt=''></img>
                            <input className='input' placeholder='请输入门店名查找' type='text'></input>
                            <img className='icon' src={cancel}></img>
                        </div>
                        <div className='shop-select-search-btn'>搜索</div>
                    </div>
                    <div className='shop-select-chooselocation'>
                        <div className='shop-select-chooselocation-row'>
                            <div className=''>当前位置</div>
                            <div className=''>更改</div>
                        </div>
                        <div className='shop-select-chooselocation-address'>
                            <img className='icon' src={address} alt=''></img>
                        湖南省长沙市岳麓区麓谷街道麓天路18号五矿·麓谷科技产业园
                    </div>
                    </div>
                    <div className='shop-select-store-box'>
                        <div className='shop-desc-card-component user-info-card'>
                            <div className='shop-desc-card-default'>
                                <div className=''>当前门店</div>
                                <div className='shop-desc-card-set-btn'>设为常用</div>
                            </div>
                            <div className='shop-desc-card-content-pic'>
                                <img className='mode-scaletofill' src='https://centermerchant-test.oss-cn-shanghai.aliyuncs.com/ydjia-operate/hydee/20191230/a1262d36107743d3b4cf8de9978c4452.png?x-oss-process=image/resize,w_800'></img>
                                <div className='shop-desc-card-content-info'>
                                    <div className='shop-desc-card-content-info-name'>
                                        <div className='shop-desc-card-content-info-name-tag-green'>
                                            推荐
                                        </div>
                                        kmm123456
                                    </div>
                                    <div className='shop-desc-card-content-info-tags'>
                                        <div className='shop-desc-card-content-info-tags-item'>
                                            配送上门
                                        </div>
                                        <div className='shop-desc-card-content-info-tags-item'>
                                            门店自提
                                        </div>
                                        <div className='shop-desc-card-content-info-tags-item'>
                                            普通快递
                                        </div>
                                    </div>
                                    <div className='shop-desc-card-content-info-time'>
                                        <img className='icon' src={time_icon}></img>
                                        <div className='shop-desc-card-content-info-text'>
                                            00:00-24:00
                                        </div>
                                    </div>
                                    <div className='shop-desc-card-content-info-time'>
                                        <img className='icon' src={address}></img>
                                        <div className='shop-desc-card-content-info-text'>
                                            湖南省长沙市岳麓区五矿麓谷科技产业园
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='shop-desc-card-content-info-btns'>
                                <div className='shop-desc-card-content-info-btns-btn'>
                                    <img src={phone_icon} alt=''></img>
                                            联系方式
                                        </div>
                                <div className='shop-desc-card-content-info-btns-btn'>
                                    <img src={nav_icon} alt=''></img>
                                            距离0km
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className='user-info-card'>
                        <div className='shop-select-store-box-list-navbar '>
                            <div className='shop-select-store-box-list-navbar-item'>
                                附近门店
                            </div>
                            <div className='shop-select-store-box-list-navbar-item'>
                                购买过的门店
                            </div>
                        </div>
                        <div className='shop-list-card-component'>
                            <img className='shop-item-pic' src='https://centermerchant-test.oss-cn-shanghai.aliyuncs.com/ydjia-operate/hydee/20191230/a1262d36107743d3b4cf8de9978c4452.png?x-oss-process=image/resize,w_800'></img>
                            <div className='shop-item-info '>
                                <span className='shop-list-card-title-text'>kmm123456</span>
                                <div className='shop-desc-card-content-info-tags'>
                                    <div className='shop-desc-card-content-info-tags-item'>
                                        配送上门
                                        </div>
                                    <div className='shop-desc-card-content-info-tags-item'>
                                        门店自提
                                        </div>
                                    <div className='shop-desc-card-content-info-tags-item'>
                                        普通快递
                                        </div>
                                </div>
                                <div className='shop-list-card-content-info-text'>
                                    <img className='icon' src={address} alt=''></img>
                                      湖南省长沙市岳麓区麓谷街道麓天路18号五矿·麓谷科技产业园
                                </div>
                            </div>
                        </div>
                        <div className='shop-list-card-component'>
                            <img className='shop-item-pic' src='https://centermerchant-test.oss-cn-shanghai.aliyuncs.com/ydjia-operate/hydee/20191230/a1262d36107743d3b4cf8de9978c4452.png?x-oss-process=image/resize,w_800'></img>
                            <div className='shop-item-info '>
                                <span className='shop-list-card-title-text'>kmm123456</span>
                                <div className='shop-desc-card-content-info-tags'>
                                    <div className='shop-desc-card-content-info-tags-item'>
                                        配送上门
                                        </div>
                                    <div className='shop-desc-card-content-info-tags-item'>
                                        门店自提
                                        </div>
                                    <div className='shop-desc-card-content-info-tags-item'>
                                        普通快递
                                        </div>
                                </div>
                                <div className='shop-list-card-content-info-text'>
                                    <img className='icon' src={address} alt=''></img>
                                      湖南省长沙市岳麓区麓谷街道麓天路18号五矿·麓谷科技产业园
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Tabbar></Tabbar> */}
            </div>
        )
    }
}
export default Shop as ComponentType

