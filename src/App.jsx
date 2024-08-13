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
          <span className="text-blue-400 dark:text-blue-500">Fiifi</span>.
        </p>

        <img
          src="/wall1.jpg"
          alt="this is supposed to be a photo"
          className="rounded-lg my-4 h-[300px] w-full object-cover"
        />

        <div>
          <p className="text-xl my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            deleniti molestiae, commodi iusto necessitatibus quam odit numquam
            inventore assumenda voluptates nisi dolores odio dignissimos debitis
            eos tempora fuga perspiciatis omnis.
          </p>
        </div>

        <button className="md:text-xl mr-2 my-2 rounded-full items-center justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="dark:bg-zinc-500 px-2 py-[0.25px] items-center justify-center rounded-full"
          >
            🔗 resume
          </a>
        </button>
        <button className="md:text-xl font-semibold">
          <a
            href="mailto:gormanshaphat@gmail.com"
            className="bg-blue-300 dark:bg-blue-500 px-2 py-[0.5px] items-center justify-center rounded-full"
          >
            contact me
          </a>
        </button>
      </section>

      <div className="mt-4 rounded-lg">
        <p className="font-semibold py-2 px-4 rounded-lg dark:text-black bg-zinc-300 text-white ">
          projects
        </p>
      </div>
      <a href="https://github.com/b4bhilly" target="_blank">
        <p className="px-4 mt-2 hover:bg-zinc-500 hover:text-white rounded-lg border border-solid border-zinc-500 w-fit">
          see all projects
        </p>
      </a>

      <Footer />
    </main>
  );
}

export default App;

