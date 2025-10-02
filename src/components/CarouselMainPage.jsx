
import { Carousel } from 'react-bootstrap'
import React from 'react'
import styles from "../css/CarouselWrapper.module.css"


function CarouselMainPage() {
  return (
    <div className='p-4 '>
        <div className={`${styles.carouselScope} rounded-lg overflow-hidden shadow-lg`}> 
  
     <Carousel fade>
      <Carousel.Item>
      
        <img
          className=' min-w-screen h-[700px] object-cover'
          src='https://offsel.net/media-en/wp-content/uploads/2023/12/AdobeStock_608534283-1-scaled.jpeg'
          alt='Carbon Credit Image'
        />
        <div className='absolute inset-0 bg-black/50'></div>
        <Carousel.Caption className=' absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4'>
       
          <h3 className='text-3xl md:text-5xl font-bold mb-4'>What Are Carbon Credits?</h3>
          <p className='max-w-2xl text-sm md:text-lg '>Carbon credits are tradable certificates that represent the reduction or removal of one metric ton of carbon dioxide (CO₂) or its equivalent greenhouse gases from the atmosphere. They are a vital tool in the fight against climate change, allowing organizations and individuals to offset their carbon footprint by supporting projects that reduce emissions, such as renewable energy, reforestation, or sustainable farming.
          </p>
        
        </Carousel.Caption>
      
      </Carousel.Item>
       <Carousel.Item>
       <img
       className='  min-w-screen h-[700px] object-cover' 
       src='https://i0.wp.com/studentwork.prattsi.org/infovis/wp-content/uploads/sites/3/2022/07/1-co2-1.png?resize=1024%2C723&ssl=1'
       alt = "Carbon Emissions"/>
       <div className='absolute inset-0 bg-black/50'></div>
        <Carousel.Caption className='absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4'>
          <h3 className='text-3xl md:text-4xl font-bold mb-4'>CO2 Emissions</h3>
          <p className='max-w-2xl text-sm md:text-lg'>Global warming is a vital problem in today’s world which is attributed in large proportion to the emissions of greenhouse gasses. In this lab I have attempted to create map visualizations that account for various quantities related to greenhouse gasses produced by the countries of the world.

          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className=' min-w-screen h-[700px] object-cover' 
        src='https://ec.europa.eu/eurostat/documents/4187653/15727800/martin33_AdobeStock_66652891_RV.jpg'
        alt='Effects of CO2'/>
       <div className='absolute inset-0 bg-black/50'></div>

        <Carousel.Caption className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4'>
          <h3 className='text-3xl md:text-5xl font-bold mb-4'>How does Co2 harm?</h3>
          <p className='max-w-2xl text-sm md:text-lg'>
            Carbon dioxide (CO2) is an important heat-trapping gas, also known as a greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and natural processes like volcanic eruptions. The first graph shows atmospheric CO2 levels measured by NOAA at Mauna Loa Observatory, Hawaii, since 1958. The second graph shows CO2 levels during Earth’s last three glacial cycles, as captured by air bubbles trapped in ice sheets and glaciers.
            </p>
          
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
    
    </div>
    </div>
  );
}

export default CarouselMainPage
