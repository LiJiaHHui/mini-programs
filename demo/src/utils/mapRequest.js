import React from 'react'
import axios from 'axios'
// import QQMap from 'qqmap';
import { get } from 'mobx';
// interface IOptions{
//     hostkey:string,
//     [key:string]:any
// }
class mapRequest extends React.Component {
    // public options: IOptions

    constructor(props) {
        super(props)
        this.state = {
            // hostkey:,
            // url:"",
            addressArr: '',
            data: Object.assign({}, {
                // keyword: '长沙',
                // key: this.hostkey,
                // output:"jsonp"
                location: "28.222054,112.894945",
                key: 'UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM',
                get_poi: 1,
                // output: 'jsonp',
                // callback: 'jsonhandle',
            })
        }
    }
    componentDidMount() {
        this.getData()
        // this.getlan()
        // this.initQQMap();
    }

    //地图初始化的方法
    // initQQMap = () => {
    //     //设置中心坐标
    //     let tarLat = 39.90736606309809;
    //     let tarLng = 116.39774322509766;
    //     //初始化地图
    //     QQMap.init('UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM', () => {
    //         // var script = document.createElement('script');
    //         // script.type = 'text/javascript';
    //         // script.async = true;
    //         // script.src = 'https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js';
    //         // document.head.appendChild(script);  
    //         let qq = window.qq

    //         if (window) {
    //             qq = window.qq
    //         }
    //         // var geolocation = new qq.maps.Geolocation("UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM", "myapp");

    //         // 逆地址解析(经纬度到地名转换过程)
    //         let geocoder    
    //         geocoder = new qq.maps.Geocoder({
    //             complete: function(res) {
    //                 console.log(res)    
    //             }
    //         })
    //         console.log(geocoder)



    //         // var options = {
    //         //     timeout: 8000 //延时
    //         // };
    //         // var geocoder;
    //         // var latLng;
    //         // // 定位成功之后调用的方法
    //         // function showPosition(position) {
    //         //     let lat = position.lat;
    //         //     let lng = position.lng;
    //         //     // 逆地址解析(经纬度到地名转换过程)
    //         //     geocoder = new qq.maps.Geocoder({
    //         //         complete: function (res) {
    //         //             console.log(res);
    //         //             // 标志位置
    //         //             var center = new qq.maps.LatLng(lat, lng);
    //         //             var map = new qq.maps.Map(document.getElementById('container'), {
    //         //                 center: center,
    //         //                 zoom: 13
    //         //             });
    //         //             //创建标记
    //         //             var marker = new qq.maps.Marker({
    //         //                 position: center,
    //         //                 map: map
    //         //             });
    //         //             //添加到提示窗
    //         //             var info = new qq.maps.InfoWindow({
    //         //                 map: map
    //         //             });
    //         //             //获取标记的点击事件
    //         //             qq.maps.event.addListener(marker, 'click', function () {
    //         //                 info.open();
    //         //                 info.setContent('<div style="text-align:center;white-space:nowrap;margin:10px;">' + res.detail.address + '</div>');
    //         //                 info.setPosition(center);
    //         //             });
    //         //         }
    //         //     });
    //         //     latLng = new qq.maps.LatLng(lat, lng);
    //         //     geocoder.getAddress(latLng);
    //         // };
    //         // function showErr() {
    //         //     console.log('定位失败');
    //         // }
    //         // geolocation.getLocation(showPosition, showErr, options);


    //     })
    // }
    getlan = () => {
        function getLocation() {
            console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                pos => {
                    console.log(pos)
                    let lat = pos.coords.latitude,
                        lng = pos.coords.longitude;
                    // 获取到了用户当前位置的坐标
                    console.log(lng, lat);
                },
                err => {
                    console.log('error')
                })
        }
        getLocation()
        async function a() {
            const b = await getLocation()
            console.log(b)
        }
    }

    getData = () => {
        axios.get("/api", {
            params: this.state.data
        })
            .then(res => {
                let data = res.data
                console.log(data.result.address)
                this.setState(  {
                    addressArr: res.data.result.address
                })
                console.log(this.state.addressArr)
            })
            .catch(err => {
                console.log("catch", err);
            });

    };


    render() {
        return (
            <div>
                {this.state.addressArr}
            </div>
        )
    }
};


export default mapRequest