import React, { Component } from 'react'
import { Carousel } from 'antd'
import { withRouter } from 'react-router-dom';
import Tabbar from '../components/tabbar/tabbar'
import Tabs from '../components/Tabs/Tabs'
import Map from '../utils/mapRequest'

import aImg from '../assets/xgs.jpg'
import add from '../assets/home/add.png'
import '../style/home.scss'
import home_address_icon from '../assets/home/home_address_icon.png'
import home_scan_icon from '../assets/home/home_scan_icon.png'
import home_search_icon from '../assets/home/home_search_icon.png'
import listPic from '../assets/home/list.png'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['西瓜霜喷剂']
        }
    }
    toCart = () => {
        //跳转路由     
        this.props.history.push('/cart');
    }
    render() {
        const TabList = [
            { text: '推荐', id: 0 },
            { text: '促销商品', id: 1 },
            { text: '当季热卖', id: 2 },
            { text: '家庭常备', id: 3 },
            { text: '成人用品', id: 4 },
            { text: '营养保健', id: 5 },
            { text: '呼吸系统', id: 6 },
            { text: '肠胃用药', id: 7 },
            { text: '儿童用药', id: 8 },
            { text: '妇科用药', id: 9 },
            { text: '门店', id: 10 },
            { text: '门店', id: 11 },

        ]
        return (
            <div className='bgcolor'>
                
                <div className='nav'>
                    <div className='nav-icon'>
                        <img src={home_address_icon}></img>
                        <div className='info-text'>
                            <Map></Map>
                        </div>
                        <div className='nav-search'>
                            <img src={home_search_icon}></img>
                        </div>
                    </div>
                    <div className='nav-text'>
                        <Tabs list={TabList}></Tabs>
                        <div className='right'>分类</div>
                        
                    </div>
                </div>
                {/* <Map></Map> */}
                <Carousel autoplay>
                    <div>
                        <img className='imgs' src={"https://images.ydjia.cn/ydjia-merchant-manager/888888/20201020/d8abcaa2cecf4639ae5c36ba75293f93.png"} alt="pic"></img>
                    </div>
                    <div>
                        <img className='imgs' src={"https://images.ydjia.cn/ydjia-merchant-manager/888888/20200916/19f50626de1c46e8a2428ccf5b49da96.png"} alt="pic"></img>
                    </div>
                </Carousel>
                <div className='container-box'>
                    <div>
                        <img className='container-img' src={aImg}></img>
                    </div>
                    <div className='container-box-right'>
                        <div className='container-name'>
                            西瓜霜
                        </div>
                        <div className='container-price-box'>
                            <span className='container-mark'>￥
                                <span className='container-prices'>19</span>
                            </span>
                            <img className='container-add' src={add} alt="addPic" onClick={this.toCart.bind(this)}></img>
                        </div>
                    </div>
                </div>

                <img className='listPic' src={listPic} alt=''></img>
                <div className='card'>
                    <div className='card-item'>
                        <img className='imgs' src={aImg} alt="pic"></img>
                        <span className='name'>{this.state.list[0]}</span>
                        <div className='card-price-box '>
                            <span className='mark'>￥
                        <span className='prices'>19</span></span>
                            <img className='add' src={add} alt="addPic" onClick={this.toCart.bind(this)}></img>

                        </div>
                    </div>
                    <div className='card-item'>
                        <img className='imgs' src={aImg} alt="pic"></img>
                        <span className='name'>{this.state.list[0]}</span>
                        <div className='card-price-box'>
                            <span className='mark'>￥
                        <span className='prices'>19</span></span>
                            <img className='add' src={add} alt="addPic" onClick={this.toCart.bind(this)}></img>
                        </div>
                    </div>
                </div>
                <Tabbar></Tabbar>
            </div>
        )
    }
}


export default withRouter(Home);