import './Basket.scss'
import CardForBasket from '../CardForBasket/CardForBasket';

import React from "react";

export default function Basket() {
    return (
    <div className='basket_background'>
        <div className='basket'>
            <div className="basket_main_contain">
                <div className='basket_header_contain'>
                    <div className="basket_header_contain_content">
                        <div className="basket_contain_header_text">
                            корзина
                        </div>
                        <div className="basket_contain_header_cansel">
                            <span className="material-symbols-outlined basket_contain_header_cansel_icon">
                                close
                            </span>
                        </div>
                    </div>
                    <CardForBasket/>
                </div>
                <div className="amount">
                    <div className="order_amount">сумма заказа</div>
                    <div className="cost_of_products">стоимость продуктов</div>
                </div>
            </div>
        </div>
    </div>
  )
}

