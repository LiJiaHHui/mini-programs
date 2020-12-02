import React from 'react'
import axios from 'axios'
class Mock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gData: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    ajax = (url) => {
        var p = new Promise(function (res, rej) {
            var xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return
                if (xhr.readyState == 4 && xhr.status == 200) {
                    //将返回json格式的内容转为对象
                    res(JSON.parse(xhr.response))
                } else {
                    rej('error')
                }
            }
            xhr.open('get', url)
            xhr.send(null)
        })
        return p
    }
    getData = () => {
        this.ajax('/getdata')
            .then(
                (res) => {
                    this.setState({
                        gData: res.message
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <img src={this.state.gData} />
                <button onClick={this.getData}>点击获取(Get)Mock数据</button>
            </div>
        )
    }
}
export default Mock
