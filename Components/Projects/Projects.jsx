import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "./Projects.css";
import { baseUrl, projectsEndpoint } from "../../api";

function ProjectSectionHeader({ title }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight TitleText sm:text-4xl">
      {title}
    </h2>
  );
}

function ProjectSectionDesc({ desc }) {
  return <p className="mt-4 BodyText font-bold">{desc}</p>;
}

function ProjectCard({
  id,
  projectName,
  teamName,
  projectLogoUrl,
  projectDesc,
  teamMembers,
  techStack,
  projectUrl,
}) {
  return (
    <div className={`keen-slider__slide number-slide${id}  `}>
      <a
        href={projectUrl}
        className="ProjectCard m-auto relative block overflow-hidden rounded-lg border shadow-md border-rose-800  p-4 sm:p-6 lg:p-8 w-4/5 sm:w-[600px] lg:w-full"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-rose-300 via-blue-500 to-purple-600" />
        <div className="flex justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              {projectName}
            </h3>
            <p className="mt-1 text-xs font-medium text-rose-500">
              By {teamName}
            </p>
          </div>
          <div className=" sm:block sm:shrink-0">
            <img
              alt={teamName}
              src={projectLogoUrl}
              className="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="max-w-[40ch] text-sm font-normal text-white">
            {projectDesc}
          </p>
        </div>
        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-orange-600">
              Team Members
            </dt>
            <dd className="text-xs text-white">{teamMembers}</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-purple-600">Tech Stack</dt>
            <dd className="text-xs text-white">{techStack}</dd>
          </div>
        </dl>
      </a>
    </div>
  );
}

function DesktopSliderControls({ instanceRef }) {
  return (
    <div className="hidden lg:mt-8 lg:flex lg:gap-4" style={{ justifyContent: "space-evenly" }} >
      {/* Previous Slide Button */}
      <button
        aria-label="Previous slide"
        id="keen-slider-previous-desktop"
        onClick={() => instanceRef.current.prev()}
        className="rounded-full border-2  border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke={"currentColor"}
          className="h-5 w-5 rtl:rotate-180 text-rose-600"
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
        className="rounded-full border-2 border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          className="h-5 w-5 rtl:rotate-180"
          fill="none"
          strokeWidth="4"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

function SliderControls({ instanceRef }) {
  return (
    <div className="mt-8 flex justify-center gap-4 lg:hidden">
      <button
        aria-label="Previous slide"
        onClick={() => instanceRef.current.prev()}
        id="keen-slider-previous"
        className="rounded-full border-2 border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          className="h-5 w-5 -rotate-180 transform"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => instanceRef.current.next()}
        id="keen-slider-next"
        className="rounded-full border-2 border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    // Fetch the JSON file from the internet
    fetch(baseUrl + projectsEndpoint)
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
        setOptions({
          loop: true,
          slides: {
            origin: "auto",
            perView: 1,
            spacing: 32,
          },
          breakpoints: {
            "(min-width: 1024px)": {
              slides: {
                origin: "auto",
                perView: 1.75,
                spacing: 32,
              },
            },
          },
          slideChanged() {
            console.log("slide changed");
          },
        });
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(options, []);

  return (
    <div>
      <section className="ProjectsContainer">
        <div className="mx-auto  px-4 py-12 sm:px-6 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:lg:text-left m-auto">
              <ProjectSectionHeader title={"Global Game Jam 2023 Projects"} />
              <ProjectSectionDesc
                desc={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo placeat harum porro optio fugit a culpa sunt id!"
                }
              />
              <DesktopSliderControls instanceRef={instanceRef} />
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div ref={sliderRef} id="keen-slider" className="keen-slider">
                {projectData.map((project) => (
                  <ProjectCard
                    key={project.id} // Assuming each project has a unique identifier
                    id={project.id}
                    projectName={project.projectName}
                    teamName={project.teamName}
                    projectLogoUrl={project.projectLogoUrl}
                    projectDesc={project.projectDesc}
                    teamMembers={project.teamMembers.join(", ")}
                    techStack={project.techStack.join(", ")}
                    projectUrl={project.projectUrl}
                  />
                ))}
              </div>
            </div>
          </div>

          <SliderControls instanceRef={instanceRef} />
        </div>
      </section>
    </div>
  );
};
