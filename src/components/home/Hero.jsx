import Searchbar from "../../shared/Searchbar";
import heroImage from "../../assets/airplane_taking_off.jpg";
import { useNavigate } from "react-router-dom";
import { useTour } from "../../contexts";

function Hero() {
  const { setSearch } = useTour();
  const navigate = useNavigate();

  return (
    <section className="relative">
      <div className="relative h-[75vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Airplane taking off"
          className="h-full w-full object-cover"
        />

        {/* fade into page */}
        <div
          className="
            absolute inset-x-0 bottom-0
            h-72
            bg-gradient-to-b
            from-transparent
            via-[var(--bg)]/60
            to-[var(--bg)]
          "
        />
      </div>

      <div className="relative -mt-20 z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-20 text-center">
          <h1
            className="
              text-5xl
              font-extrabold
              tracking-tight
              text-[var(--text)]
              md:text-6xl
            "
          >
            Discover Your
            <br />
            Next Adventure
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              text-[var(--text-muted)]
              md:text-xl
            "
          >
            Explore 500+ unforgettable experiences.
          </p>

          <div className="mt-10 w-full max-w-xl">
              <Searchbar onSubmit={() => navigate('/tours')}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;