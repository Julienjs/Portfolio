import React from 'react';
import UseDarkMode from '../hook/UseDarkMode';
import ProfilImg from'../assets/portrait-homme-blanc-isole_53876-40306.jpg'

const Header = () => {
    const [colorTheme, setTheme] = UseDarkMode()
    return (
        <header className='w-full mx-auto z-50 text-white text-lg flex justify-between items-center p-2 font-bold dark:text-white'>
            <div className='flex items-center justify-between w-36'> 
                <img src={ProfilImg} alt='profil' className='w-12 h-12 rounded-full object-cover'/>
            <h2>Portfolio.</h2>
            </div>
            <div onClick={() => setTheme(colorTheme)} className={`text-2xl ${colorTheme === 'dark' ? "text-black" : "moon_colors "}`}>
                <ion-icon name="moon-outline" ></ion-icon>
            </div>
        </header>
    );
};

export default Header;