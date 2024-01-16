import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "./Projects.css";

export const Projects = () => {
  const [keenSlider, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "left",
        perView: 3,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <div>
      <section className="bg-gray-50 bg-opacity-100">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Dont just take our word for it...
              </h2>
              <p className="mt-4 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas veritatis illo placeat harum porro optio fugit a culpa
                sunt id!
              </p>

              {/* Slider Controls for desktop */}
              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                {/* Previous Slide Button */}
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  onClick={() => instanceRef.current.prev()}
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 rtl:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                {/* Next Slide Button */}
                <button
                  aria-label="Next slide"
                  onClick={() => instanceRef.current.next()}
                  id="keen-slider-next-desktop"
                  className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    className="h-5 w-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div ref={keenSlider} id="keen-slider" className="keen-slider">
                <div className="keen-slider__slide">
                  <a
                    href="#"
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
                    <div className="sm:flex sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          Building a SaaS product as a software developer
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-600">
                          By John Doe
                        </p>
                      </div>
                      <div className="hidden sm:block sm:shrink-0">
                        <img
                          alt="Paul Clapton"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="h-16 w-16 rounded-lg object-cover shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="max-w-[40ch] text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At velit illum provident a, ipsa maiores deleniti
                        consectetur nobis et eaque.
                      </p>
                    </div>
                    <dl className="mt-6 flex gap-4 sm:gap-6">
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">
                          Published
                        </dt>
                        <dd className="text-xs text-gray-500">
                          31st June, 2021
                        </dd>
                      </div>
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">
                          Reading time
                        </dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                      </div>
                    </dl>
                  </a>
                </div>
                <div className="keen-slider__slide">
                  <a
                    href="#"
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
                    <div className="sm:flex sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          Building a SaaS product as a software developer
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-600">
                          By John Doe
                        </p>
                      </div>
                      <div className="hidden sm:block sm:shrink-0">
                        <img
                          alt="Paul Clapton"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="h-16 w-16 rounded-lg object-cover shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="max-w-[40ch] text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At velit illum provident a, ipsa maiores deleniti
                        consectetur nobis et eaque.
                      </p>
                    </div>
                    <dl className="mt-6 flex gap-4 sm:gap-6">
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">
                          Published
                        </dt>
                        <dd className="text-xs text-gray-500">
                          31st June, 2021
                        </dd>
                      </div>
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">
                          Reading time
                        </dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                      </div>
                    </dl>
                  </a>
                </div>
                <div className="keen-slider__slide">
                  <a
                    href="#"
                    className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                  >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
                    <div className="sm:flex sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                          Building a SaaS product as a software developer
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-600">
                          By John Doe
                        </p>
                      </div>
                      <div className="hidden sm:block sm:shrink-0">
                        <img
                          alt="Paul Clapton"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="h-16 w-16 rounded-lg object-cover shadow-sm"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="max-w-[40ch] text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At velit illum provident a, ipsa maiores deleniti
                        consectetur nobis et eaque.
                      </p>
                    </div>
                    <dl className="mt-6 flex gap-4 sm:gap-6">
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">
                          Published
                        </dt>
                        <dd className="text-xs text-gray-500">
                          31st June, 2021
                        </dd>
                      </div>
                      <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">
                          Reading time
                        </dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                      </div>
                    </dl>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* slide controls */}
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              onClick={() => instanceRef.current.prev()}
              id="keen-slider-previous"
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              onClick={() => instanceRef.current.next()}
              id="keen-slider-next"
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
