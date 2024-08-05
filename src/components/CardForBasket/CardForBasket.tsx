import './CardForBasket.scss'

import React from "react";

export default function CardForBasket() {
    return (
        <div className='card_for_basket'>
            <div className="card_for_basket_contain">
                <div className="card_for_basket_contain_content">
                    <div className="card_for_basket_contain_img">
                        
                    </div>
                    <div className="card_for_basket_contain_text">
                        <div className="card_for_basket_contain_text_header">
                            <div className="card_for_basket_contain_text_disc">
                                ФУТБОЛКА
                            </div>
                            <div className="card_for_basket_contain_text_header">
                                HEADER BLA BLA bla bla bblaa
                            </div>
                        </div>
                        <div className='card_for_basket_contain_info'>
                            <div className="card_for_basket_contain_pieces">
                                5 pieces
                            </div>
                            <div className="card_for_basket_contain_price">
                                10 055 ₽
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>  
  )
}