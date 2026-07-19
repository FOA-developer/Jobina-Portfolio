import ScrollStack, { ScrollStackItem } from '../Animations/ScrollStack'

const Gallery = ({img, img1, img2, img3, title}) => {
  return (
    <section className="bg-secondary flex flex-col justify-start px-4 md:px-12">
      <div>
        <h4 className="text-xs md:text-sm text-text-main font-semibold tracking-[0.1em] uppercase text-left mt-16 ">Gallery</h4>
        <h2 className="text-text-muted text-3xl font-semibold md:text-4xl pt-4">{title}</h2>
      </div>
      <ScrollStack
          useWindowScroll={true}
          itemDistance={90}
          stackPosition="18%"
          itemStackDistance={20}
          baseScale={0.9}
        >
          <ScrollStackItem>
            <img src={img} alt="Gallery Image 1" loading="lazy" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img src={img1} alt="Gallery Image 2" loading="lazy" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img src={img2} alt="Gallery Image 3" loading="lazy" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
          <ScrollStackItem>
            <img src={img3} alt="Gallery Image 3" loading="lazy" className="w-full h-full object-cover rounded-[40px]" />
          </ScrollStackItem>
      </ScrollStack>
    </section>
  )
}

export default Gallery;