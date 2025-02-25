import React, { ElementType } from 'react'

interface ProfileSocialProps {
    icon: ElementType
    url: string
}

export default function ProfileSocial({ icon: Icon, url }: ProfileSocialProps) {
    return (
        <a href={url} className='text-red-900'>
            <Icon />
        </a>
    )
}
