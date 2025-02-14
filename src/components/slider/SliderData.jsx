import heroone from '../../assets/heroone.png';
import herotwo from '../../assets/herotwo.png';
import herothree from '../../assets/herothree.png';
import Navbar from '../navbar/Navbar';
import { FirstHeroText, SecondHeroText, ThirdHeroText } from './Text';



export const slides = [
    {
        id: 1,
        background: heroone,
        nav: <Navbar />,
        text: <FirstHeroText />
    },
    {
        id: 2,
        background: herotwo,
        nav: <Navbar />,
        text: <SecondHeroText />
    },
    {
        id: 3,
        background: herothree,
        nav: <Navbar />,
        text: <ThirdHeroText />
    },
    
]