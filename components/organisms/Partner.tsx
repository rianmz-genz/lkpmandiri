import React from 'react'
import Text from '../atoms/Text'
import LogoPartner, {LogoProps} from '../molecules/LogoPartner'

const Partner = () => {
    const PartnerList:LogoProps[] = [
        {
            imageSrc: "/images/Kemdikbud.svg",
            logoName: "Kemendikbud RI",
        },
        {
            imageSrc: "/images/Chaera.svg",
            logoName: "Chaera Clothing",
        },
        {
            imageSrc: "/images/CCH.svg",
            logoName: "PT. CCH Indonesia",
        },
        {
            imageSrc: "/images/Sansan.svg",
            logoName: "PT. Sansan Saudaratex Jaya",
        },
    ]
  return (
    <>
        <Text 
            textStyle='TitleTwo'
            value='Bekerja Sama Dengan'
        />
        <ul className='w-full flex mt-8'>
        {PartnerList.map((partner)=> (
            <li className='w-3/12'>
                <LogoPartner imageSrc={partner.imageSrc} logoName={partner.logoName} />
            </li>
        ))}
        </ul>
    </>
  )
}

export default Partner