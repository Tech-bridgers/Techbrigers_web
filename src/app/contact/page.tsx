import { PageHero } from "@/components/page-hero";
import {
  Mail,
  MapPin,
  Clock3,
  Share2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tech Bridgers",
  description: "Let's Build Something Useful.",
};

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@techbridgers.com",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "Lagos, Nigeria",
  },
  {
    icon: Clock3,
    title: "Hours",
    content: "Monday–Friday, 9am–6pm",
  },
  {
    icon: Share2,
    title: "Social",
    content: "LinkedIn • Instagram • X",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-slate-950">

      <PageHero
        eyebrow="The people behind the products"
        heading={
          <>
            Tell Us What You're Working On
            <br className="hidden sm:block" />
          </>
        }
        subtext="Share your idea, challenge, or next project milestone. We will respond with thoughtful questions and a practical next step."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 md:py-14 lg:px-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_0.95fr]">

            <div className="rounded-xl border border-[#e5e5e5] bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-[16px] font-bold tracking-[-0.02em] text-[#080808] sm:text-[17px]">
                Start a conversation
              </h2>

              <form className="mt-5 space-y-3.5">

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[9px] font-semibold text-[#111]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="h-7 w-full rounded-[6px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 text-[9px] text-[#111] outline-none transition focus:border-[#293994] focus:ring-1 focus:ring-[#293994]/10 placeholder:text-[#9ca3af]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[9px] font-semibold text-[#111]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="h-7 w-full rounded-[6px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 text-[9px] text-[#111] outline-none transition focus:border-[#293994] focus:ring-1 focus:ring-[#293994]/10 placeholder:text-[#9ca3af]"
                    />
                  </div>
                </div>


                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-[9px] font-semibold text-[#111]"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company or startup name"
                    className="h-7 w-full rounded-[6px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 text-[9px] text-[#111] outline-none transition focus:border-[#293994] focus:ring-1 focus:ring-[#293994]/10 placeholder:text-[#9ca3af]"
                  />
                </div>


                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-[9px] font-semibold text-[#111]"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="h-7 w-full rounded-[6px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 text-[9px] text-[#777] outline-none transition focus:border-[#293994] focus:ring-1 focus:ring-[#293994]/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="product-design">Product Design</option>
                    <option value="product-strategy">Product Strategy</option>
                  </select>
                </div>


                <div>
                  <label
                    htmlFor="details"
                    className="mb-1.5 block text-[9px] font-semibold text-[#111]"
                  >
                    Project details
                  </label>

                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    placeholder="Tell us about your goals, timeline, and what success looks like"
                    className="w-full resize-none rounded-[6px] border border-[#e5e5e5] bg-[#fafafa] px-2.5 py-2 text-[9px] leading-[1.5] text-[#111] outline-none transition focus:border-[#293994] focus:ring-1 focus:ring-[#293994]/10 placeholder:text-[#9ca3af]"
                  />
                </div>


                <button
                  type="submit"
                  className="mt-1 rounded-full bg-[#293994] px-4 py-2 text-[9px] font-semibold text-white transition-all hover:bg-[#202d80] hover:shadow-md active:scale-[0.97]"
                >
                  Send enquiry
                </button>
              </form>
            </div>

            <div className="rounded-xl border border-[#e5e5e5] bg-white p-2 shadow-sm">
              <div className="space-y-2">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex min-h-[48px] items-center gap-3 rounded-[6px] bg-[#f8f8f8] px-3 py-2"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[5px] bg-[#293994] text-white">
                        <Icon size={20} strokeWidth={2} />
                      </div>


                      <div>
                        <p className="text-[15px] font-semibold leading-none text-[#293994]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[11px] leading-tight text-[#222]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-16 lg:px-10">

          {/* Heading */}
          <div className="mb-7 text-center">
            <span className="inline-flex rounded-full bg-[#eef0fb] px-3 py-1 text-[13px] font-semibold text-[#293994] sm:text-[18px]">
              FAQ
            </span>

            <h2 className="mt-3 text-[20px] font-bold tracking-[-0.025em] text-[#080808] sm:text-[23px]">
              A few things clients often ask
            </h2>
          </div>


          <div className="mx-auto max-w-4xl">


            <div className="border-b border-[#dedede] py-4 first:border-t sm:py-5">
              <h3 className="text-[15px] font-bold text-[#080808] sm:text-[18px]">
                How quickly can we start?
              </h3>

              <p className="mt-2 text-[9px] leading-[1.5] text-[#747b8c] sm:text-[12px]">
                Most projects begin within two to four weeks after scope alignment.
              </p>
            </div>


            <div className="border-b border-[#dedede] py-4 sm:py-5">
              <h3 className="text-[15px] font-bold text-[#080808] sm:text-[18px]">
                What does a typical project cost?
              </h3>

              <p className="mt-2 text-[9px] leading-[1.5] text-[#747b8c] sm:text-[12px]">
                Investment depends on scope and complexity. We provide a clear
                proposal after discovery.
              </p>
            </div>

            <div className="border-b border-[#dedede] py-4 sm:py-5">
              <h3 className="text-[15px] font-bold text-[#080808] sm:text-[18px]">
                Do you work with early-stage startups?
              </h3>

              <p className="mt-2 text-[9px] leading-[1.5] text-[#747b8c] sm:text-[12px]">
                Yes. MVP strategy and delivery is one of our core service lines.
              </p>
            </div>

            <div className="border-b border-[#dedede] py-4 sm:py-5">
              <h3 className="text-[15px] font-bold text-[#080808] sm:text-[18px]">
                What happens after launch?
              </h3>

              <p className="mt-2 text-[9px] leading-[1.5] text-[#747b8c] sm:text-[12px]">
                We offer support, maintenance, analytics reviews, and ongoing
                product improvements.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}