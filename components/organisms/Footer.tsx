import React from 'react'
import Text from '../atoms/Text'
import NavLink from '../atoms/Navlink'
import Navbrand from '../atoms/Navbrand'

const Footer = () => {
  return (
    <footer className="mt-32 py-16 w-full bg-crayoladarkest text-white">
        <div className="flex flex-col gap-8 lg:flex-row w-11/12 mx-auto lg:gap-16 xl:gap-20">
          <div className="space-y-5 w-5/12">
            <Navbrand logo='Logo' />
            <div className="space-y-10">
                <Text
                  value={`Advance Your Career With Comprehensive Program Together With LKP Mandiri`}
                  textStyle="Description"
                />
              <Text
                value={`Copyright © ${new Date().getFullYear()} Develop By AdrianAjiSepta`}
                textStyle="Description"
              />
            </div>
          </div>
            <div className="space-y-5 w-3/12">
              <Text value="Contact" textStyle="FooterTitle" />
              <div className="space-y-[10px]">
                <Text 
                    value='lkpmandiri.batujajar@gmail.com'
                    textStyle='Description'
                />
                <Text 
                    value='Jl. Sukamaju No. 20 Desa Batujajar, Kec. Batujajar, Kab. Bandung Barat, Bandung, Indonesia 40561'
                    textStyle='Description'
                />
                <Text 
                    value='+62 264 2185 605'
                    textStyle='Description'
                />
              </div>
            </div>
            <div className="space-y-5 w-3/12">
              <Text value="Kelas" textStyle="FooterTitle" />
              <div className="space-y-48">
                <NavLink value="Kelas Aplikasi Perkantoran" href="/class/detail" />
                <NavLink value="Kelas Design Grafis" href="/class/detail" />
                <NavLink value="Kelas Fotografi" href="/class/detail" />
                <NavLink value="Kelas Menjahit" href="/class/detail" />
              </div>
            </div>
          </div>
      </footer>
  )
}

export default Footer