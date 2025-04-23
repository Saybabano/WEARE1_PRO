import React, { useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Linkedin,
  Youtube,
  Instagram,
  X,
} from "lucide-react";

const sliderCards1 = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Get Inside Most Iconic International Brands",
    desc: "From Jaguar, Toyota to Italy’s Ferrari, visit top international brands and gain first-hand exposure to business practices.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Build Your Network & Crack Jobs Abroad",
    desc: "The international exposure prepares you to pursue opportunities abroad in countries like Ireland, UAE & even USA.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Pitch to 100+ VCs & Angels",
    desc: "Build your startup through MVPs, GTM & PMF stages and raise funding via flagship Demo Day.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Dropshipping Challenge",
    desc: "Create commerce-ready websites and launch online businesses with zero inventory.",
  },
];

const sliderCards2 = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Graduate with a Running Business",
    desc: "Launch your startup while studying and build real customer traction.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Demo Day with Investors",
    desc: "Pitch your ideas to real investors during the final demo day.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Team Building & Collaboration",
    desc: "Learn how to lead teams and manage projects effectively.",
  },
];

const sliderCards3 = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "1:1 Mentorship from Industry Experts",
    desc: "Get personalized guidance from startup founders, VCs, and product leaders.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Win Grants & Seed Funding",
    desc: "Compete in startup challenges to secure non-dilutive grants and seed investments.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR099zZbBV8MlQZ1pET96DOEf4HmqYQsNrDlw&s",
    title: "Global Startup Ecosystem Access",
    desc: "Connect with global startup hubs and international innovation programs.",
  },
];

export default function LeadershipPage() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  const scroll = (ref, dir) => {
    if (ref.current) {
      const amount = 350;
      ref.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-12">
        Level-up Your Leadership
      </h1>

      {/* Responsive Grid Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-8">
          <div>
            <h3 className="text-xs uppercase text-yellow-400 tracking-widest">
              Related Links
            </h3>
            <ul className="mt-3 space-y-3 text-sm font-medium">
              <li className="hover:underline cursor-pointer hover:text-yellow-300">
                Download Brochure
              </li>
              <li className="hover:underline cursor-pointer hover:text-yellow-300">
                Explore Curriculum
              </li>
              <li className="hover:underline cursor-pointer hover:text-yellow-300">
                All about Admissions
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase text-yellow-400 tracking-widest">
              Socials
            </h3>
            <div className="flex space-x-4 mt-3 text-white">
              <X className="w-5 h-5 hover:text-yellow-300 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-yellow-300 cursor-pointer" />
              <Youtube className="w-5 h-5 hover:text-yellow-300 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-yellow-300 cursor-pointer" />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 space-y-20">
          {[
            {
              subheading: "Go Global with Unique International Immersions",
              desc: "Interact with global C-suite leaders during industrial visits and workshops in cities across the world, and participate in classes at prestigious B-schools.",
              cards: sliderCards1,
              ref: sliderRef1,
              heading: "Go Global with International Exposure",
            },
            {
              heading: "Graduate With a Running Business",
              desc: "Turn your ideas into real ventures. Build, launch, and scale your startup during the program.",
              cards: sliderCards2,
              ref: sliderRef2,
            },
            {
              heading: "Power Up with Mentorship & Funding",
              desc: "Access a network of mentors, investors, and global resources to take your startup to the next level.",
              cards: sliderCards3,
              ref: sliderRef3,
            },
          ].map((section, idx) => (
            <section key={idx}>
              {section.subheading && (
                <h3 className="text-base sm:text-lg font-medium mb-2 text-yellow-300">
                  {section.subheading}
                </h3>
              )}
              <h2 className="text-xl sm:text-2xl font-bold mb-3">{section.heading}</h2>
              <p className="text-sm text-gray-300 mb-6 max-w-3xl">{section.desc}</p>

              {/* Arrows */}
              <div className="flex justify-end gap-3 mb-4">
                <button
                  onClick={() => scroll(section.ref, "left")}
                  className="p-2 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ArrowLeft />
                </button>
                <button
                  onClick={() => scroll(section.ref, "right")}
                  className="p-2 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <ArrowRight />
                </button>
              </div>

              {/* Slider */}
              <div
                ref={section.ref}
                className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
              >
                {section.cards.map((card, i) => (
                  <div
                    key={i}
                    className="min-w-[260px] sm:min-w-[280px] md:min-w-[320px] bg-[#1E1E1E] rounded-xl flex-shrink-0 shadow-lg hover:shadow-yellow-400/20 transition-shadow"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-40 object-cover rounded-t-xl"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-yellow-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2">{card.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* Hide scrollbars */}
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}
