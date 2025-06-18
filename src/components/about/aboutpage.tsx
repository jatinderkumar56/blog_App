import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0C29] via-[#302b63] to-[#24243e] text-white">
      <main className="container mx-auto px-6 py-20">
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            About <span className="text-[#A78BFA]">BlogCode</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-[#A78BFA] font-semibold">BlogCode</span> is more than just a blog. It&rsquo;s a hub for curious minds to
            explore insightful articles, thought-provoking stories, and expert
            commentary on <span className="text-[#A78BFA]">technology, lifestyle, innovation</span>, and beyond.
          </p>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#A78BFA]">Our Mission</h2>
            <p className="text-gray-200">
              At <span className="text-[#A78BFA] font-medium">BlogCode</span>, our goal is to create a space where ideas flow
              freely, knowledge is shared widely, and readers walk away more
              informed and inspired than before. Whether you&rsquo;re a tech
              enthusiast, a creative soul, or a lifelong learner — there&rsquo;s
              something here for you.
            </p>

            <h2 className="text-2xl font-bold text-[#A78BFA] mt-10">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>In-depth articles and tutorials on emerging tech</li>
              <li>Personal growth and productivity content</li>
              <li>Expert interviews and guest insights</li>
              <li>Engaging stories and opinion pieces</li>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://plus.unsplash.com/premium_photo-1663835910909-bb85129b654f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0aWNsZSUyMHBvc3QlMjBibG9nfGVufDB8fDB8fHww"
              alt="About ByteCode"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </section>

        <section className="mt-24 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-[#A78BFA]">
            Join Thousands of Readers
          </h2>
          <p className="text-gray-300">
            Be part of a growing community of tech thinkers, writers, and readers who believe in the power of meaningful content.
          </p>
        </section>
      </main>
    </div>
  );
}
