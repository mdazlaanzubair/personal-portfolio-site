import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center font-normal tracking-wider shadow-lg px-5 lg:px-16 py-5 bg-base-100">
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
