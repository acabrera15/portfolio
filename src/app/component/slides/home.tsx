import Link from "next/link";

const HomeSlide = () => {
  return (
    <div className="relative mx-auto px-20 max-w-[1000px] h-screen">
      <div className="absolute bottom-[30%] flex flex-col gap-5">
        <h1>Hello! I am Andrew and I am a Full Stack Developer!</h1>

        {/* TODO: add a subtext */}
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          labore voluptates quidem nostrum aliquam ex exercitationem eveniet
          similique? Porro odit saepe molestias dolor provident earum veniam
          libero animi assumenda itaque!
        </div>

        {/* TODO: add desciption */}
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, iste
          tempore inventore facere, perspiciatis ipsa natus dignissimos iusto
          sed quas expedita ad deserunt voluptatem fugit eum quam dolorum
          repudiandae error? Autem, facere incidunt! Debitis suscipit animi
          aspernatur vero quae non minima autem impedit quasi maxime, vel
          repellendus necessitatibus neque rerum? Harum impedit velit et est
          totam adipisci, iure expedita itaque. Fugit quod enim delectus! Culpa
          molestias iure nisi itaque officiis voluptas, atque animi facere
          praesentium sequi nihil doloribus vel fugit nobis perspiciatis nostrum
          totam soluta porro dolorum laudantium, consequatur pariatur. Inventore
          repellendus incidunt minus et eos magnam quas ipsam, culpa voluptas
          dignissimos assumenda est numquam id, consectetur eveniet quia
          architecto totam ullam! Commodi iusto totam architecto sequi nulla
          voluptatem inventore.
        </p>
        {/* Contact Button */}
        <Link
          href={"mailto:andrewdcabrera@gmail.com"}
          className="rounded-lg border w-fit h-fit px-4 py-1 hover:opacity-75"
        >
          Email Me
        </Link>
      </div>
    </div>
  );
};

export default HomeSlide;
