import { useSocialContext } from "@/context/SocialContext";
import Link from "next/link";
import * as FontAwesome6Icon from "react-icons/fa";

const ResumeSocialLinks = () => {
  const { socialLinks } = useSocialContext();

  return (
    socialLinks &&
    socialLinks.length > 0 &&
    socialLinks.map((socialLink, index) => {
      const { title, url, icon, username } = socialLink.fields;
      const SocialIcon = FontAwesome6Icon[icon];
      if (icon !== "null") {
        return (
          <div
            key={index}
            className="flex flex-row gap-3 justify-start items-center mb-2"
          >
            <p className="text-lg font-bold">
              <SocialIcon />
            </p>
            <Link
              href={url}
              target="_blank"
              className="text-xs hover:link-primary font-semibold"
              title={title}
            >
              {username}
            </Link>
          </div>
        );
      }
    })
  );
};

export default ResumeSocialLinks;
