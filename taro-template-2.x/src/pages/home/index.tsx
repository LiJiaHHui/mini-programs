import { ComponentType } from 'react'
// import { Carousel } from 'antd'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtNoticebar, AtTag } from 'taro-ui'
import {
    HdPaging,
    HdBackToTop,
    HdCard,
    HdCountdown,
    HdModal,
    HdNodata,
    HdTabs,
} from 'taro-ui-hd'

import aImg from '../../assets/xgs.jpg'
import add from '../../assets/home/add.png'
import '../../styles/home.scss'
import home_address_icon from '../../assets/home/home_address_icon.png'
// import home_scan_icon from '../../assets/home/home_scan_icon.png'
import home_search_icon from '../../assets/home/home_search_icon.png'
import listPic from '../../assets/home/list.png'

import QQMapWSService from '~/services/qqMap/ws.service'
import LianouService from '~/services/hydee/lianou.service'
import './index.scss'

// type PageStateProps = {
// 	counter: {
// 		counter: number
// 		increment: Function
// 		decrement: Function
// 		incrementAsync: Function
// 	}
// }

type PageState = {
    list: any
}

interface Index {
    // props: PageStateProps
    state: PageState
}

@inject('cartStore')
@observer
class Index extends Component {
    config: Config = {
        navigationBarTitleText: '首页'
    }
    state = {
        list: ['西瓜霜喷剂']
    }

    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    handleTabChange(e) {
        console.log('handleTabChange', e)
    }
    render() {
        // const {
        // 	counter: { counter },
        // } = this.props
        // const { testState, mobileText, modalVisible } = this.state
        // console.log('mobileText', mobileText)
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
            <View className='index'>
                <view className='nav'>
                    <view className='nav-icon'>
                        <img className='nav-img' src={home_address_icon}></img>
                        <view className='info-text'>
                            {/* <Map></Map> */}
                        </view>
                        <view className='nav-search'>
                            <img className='nav-img' src={home_search_icon}></img>
                        </view>
                    </view>
                    <view className='nav-text'>
                        {/* <Tabs list={TabList}></Tabs> */}
                        <view className='right'>分类</view>

                    </view>
                </view>
                {/* <Map></Map> */}
                {/* <Carousel autoplay>
                    <view>
                        <img className='imgs' src={"https://images.ydjia.cn/ydjia-merchant-manager/888888/20201020/d8abcaa2cecf4639ae5c36ba75293f93.png"} alt="pic"></img>
                    </view>
                    <view>
                        <img className='imgs' src={"https://images.ydjia.cn/ydjia-merchant-manager/888888/20200916/19f50626de1c46e8a2428ccf5b49da96.png"} alt="pic"></img>
                    </view>
                </Carousel> */}
                <view className='container-box'>
                    <view>
                        <img className='container-img' src={aImg}></img>
                    </view>
                    <view className='container-box-right'>
                        <view className='container-name'>
                            西瓜霜
                        </view>
                        <view className='container-price-box'>
                            <span className='container-mark'>￥
                                <span className='container-prices'>19</span>
                            </span>
                            <img className='container-add' src={add} alt="addPic" ></img>
                        </view>
                    </view>
                </view>

                <img className='listPic' src={listPic} alt=''></img>
                <view className='card'>
                    <view className='card-item'>
                        <img className='imgs' src={aImg} alt="pic"></img>
                        <span className='name'>{this.state.list[0]}</span>
                        <view className='card-price-box '>
                            <span className='mark'>￥
                        <span className='prices'>19</span></span>
                            <img className='add' src={add} alt="addPic" ></img>

                        </view>
                    </view>
                    <view className='card-item'>
                        <img className='imgs' src={aImg} alt="pic"></img>
                        <span className='name'>{this.state.list[0]}</span>
                        <view className='card-price-box'>
                            <span className='mark'>￥
                        <span className='prices'>19</span></span>
                            <img className='add' src={add} alt="addPic"></img>
                        </view>
                    </view>
                </view>
                {/* <HdTabs
                    currentTab={1}
                    list={[
                        {
                            text: 'tab1',
                            id: 1,
                        },
                        {
                            text: 'tab2',
                            id: 2,
                        },
                    ]}
                    onChange={this.handleTabChange.bind(this)}
                /> */}
                {/* <HdNodata height={600} text='测试缺省文字' /> */}
            </View>
        )
    }
}

export default Index as ComponentType
