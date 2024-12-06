import React from 'react';
import iconone from "/public/images/icons/instracture.png"
import icontow from "/public/images/icons/graduate.png"
import iconthree from "/public/images/icons/member.png"
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const InfoSumarize = () => {
    const t=useTranslations()
    return (
        <div>
            <div className='container mx-auto py-24 px-6 lg:space-y-0 md:space-y-8 space-y-4 lg:flex md:flex sm:flex flex-wrap items-center justify-between gap-10'>
                {/* CARD ONE HERE */}
                <div className='xl:max-w-md lg:max-w-md md:max-w-md w-full mx-auto border-r-2 border-gray-200 '>
                   <div className='flex items-center justify-start gap-2'>
                   <Image src={iconone} width={30} height={30} alt="icon"/> <span className='text-[#195671] text-lg font-bold'>{t("16k Instructors")}</span>  </div>             
                    <p className='text-[#475467] text-sm mt-2'>
                    {t("16,000+ top class professionals instructors teaching here with excellent communication skills")} 
                    </p>
                 </div>
                {/* CARD TWO HERE */}
                <div className='xl:max-w-md lg:max-w-md md:max-w-md w-full mx-auto border-r-2 border-gray-200 '>
                   <div className='flex items-center justify-start gap-2'>
                   <Image src={icontow} width={30} height={30} alt="icon"/> <span className='text-[#027A48] text-lg font-bold'>{t("120k+ Graduates")}</span>  </div>             
                    <p className='text-[#475467] text-sm mt-2'>
                    {t("More than 120,000 students successfullycompleted their dream courses at Untitled UI")}  
                    </p>
                 </div>
                {/* CARD THREE HERE */}
                <div className='xl:max-w-md lg:max-w-md md:max-w-md w-full mx-auto '>
                   <div className='flex items-center justify-start gap-2'>
                   <Image src={iconthree} width={30} height={30} alt="icon"/> <span className='text-[#DC6803] text-lg font-bold'>{t("150k+ Members")}</span>  </div>             
                    <p className='text-[#475467] text-sm mt-2'>
                    {t("There are 150,000+ members are engaged with us around all over the world.")}
                    </p>
                 </div>
            </div>
        </div>
    );
};

export default InfoSumarize;