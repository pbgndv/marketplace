import './index.scss'
import CardForBasket from '../CardForBasket';

import React, { Dispatch, SetStateAction } from "react";
import GoogleIcon from '../UI/Button/googleIcon';
interface BasketProps{
    state : Dispatch<SetStateAction<boolean>>
}

export default function Basket({state} : BasketProps) {
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
                                <GoogleIcon title='close' action={() => state(false)}/>
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

