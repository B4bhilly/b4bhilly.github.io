import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="md:w-[800px] md:mx-auto my-4 mx-4 dark:text-white">
      <Header />

      <section className="mt-8">
        {/* main */}

        <p className="md:text-6xl text-3xl font-semibold">
          Hello, I{"'"}m{" "}
          <span className="text-blue-400 dark:text-blue-500">Selikem</span>.
        </p>
        <img
          src="/geepaps-cover-image.png"
          alt="this is supposed to be a photo"
          className="rounded-lg my-4"
        />
        <p className="md:text-xl mb-2 font-semibold">
          producer, graphic designer, songwriter
        </p>

        <button className="md:text-xl mr-2 my-2 rounded-full items-center justify-center">
          <a
            href="../public/Benjamin Selikem Keteku.pdf"
            target="_blank"
            className="dark:bg-zinc-500 px-2 py-[0.25px] items-center justify-center rounded-full"
          >
            🔗 resume
          </a>
        </button>
        <button className="md:text-xl font-semibold">
          <a
            href="mailto:geepapsmadeit@gmail.com"
            className="bg-blue-300 dark:bg-blue-500 px-2 py-[0.5px] items-center justify-center rounded-full"
          >
            contact me
          </a>
        </button>
      </section>

      <section className="bg-blue-300 dark:bg-blue-500 py-2 mt-4 rounded-lg">
        <p className="font-semibold text-white mx-4 dark:bg-blue-500">
          check out my work
        </p>

        <div className="mx-4 my-2 w-fit">
          <a
            href="https://spotify.com"
            target="_blank"
            className="flex flex-row gap-2 items-center dark:bg-blue-500"
          >
            <SpotifyIcon />

            <p className="font-semibold dark:bg-blue-500">CliQ</p>
          </a>
        </div>
      </section>

      <div className="mt-4 rounded-lg">
        <p className="font-semibold py-2 px-4 rounded-lg dark:text-black bg-zinc-300 text-white ">
          projects
        </p>
      </div>
      <a href="https://github.com/geepaps" target="_blank">
        <p className="px-4 mt-2 hover:bg-zinc-500 hover:text-white rounded-lg border border-solid border-zinc-500 w-fit">
          see all projects
        </p>
      </a>

      <Footer />
    </main>
  );
}

export default App;

const SpotifyIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={50}
    height={50}
    color={"#FFF"}
    fill={"none"}
    className="text-black dark:text-white rounded-full"
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 12.0685C8.59944 11.6998 9.77639 11.5 11 11.5C13.0238 11.5 14.9199 12.0465 16.5488 13M18 10C16.1509 8.7383 13.9122 8 11.5 8C9.90307 8 8.38216 8.32358 7 8.90839M15.129 16C13.8927 15.3609 12.4894 15 11.0018 15C10.1819 15 9.38762 15.1096 8.63281 15.315"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);
