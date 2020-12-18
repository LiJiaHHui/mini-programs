// import { observable } from 'mobx'

// const counter = observable({
//   counter: 0,
//   increment() {
//     this.counter++
//   },
//   decrement() {
//     this.counter--
//   },
//   incrementAsync() {
//     setTimeout(() => {
//       this.counter++
//     }, 1000)
//   }
// })
// export default counter


import { observable, action, computed } from 'mobx'

// import { makeObservable } from "mobx";
class CartStore {
    @observable cartData;
    @observable selectAll = true;
    constructor() {
        this.cartData = [
            { goodsId: 1, name: '西瓜霜喷剂', count: 1, prices: 19, selectOne: true },
            { goodsId: 2, name: '健胃消食片', count: 1, prices: 29, selectOne: true }
        ]
        // makeObservable(this)
    }
    // @action
    // getList = () => {
    //     this.data = this.cartData
    // }
    // 添加商品
    @action.bound
    add_goods = (item) => {
        this.cartData = this.cartData.push({ ...item, selectOne: true })
    }
    // 添加商品数量
    @action.bound
    add_num = (goodsId) => {
        let goodsdata = this.cartData
        goodsdata.forEach((item) => {
            if (goodsId === item.goodsId) {
                item.count++
            }
        })
    }
    // 减少商品
    @action.bound
    red_num = (goodsId) => {
        let goodsdata = this.cartData
        goodsdata.forEach((item) => {
            if (goodsId === item.goodsId) {
                if (item.count > 1) {
                    item.count--
                }
                else {
                    item.count = 1
                }
                // if(this.carData[index].count<=1){
                //     this.carData[index].count=1;
                // }else{
                //     this.carData[index].count-=1;
                // }
            }
        })
    }
    @action.bound
    select_one = (goodsId) => {
        // let goodsdata = this.cartData
        this.cartData.forEach((item, index) => {
            if (item.goodsId === goodsId) {
                item.selectOne = !item.selectOne
                // console.log(this.cartData[index].selectOne)
            }
        })
        let unselect = this.cartData.filter((item) => item.selectOne === false)
        this.selectAll = unselect.length > 0 ? false : true
        // console.log(unselect)
    }
    // console.log(this.cartData)
    // this.carData[index].selectOne = !item.selectOne
    // console.log(this.carData[index])
    //    console.log(goodsdata[index])
    @action.bound
    select_all = () => {
        let goodsdata = this.cartData
        goodsdata.forEach((item) => {
            item.selectOne = true
        })
        this.selectAll = true
    }
    @action.bound
    select_none = () => {
        let goodsdata = this.cartData
        goodsdata.forEach((item) => {
            item.selectOne = false
        })
        this.selectAll = false
    }
    @computed
    get sum_prices() {
        let goodsdata = this.cartData
        let sum = 0
        goodsdata.forEach((item, index) => {
            if (item.selectOne === true) {
                sum += item.prices * item.count
            }
        })
        return sum
    }
}
// export default new CartStore()
const cartStore = new CartStore()
export default cartStore