import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './tabbar.scss'
import homeWhite from '../../assets/tabbar/homeWhite.png'
import shopWhite from '../../assets/tabbar/shopWhite.png'
import doctor from '../../assets/tabbar/doctor.png'
import cartWhite from '../../assets/tabbar/cartWhite.png'
import myWhite from '../../assets/tabbar/myWhite.png'
class Tabbar extends Component{
    toCart = () => {
        //跳转路由     
        this.props.history.push('/cart');
    }
    toMy=()=>{
        this.props.history.push('/my');
    }
    toShop=()=>{
        this.props.history.push('/shop');
    }
    toHome=()=>{
        this.props.history.push('/');
    }
    render(){
        return(
            <div className='tabbar'>
                    <div className='tabbar-main'>

                        <div className='tabbar-item' onClick={this.toHome.bind(this)}>
                            <img className='tabbar-icon' src={homeWhite}></img>
                            <div className='tabbar-text'>首页</div>
                        </div>
                        <div className='tabbar-item' onClick={this.toShop.bind(this)}>
                            <img className='tabbar-icon' src={shopWhite}></img>
                            <div className='tabbar-text'>门店</div>
                        </div>
                        <div className='tabbar-item'>
                            <img className='tabbar-icon' src={doctor}></img>
                            <div className='tabbar-text'>咨询</div>
                        </div>
                        <div className='tabbar-item' onClick={this.toCart.bind(this)}>
                            <img className='tabbar-icon' src={cartWhite}></img>
                            <div className='tabbar-text'>购物车</div>
                        </div>
                        <div className='tabbar-item' onClick={this.toMy.bind(this)}>
                            <img className='tabbar-icon' src={myWhite}></img>
                            <div className='tabbar-text'>我的</div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default withRouter(Tabbar)
