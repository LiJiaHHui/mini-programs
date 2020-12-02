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
    getData = () => {
        axios.get('/getdata', {
            params: {
                image: ('200x100', '#FFF', 'Mock.js')
            }
        })
            .then((res) => {
                this.setState({
                    gData: res.data.message
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
