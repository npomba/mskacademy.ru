import stls from '@/styles/components/general/GeneralHeaderTop.module.sass'
import cn from 'classnames'
import { TypeClassNames } from "@/types/index"
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconLogo } from '@/components/icons'
import { useState } from 'react'



const menu = [
    {
        title: 'Программы',
        href: '#'
    },
    {
        title: 'Об академии',
        href: '#'
    },
    {
        title: 'Дипломы',
        href: '#'
    },
]




type TypeGeneralHeaderTopProps = TypeClassNames

const GeneralHeaderTop = ({ classNames = [] }: TypeGeneralHeaderTopProps) => {


    return (
        <div className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <div className={stls.logo}>
                    <IconLogo />
                </div>

                <ul className={stls.menu}>
                    {
                        menu.map((item, idx) => {
                            return (
                                <li 
                                className={stls.item} 
                                key={idx}
                                >{item.title}</li>
                            )
                        })
                    }
                </ul>

                <div className={stls.phone}>
                    
                </div>

            </Wrapper>
        </div>
    )
}

export default GeneralHeaderTop