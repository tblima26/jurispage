import React from 'react'
import ProfileRoot from './Profiles/ProfileRoot'
import ProfileImg from './Profiles/ProfileImg'
import man01 from '../images/man01.png'
import man02 from '../images/man02.png'
import woman01 from '../images/woman01.png'
import ProfileText from './Profiles/ProfileText'
import ProfileSocial from './Profiles/ProfileSocial'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Profiles() {
    return (
        <div className='w-full flex gap-16 justify-center'>
            <ProfileRoot>
                <ProfileImg src={man01} alt="CEO" />
                <ProfileText name="Jhon Doe" occupation="CEO ADVOCACY" />
                <div className='flex gap-6'>
                    <ProfileSocial icon={Facebook} url="https://www.facebook.com/t.b.lima.1" />
                    <ProfileSocial icon={Instagram} url="https://www.instagram.com/tblima1" />
                    <ProfileSocial icon={Twitter} url="https://x.com/lordvarapal" />
                </div>
            </ProfileRoot>
            <ProfileRoot>
                <ProfileImg src={woman01} alt="CEO" />
                <ProfileText name="Sarah Holloway" occupation="Legal Assistant" />
                <div className='flex gap-6'>
                    <ProfileSocial icon={Facebook} url="https://www.facebook.com/t.b.lima.1" />
                    <ProfileSocial icon={Instagram} url="https://www.instagram.com/tblima1" />
                    <ProfileSocial icon={Twitter} url="https://x.com/lordvarapal" />
                </div>
            </ProfileRoot>
            <ProfileRoot>
                <ProfileImg src={man02} alt="Lawyer" />
                <ProfileText name="Michael Kensington" occupation="Attorney" />
                <div className='flex gap-6'>
                    <ProfileSocial icon={Facebook} url="https://www.facebook.com/t.b.lima.1" />
                    <ProfileSocial icon={Instagram} url="https://www.instagram.com/tblima1" />
                    <ProfileSocial icon={Twitter} url="https://x.com/lordvarapal" />
                </div>
            </ProfileRoot>
        </div>
    )
}
