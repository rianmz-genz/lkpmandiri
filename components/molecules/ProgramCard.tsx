import Image from 'next/image'
import React from 'react'
import Text from '../atoms/Text'
import { useRouter } from 'next/router';
interface ProgramCards{
    imageUrl: string
    title: string
    description: string
    meet: string
    month: string
    totalMember: string
}
const ProgramCard = ({
    imageUrl, 
    title, 
    description, 
    meet, 
    month, 
    totalMember
}: ProgramCards) => {
    const router = useRouter()
    const handleClick = () => {
        router.push("/class/detail")
    }
  return (
    <div className='w-full h-fit py-2'>
        <Image src={imageUrl} height={100} className='w-full' alt='Card Image' width={100} />
        <Text 
            textStyle='TitleFour'
            value={title}
        />
        <Text 
            textStyle='CardDescription'
            value={description}
        /> 
        <div className='w-full flex justify-between mt-4'>
            <div className='lg:w-8/12 w-6/12 relative'>
                <Image className='absolute left-0' src="/images/Ellipse 5.svg" width={30} height={30} alt="Profile" />
                <Image className='absolute left-4' src="/images/Ellipse 6.svg" width={30} height={30} alt="Profile" />
                <Image className='absolute left-8' src="/images/Ellipse 7.svg" width={30} height={30} alt="Profile" />
                <Image className='absolute left-12' src="/images/Ellipse 8.svg" width={30} height={30} alt="Profile" />
                <div className='w-[30px] h-[30px] rounded-full bg-crayolalight text-white absolute left-14 flex items-center justify-center'>
                    <Text 
                        textStyle='CardPlus'
                        value={totalMember}
                    />
                </div>
            </div>
            <div  onClick={handleClick} className='lg:w-8/12 w-6/12 flex justify-between'>
                <Text 
                    textStyle='ButtonText'
                    value={meet}
                />
                <Text 
                    textStyle='ButtonText'
                    value={month}
                />
            </div>
        </div>
    </div>
  )
}

export default ProgramCard
export type {ProgramCards}