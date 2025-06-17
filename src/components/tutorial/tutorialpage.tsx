import Link from "next/link";

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0C29] via-[#302b63] to-[#24243e] text-white">
      <main className="container mx-auto px-6 py-20">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Explore Our <span className="text-[#A78BFA]">Tutorials</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Learn at your own pace with hands-on tutorials in{" "}
            <span className="text-[#A78BFA]">Web Development</span>,{" "}
            <span className="text-[#A78BFA]">Programming</span>, and{" "}
            <span className="text-[#A78BFA]">Tech Tools</span>. Whether you're a
            beginner or looking to sharpen your skills — we've got you covered.
          </p>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Example Tutorial Card */}
          {[
            {
              title: "Build a Blog with Next.js",
              description: "Step-by-step guide to creating a blog using Next.js and Tailwind CSS.",
              image: "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
            },
            {
              title: "JavaScript Basics",
              description: "Master the fundamentals of JavaScript with simple, practical examples.",
              image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              title: "Deploy with Vercel",
              description: "Learn how to deploy your Next.js apps on Vercel effortlessly.",
              image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
            },
          ].map((tutorial, index) => (
            <Link  key={index} href={'/articles'}>
            <div

              key={index}
              className="bg-[#1c1a35] rounded-xl  overflow-hidden shadow-md transition hover:shadow-xl"
            >
              <img
    src={tutorial.image}
    alt={tutorial.title}
    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
  />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#A78BFA]">
                  {tutorial.title}
                </h3>
                <p className="text-gray-300 mt-2">{tutorial.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </section>

        <section className="mt-24 text-center">
          <p className="text-gray-400 text-sm">
            More tutorials coming soon. Stay curious!
          </p>
        </section>
      </main>
    </div>
  );
}
