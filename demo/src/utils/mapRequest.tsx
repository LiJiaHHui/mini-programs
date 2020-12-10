import React from 'react'
import axios from 'axios'
// import QQMap from 'qqmap';
// import QMap from 'QMap';
interface IState {//接口函数不能有初始化表达
    // hostkey: string,
    // [key: string]: any,
    addressArr: string,
    location: string,
    key: string,
    referer: string
}

class mapRequest extends React.Component<{}, IState> {
    state = {
        addressArr: '',
        location: "28.222054,112.894945",
        key: 'UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM',
        referer: "myapp"
    }
    componentDidMount() {
        this.getData();
    }

    getData() {
        let QMap = (window as any).QMap//使用断言
        let geolocation = new QMap.Geolocation()
        geolocation.getLocation(showPosition, showErr);
        function showPosition(position) {
            console.log(position)
        };
        function showErr() {
            console.log("err!!!!")
        };

        axios.get("/api", {
            params: Object.assign({}, this.state.location, this.state.key, this.state.referer)
        })
            .then(res => {
                // var geolocation = new qq.maps.Geolocation();
                // console.log(geolocation)
                let data = res.data
                console.log(data.result.address)
                this.setState({
                    addressArr: res.data.result.address
                })
                // console.log(data)
            })
            .catch(err => {
                console.log("catch", err);
            });


    };


    render() {
        let { addressArr } = this.state
        return (
            <div>
                {addressArr}
            </div>
        )
    }
};


export default mapRequest







