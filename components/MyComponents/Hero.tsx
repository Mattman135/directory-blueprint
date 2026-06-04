const Hero = () => {
  return (
    <section className="bg-gray-500 p-10 text-center">
      <div className="join">
        <div>
          <label className="input validator join-item">
            <input type="text" placeholder="skriv din stad här" required />
          </label>
          <div className="validator-hint hidden">Skriv din stad</div>
        </div>
        <button className="btn btn-neutral join-item">Sök</button>
      </div>
    </section>
  )
}

export default Hero
