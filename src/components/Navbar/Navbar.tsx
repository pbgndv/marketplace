import './Navbar.scss'
import { useRouter } from 'next/navigation'

import React from "react";

export default function Navbar() {
    const router = useRouter()
    return (
        <div className='header'>
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
                    <a href="#" onClick={() => router.push('/catalog')}>
                        <span className="material-symbols-outlined icon">
                            apps
                        </span>
                    </a>
                    <a href="#">
                        <span className="material-symbols-outlined icon">
                            shopping_cart
                        </span>
                    </a>
                    <a href="#" onClick={() => router.push('/account')}>
                        <span className="material-symbols-outlined icon">
                            account_circle
                        </span>
                    </a>
                </div>
            </div>
    </div>
  )
}
