import React from 'react'
import Divider from '../Divider'
import CardRoot from './CardRoot'
import CardIcon from './CardIcon'
import { FolderCheck, HandCoins, Scale, Speech, UsersRound } from 'lucide-react'
import CardDescription from './CardDescription'


export default function Services() {
    return (
        <>
            <div className='flex flex-col font-cinzel text-4xl font-bold text-slate-600  gap-5'>
                Our Services
                <Divider />
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <CardRoot>
                    <CardIcon icon={HandCoins} />
                    <CardDescription
                        title='Capital Market'
                        description='Legal advice for investors, regulators, and businesses to protect your interests.' />
                </CardRoot>
                <CardRoot>
                    <CardIcon icon={Speech} />
                    <CardDescription
                        title='Personal Injury'
                        description='We help accident victims seek fair compensation efficiently.' />
                </CardRoot>
                <CardRoot>
                    <CardIcon icon={Scale} />
                    <CardDescription
                        title='Education Law'
                        description='Legal support for institutions and professionals to ensure compliance.' />
                </CardRoot>
                <CardRoot>
                    <CardIcon icon={UsersRound} />
                    <CardDescription
                        title='Family Law'
                        description='Guidance on divorce, custody, and other family matters with care.' />
                </CardRoot>
            </div>
        </>
    )
}
