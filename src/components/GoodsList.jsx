import React from "react";
import { GoodsItem } from './GoodsItem'

const GoodsList = (props) => {
    const {goods = [], addToBascket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Ничего нет</h3>
    }
    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key={item.mainId} {...item} addToBascket={addToBascket}/>
            ))}
        </div>
    )
}
 
export {GoodsList}