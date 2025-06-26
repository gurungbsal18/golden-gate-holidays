import { Button } from "@heroui/button";
import Image from "next/image";
import { aboutusSectionFeatureData } from "@/database/packageDb";

const AboutSection = () => {
  return (
    <div className="pt-32 pb-48 homepage-about-section">
      <div className="container grid lg:grid-cols-2 gap-16 items-center ">
        <span className="col-span-1">
          <Image
            src="/Images/Ghorepani.jpg"
            alt="Golden Gate Holidays"
            height={1920}
            width={1080}
            className="rounded-3xl"
          />
        </span>
        <span className="col-span-1 flex flex-col gap-4">
          <h4 className="title text-white text-center lg:text-left">
            About us
          </h4>
          <p className="text-white text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            quam mattis, malesuada nulla at, vulputate nisi. Integer iaculis
            dictum risus eu viverra. Nulla diam nisi, tincidunt nec sapien nec,
            congue congue ex. Aenean convallis ante et lorem sollicitudin
            venenatis. Proin quis fringilla nisi, vitae lobortis velit. Cras sit
            amet magna elit. Nulla facilisi. Sed ut eleifend ex. Aenean finibus
            eros sed nisi suscipit, et ultrices purus cursus. Ut sollicitudin
            iaculis massa, ac tempor tortor. Curabitur lobortis libero id
            lacinia eleifend. Quisque sem justo, efficitur ac mauris sed, rutrum
            dignissim neque. Sed congue bibendum erat, vitae efficitur odio
            tincidunt sit amet.
          </p>
          <div>
            <Button
              color="warning"
              size="lg"
              radius="sm"
              className="w-full lg:w-auto"
            >
              Read more
            </Button>
          </div>
        </span>
      </div>

      {/* About us section features */}

      {/* <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-16 items-center homepage-about-us-section-features"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-8 lg:px-48 items-center homepage-about-us-section-features">
        {aboutusSectionFeatureData.map((list, index) => {
          const Icon = list.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 md:p-16 flex flex-col gap-2 md:gap-4 items-center justify-center rounded-xl about-us-card text-center mx-auto"
            >
              {Icon ? (
                <Icon size={48} className="text-primary feature-icon" />
              ) : null}
              <p>{list.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSection;
