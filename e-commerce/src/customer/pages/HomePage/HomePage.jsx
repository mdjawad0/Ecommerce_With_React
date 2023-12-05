import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from "../../../Data/mens_kurta.js";
import {mens_shirt} from "../../../Data/mens_shirt.js";
import {mens_jeans} from "../../../Data/mens_jeans.js";
import {women_dress} from "../../../Data/womens_dress.js";

const HomePage = () => {
    return (
        <div>
            <MainCarosel/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarosel data={mens_shirt} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel data={mens_jeans} sectionName={"Men's Jeans"}/>
            <HomeSectionCarosel data={women_dress} sectionName={"Women's Jeans"}/>
            </div>

        </div>

    )
}

export default HomePage