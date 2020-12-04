import React, { Component } from 'react'
import './Tabs.scss'

const Tabs = ({ list, ...restProps }) => {
    return (
        <div className='tab'>
            {list.map((item, index) => {
                return (
                    <span className='text'>{item.text}</span>
                )
            })
            }
        </div>
    )
}
export default Tabs