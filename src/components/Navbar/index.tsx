import './index.scss'
import { useRouter } from 'next/navigation'

import React, { useState } from "react";
import GoogleIcon from '../UI/Button/googleIcon';
import Basket from '@/components/Basket'

export default function Navbar() {
    const router = useRouter()
    const [showBasket, setShowBasket] = useState(false)
    function handleShowBasket() {
        setShowBasket(true)
    }

    return (
        <div className='header'>
            {showBasket && <Basket state={setShowBasket} />}
            <div className="navigation_bar">

                <div className="header_logo">
                    <div className="logo_img"></div>
                    <div className="logo_text" onClick={() => router.push('/home')}>
                        <span className='logo_text_color'>b</span>
                        a
                        <span className='logo_text_color'>z</span>
                        a
                    </div>
                </div>
                <div className="header_search">
                    <input type="text" placeholder='Поиск'/>
                    <span className="material-symbols-outlined search">
                        search
                    </span>
                </div>
                <div className="header_navigation">
                   <GoogleIcon title='apps' action={() => router.push('/catalog')}/>
                   <GoogleIcon title='shopping_cart' action={() => handleShowBasket()}/>
                   <GoogleIcon title='account_circle' action={() => router.push('/account')}/>
                </div>
            </div>
    </div>
  )
}

