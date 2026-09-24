import { PageHero } from "@/components/page-hero";
import { Compass, Network, Target, UsersRound, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tech Bridgers",
  description:
    "The people behind the products.",
};

export default function About() {
  return (

    <main className="min-h-screen bg-white text-slate-950">
      <PageHero
        eyebrow="The people behind the products"
        heading={
          <>
            We Bridge Ideas and Technologies,With Purpose
            <br className="hidden sm:block" />
          </>
        }
        subtext="Tech Bridgers is a digital product studio helping founders and growing businesses move from possibility to a product people value."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_1.05fr] md:gap-14 md:py-12 lg:px-10">


          <div className="max-w-[510px]">
            <p className="mb-3 text-[24px] font-bold uppercase tracking-[0.04em] text-[#273186] sm:text-[24px]">
              Our story
            </p>

            <h2 className="max-w-md text-[22px] font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl">
              Connecting ideas, design, and technology.
            </h2>

            <p className="mt-4 max-w-lg text-[14px] leading-[1.65] text-slate-500 sm:text-[17px]">
              Tech Bridgers is a digital product studio focused on helping
              businesses and startups bring their ideas to life. We combine
              thoughtful design with practical technology to build websites
              and mobile applications that are useful, scalable, and built
              for real people.
            </p>
          </div>


          <div className="overflow-hidden rounded-[14px] md:justify-self-end">
            <img
              src="/images/us.jpg"
              alt="Tech Bridgers team collaborating around a table"
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 md:py-12 lg:px-10">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

            <div className="min-h-[124px] rounded-[12px] bg-white px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] sm:px-6 sm:py-5">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#293994] text-white">
                <Network size={20} strokeWidth={2} />
              </div>

              <h2 className="text-[14px] font-bold leading-tight text-[#080808] sm:text-[24px]">
                Our mission
              </h2>

              <p className="mt-2 max-w-[500px] text-[11px] leading-[1.55] text-[#747b8c] sm:text-[13px]">
                Make high-quality digital product development clear,
                collaborative, and accessible.
              </p>
            </div>


            <div className="min-h-[124px] rounded-[12px] bg-white px-5 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] sm:px-6 sm:py-5">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#293994] text-white">
                <Network size={20} strokeWidth={2} />
              </div>

              <h2 className="text-[14px] font-bold leading-tight text-[#080808] sm:text-[24px]">
                Our vision
              </h2>

              <p className="mt-2 max-w-[500px] text-[11px] leading-[1.55] text-[#747b8c] sm:text-[13px]">
                A future where every strong idea can become a dependable digital
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 md:py-16 lg:px-10">


          <div className="mb-7 text-center">
            <span className="inline-flex rounded-full bg-[#eef0fb] px-3 py-1 text-[18px] font-semibold text-[#273186] sm:text-[25px]">
              Our Team
            </span>

            <h2 className="mt-3 text-[20px] font-bold tracking-[-0.025em] text-[#080808] sm:text-[23px]">
              A Multidisclipinary Team. One Shared Vision.
            </h2>

            <p className="mt-2 text-[12px] text-[#747b8c] sm:text-[16px]">
              Bringing Design, Strategy, and Technology together to create meaningful digital experience.
            </p>
          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">


            <div>
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="/adelaja-emmanuel.jpg"
                  alt="Adelaja Emmanuel"
                  className="aspect-[1.27/1] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-2">
                <h3 className="text-[13px] font-bold text-[#080808] sm:text-[18px]">
                  Adelaja Emmanuel
                </h3>

                <p className=" text-[10px] text-[#273186] sm:text-[14px]">
                  Product strategy lead
                </p>
              </div>
            </div>


            <div>
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="/sikiru-selim.jpg"
                  alt="Sikiru Selim"
                  className="aspect-[1.27/1] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-2">
                <h3 className="text-[13px] font-bold text-[#080808] sm:text-[18px]">
                  Sikiru Selim
                </h3>

                <p className="1 text-[10px] text-[#273186] sm:text-[14px]">
                  Design lead
                </p>
              </div>
            </div>


            <div>
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="/adesina-yusuf.jpg"
                  alt="Adesina Yusuf"
                  className="aspect-[1.27/1] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-2">
                <h3 className="text-[13px] font-bold text-[#080808] sm:text-[18px]">
                  Adesina Yusuf
                </h3>

                <p className=" text-[10px] text-[#293994] sm:text-[14px]">
                  Engineering lead
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 md:py-16 lg:px-10">


          <div className="mb-7 text-center">
            <span className="inline-flex rounded-full bg-[#eef0fb] px-3 py-1 text-[18px] font-semibold text-[#273186] sm:text-[25px]">
              Our Culture
            </span>

            <h2 className="mt-3 text-[20px] font-bold tracking-[-0.025em] text-[#080808] sm:text-[23px]">
              Values that guide the work
            </h2>
          </div>


          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">


            <div className="rounded-[12px] bg-white px-4 py-4 sm:min-h-[100px] sm:px-4">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#293994] text-white">
                <Compass size={20} strokeWidth={2} />
              </div>

              <h3 className="text-[15px] font-bold leading-tight text-[#080808] sm:text-[20px]">
                Clarity first
              </h3>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#747b8c] sm:text-[14px]">
                We turn complexity into focused product decisions.
              </p>
            </div>

            {/* Build together */}
            <div className="rounded-[12px] bg-white px-4 py-4 sm:min-h-[100px] sm:px-4">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#293994] text-white">
                <UsersRound size={20} strokeWidth={2} />
              </div>

              <h3 className="text-[15px] font-bold leading-tight text-[#080808] sm:text-[20px]">
                Build together
              </h3>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#747b8c] sm:text-[14px]">
                Close collaboration keeps every idea grounded.
              </p>
            </div>


            <div className="rounded-[12px] bg-white px-4 py-4 sm:min-h-[100px] sm:px-4">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#293994] text-white">
                <Target size={20} strokeWidth={2} />
              </div>

              <h3 className="text-[15px] font-bold leading-tight text-[#080808] sm:text-[20px]">
                Own the outcome
              </h3>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#747b8c] sm:text-[14px]">
                We care about lasting business value, not just launch day.
              </p>
            </div>


            <div className="rounded-[12px] bg-white px-4 py-4 sm:min-h-[100px] sm:px-4">
              <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#293994] text-white">
                <Zap size={20} strokeWidth={2} />
              </div>

              <h3 className="text-[15px] font-bold leading-tight text-[#080808] sm:text-[20px]">
                Keep improving
              </h3>

              <p className="mt-2 text-[14px] leading-[1.55] text-[#747b8c] sm:text-[14px]">
                Curiosity and craft shape every iteration.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}