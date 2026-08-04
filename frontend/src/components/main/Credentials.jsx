import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import img3 from "../../assets/certs/badge.webp"
import img1 from "../../assets/certs/1_badge.webp"
import img4 from "../../assets/certs/un.png"
import img2 from "../../assets/certs/certificate.webp"
import img5 from "../../assets/certs/ics.webp"

const badges =[
  {
    link:"",
    img: img5
  },
  {
  link: "https://www.credly.com/badges/6f263103-e6ea-4c33-9a7c-028ab02f5a63/", 
  img: img3
},
{
  link:"https://www.credly.com/badges/6f263103-e6ea-4c33-9a7c-028ab02f5a63/",
  img: img1
},
{
  link:"https://www.credly.com/badges/28ba9039-5e96-463b-8a5e-b7a4646f812c/",
  img: img2
},
{
  link: "92ED1608380D75C9B8DB7CFD1956F71C42CF3E3C21EDBE640439D6F9683B6629aCtZMW5QWnZRV3N1MU8rRjl0Y3k4QjFmS00weG1kQnlxRFA2ZlVRWkxKNFV1MUlR",
  img: img4
}]

// Clone the last slide at the front and the first slide at the end so the
// track can keep sliding in one direction and loop seamlessly.
const slides = [badges[badges.length - 1], ...badges, badges[0]]

const Credentials = () => {
  // Index within `slides`. Start at 1 = the real first badge (index 0 is a clone).
  const [index, setIndex] = useState(1)
  const [animate, setAnimate] = useState(true)
  // Lock input while a slide transition is in flight so rapid clicks can't run
  // the index past the clones into empty space.
  const sliding = useRef(false)

  const next = useCallback(() => {
    if (sliding.current) return
    sliding.current = true
    setAnimate(true)
    setIndex((i) => i + 1)
  }, [])

  const prev = useCallback(() => {
    if (sliding.current) return
    sliding.current = true
    setAnimate(true)
    setIndex((i) => i - 1)
  }, [])

  // Jump to a real badge (0-based within `badges`).
  const goTo = useCallback((realIndex) => {
    if (sliding.current) return
    sliding.current = true
    setAnimate(true)
    setIndex(realIndex + 1)
  }, [])

  // When we land on a clone, snap (without animation) to the matching real slide.
  const handleTransitionEnd = useCallback(() => {
    sliding.current = false
    if (index === slides.length - 1) {
      // Landed on the leading-clone of the first badge -> jump to real first.
      setAnimate(false)
      setIndex(1)
    } else if (index === 0) {
      // Landed on the trailing-clone of the last badge -> jump to real last.
      setAnimate(false)
      setIndex(badges.length)
    }
  }, [index])

  // Re-enable animation on the frame after a snap so the next move animates.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => setAnimate(true))
      return () => cancelAnimationFrame(id)
    }
  }, [animate])

  // Auto-advance every 5s.
  useEffect(() => {
    const id = setInterval(() => {
      if (sliding.current) return
      sliding.current = true
      setAnimate(true)
      setIndex((i) => i + 1)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  // Which real badge is currently shown (for the dots).
  const activeDot = (index - 1 + badges.length) % badges.length

  return (
    <section id="credentials" className="bg-white mb-6">
      <h5 className="text-xs tracking-widest uppercase mb-6 font-medium text-text-main px-6 md:px-16 lg:px-24">Certifications</h5>
      <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 w-full md:max-w-[80%] px-6 md:px-16 lg:px-24 text-text-muted"> Certified to build at the frontier.</h2>
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-lg">
          {/* Track */}
          <div
            className={`flex ${animate ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((badge, i) => (
              <div key={i} className="w-full shrink-0">
                {badge.link ? (
                  <a href={badge.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={badge.img}
                      alt={`Credential ${i}`}
                      className="mx-auto h-auto w-full max-h-[70vh] object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={badge.img}
                    alt={`Credential ${i}`}
                    className="mx-auto h-auto w-full max-h-[70vh] object-contain"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous badge"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 shadow transition hover:bg-white sm:left-4"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next badge"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 shadow transition hover:bg-white sm:right-4"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {badges.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to badge ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeDot === i ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credentials
