import { useEffect, useState } from "react";
import { IconType } from "react-icons";

type TechIconProps = {
  Icon?: IconType;
  imgSrc?: string;
  title: string;
  description: string;
};


export default function TechIcon({ Icon, imgSrc, title, description}: TechIconProps ) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const hoverClass = isDesktop ? "hover:scale-105 transition-transform" : "";

  const handleClick = () =>
    window.dispatchEvent(
      new CustomEvent("techModal-open", { detail: { title, description } })
    );

  return (
    <div
      className={`w-10 h-10 cursor-pointer ${hoverClass} flex items-center justify-center`}
      onClick={handleClick}
    >
      {Icon && <Icon className="w-full h-full" title={title} />}
      {imgSrc && <img src={imgSrc} alt={title} title={title} className="w-full h-full object-contain" />}
    </div>
  );
}
