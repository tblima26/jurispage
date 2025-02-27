import React from 'react'
import Divider from '../Divider'
import CardRoot from './CardRoot'
import CardIcon from './CardIcon'
import { Banknote, Building, Factory, FolderCheck, HandCoins, Heart, Scale, Speech, UsersRound } from 'lucide-react'
import CardDescription from './CardDescription'


export default function Services() {
    return (
        <>
            <div className='flex flex-col font-cinzel text-4xl font-bold 
                text-slate-600 items-center gap-5 mt-26 '>
                Our Services
                <Divider />
            </div>
            <div className='grid grid-cols-4 gap-14 mt-10 mb-24'>
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
                <CardRoot>
                    <CardIcon icon={Banknote} />
                    <CardDescription
                        title='Bank & Financial'
                        description='Expertise in banking contracts, regulations, and financial matters.' />
                </CardRoot>
                <CardRoot>
                    <CardIcon icon={Building} />
                    <CardDescription
                        title='Corporate Law'
                        description='Legal support for mergers, acquisitions, and corporate compliance.' />
                </CardRoot>
                <CardRoot>
                    <CardIcon icon={Factory} />
                    <CardDescription
                        title='Industrial Law'
                        description='Solutions for labor negotiations and corporate industry defense.' />
                </CardRoot>
                <CardRoot>
                    <CardIcon icon={Heart} />
                    <CardDescription
                        title='Health Law'
                        description='Consulting on medical regulations and defending patients rights.' />
                </CardRoot>
            </div >
        </>
    )
}
