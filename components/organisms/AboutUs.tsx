import React from 'react'
import SectionParagraph from '../molecules/SectionParagraph'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className='w-11/12 flex text-white items-center justify-between'>
        <SectionParagraph 
            title='LKP Mandiri berdedikasi tinggi untuk terus mengejar'
            titleStyle='TitleTwo'
            description='Berawal dari kursus rumahan hingga mampu melengkapi segala fasitilas yang dibutuhkan, LKP Mandiri berdedikasi tinggu untuk terus mengajarkan keterampilan kepada masyarakat'
            isButton
            buttonStyle='ButtonWhite'
            buttonValue='Cerita Kami'
        />
        <Image 
            src="/images/aboutimage.svg"
            width={100}
            height={100}
            alt="about image"
            className="w-5/12"
        />
    </div>
  )
}

export default AboutUs