import { SlDocs, SlUser } from "react-icons/sl";

type TaskbarProps = {
  setIsAboutModalOpen: (value: boolean) => void;
  setIsProjectModalOpen: (value: boolean) => void;
};

export const Taskbar = ({
  setIsAboutModalOpen,
  setIsProjectModalOpen,
}: TaskbarProps) => {
  const items = [
    {
      name: "About me",
      icon: <SlUser />,
      click: setIsAboutModalOpen,
    },
    {
      name: "Projects",
      icon: <SlDocs />,
      click: setIsProjectModalOpen,
    },
    {
      name: "LinkedIn",
      img: "images/linkedin_logo.png",
      click: () =>
        window.open("https://linkedin.com/in/viktor-söderborg-3217a123b"),
      alt: "LinkedIn logo",
    },
    {
      name: "GitHub",
      img: "files/icon/github_icon.svg",
      click: () => window.open("https://github.com/voffiedev"),
      alt: "GitHub logo",
    },
  ];
  return (
    <nav className="absolute bottom-0 h-10 bar-bg left-0 right-0 flex justify-center items-center">
      <div className="w-fit flex items-center justify-center gap-5">
        {items.map((item, index) =>
          item.img ? (
            <div
              key={index}
              className="cursor-pointer hover-text"
              onClick={() => item.click()}
            >
              <img
                className="rounded-md w-6 h-6"
                src={item.img}
                alt={item.alt}
              />
              <span className="tooltip-text">{item.name}</span>
            </div>
          ) : (
            <p
              key={index}
              className="cursor-pointer hover-text"
              onClick={() => item.click(true)}
            >
              {item.icon && item.icon}
              <span className="tooltip-text">{item.name}</span>
            </p>
          )
        )}
      </div>
    </nav>
  );
};
