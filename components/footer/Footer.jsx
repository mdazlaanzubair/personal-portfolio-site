import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center font-normal p-4 tracking-wider bg-base-100">
      <div>
        <p>
          Created by{" "}
          <Link
            href="/"
            className="link text-primary underline-offset-2 cursor-pointer font-semibold"
          >
            Muhammad Azlaan Zubair
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
