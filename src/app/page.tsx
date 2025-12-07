const Home = () =>{
  return (
    <>
      <section>
        <h1>Home page</h1>
      </section>
      <section className="flex mx-auto justify-center">
        <div className="hover-3d">
          {/* content */}
          <figure className="w-60 rounded-2xl">
            <img
              src="https://img.daisyui.com/images/stock/card-1.webp?x"
              alt="Tailwind CSS 3D card"
            />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          {/* content */}
          <figure className="w-60 rounded-2xl">
            <img
              src="https://img.daisyui.com/images/stock/card-2.webp?x"
              alt="Tailwind CSS 3D hover"
            />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          {/* content */}
          <figure className="w-60 rounded-2xl">
            <img
              src="https://img.daisyui.com/images/stock/card-3.webp?x"
              alt="Tailwind CSS 3D hover"
            />
          </figure>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Home;