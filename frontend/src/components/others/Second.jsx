const Second = ({img, title,header, description, description1, cert}) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 px-8 mb-15 md:p-12 mt-18">
        <div className="flex flex-col items-start gap-4 overflow-hidden ">
          <h4 className="text-xs md:text-sm text-text-main font-semibold tracking-widest uppercase text-left ">overview</h4>
          <h2 className="text-text-muted text-3xl font-semibold md:text-4xl">What She Did</h2>
          <p className="text-text-muted-soft text-sm md:text-base leading-relaxed">{description} <br></br><br></br>{description1}</p>
          <div>
            <h4 className="text-text-muted-soft font-semibold">{header}</h4>
            {cert.map((c, index) => (
              <div className="flex flex-row justify-between border-b border-accent pt-4" key={index}>
                <h4 className="text-text-muted-soft text-sm md:text-base">- {c}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className=" justify-between items-start gap-2">
          <img src={img} alt={title} className="object-cover w-full h-full rounded-xl" />
        </div>
      </div>
    </section>
  )
}

export default Second;