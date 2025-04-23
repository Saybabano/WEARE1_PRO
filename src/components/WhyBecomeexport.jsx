import React from "react";

const WhyBecomeMaster = () => {
  return (
    <section className="py-16 px-4 md:px-24 bg-white">
      <h4 className="text-xs text-gray-500 font-semibold tracking-widest uppercase mb-2">
        Nurturing Growth
      </h4>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Why Become a Master
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left - Text Content */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <img
              src="https://files.mastersunion.link/resources/svg/a+.svg"
              alt="Give back icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                To Give Back
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Refine your expertise and achieve greater recognition.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src="https://files.mastersunion.link/resources/svg/g-star.svg"
              alt="Spot talent icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                To Spot Talent
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Train and hire top talent for your business.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img
              src="https://files.mastersunion.link/resources/svg/g-assess.svg"
              alt="Network icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                To Network
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get access to the campus for professional endeavors and events.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div>
          <img
            src="https://www.eventsforgamers.com/wp-content/uploads/2020/07/MiddleEastGameCon.jpg"
            alt="Harvard Master"
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBecomeMaster;
