import React from 'react'
import axios from 'axios'
// import QQMap from 'qqmap';
// import QMap from 'QMap';
// interface IOptions {
//     hostkey: string,
//     // [key: string]: any,
//     addressArr: string= '',
//     location: string= "28.222054,112.894945",
//     key: string= 'UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM',
//     referer: string="myapp"
// }
class mapRequest extends React.Component {
	// public options: IOptions

	constructor(props) {
        super(props);
		this.state={
            addressArr:'',
            location:"28.222054,112.894945",
            key:'UQPBZ-RCU36-K2YS3-EMV6Y-JI6JJ-3WBUM',
            referer:"myapp"
        }
	}
componentDidMount() {
    this.getData(this.options);
}


getData () {
    // this.initQQMap()
    // var options = {timeout: 1000};
    const {
        location,
        key,
        referer
    }=this.state
    // let {addressArr}=storeInfo
    // let QMap = window.QMap
    // let geolocation = new QMap.Geolocation()
    // geolocation.getLocation(showPosition, showErr);
    // function showPosition(position) {
    //     console.log(position)
    // };
    // function showErr() {
    //     console.log("err!!!!")
    // };

    axios.get("/api", {
        params: Object.assign({},{location,key,referer})
    })
        .then(res => {
            // var geolocation = new qq.maps.Geolocation();
            // console.log(geolocation)
            let data = res.data
            console.log(data.result.address)
                this.setState({
                    addressArr:data.result.address
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







