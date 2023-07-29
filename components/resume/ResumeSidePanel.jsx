"use client";

import Link from "next/link";
import { BiMailSend as EmailIcon } from "react-icons/bi";
import ResumeSocialLinks from "./ResumeSocialLinks";
import SocialContextProvider from "@/context/SocialContext";

const ResumeSidePanel = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start font-medium">
      <h1 className="text-2xl font-black mb-5">Bios</h1>

      <div className="flex flex-col justify-start mb-3">
        <p className="text-xs mb-0">Full Name</p>
        <p className="text-sm mt-0 font-bold">Muhammad Azlaan Zubair</p>
      </div>
      <div className="flex flex-col justify-start mb-3">
        <p className="text-xs mb-0">Date of birth</p>
        <p className="text-sm mt-0 font-bold">
          July 25<sup>th</sup>, 1996
        </p>
      </div>
      <div className="flex flex-col justify-start mb-3">
        <p className="text-xs mb-0">Staying at</p>
        <p className="text-sm mt-0 font-bold">Karachi, Sindh, Pakistan</p>
      </div>
      <div className="flex flex-col justify-start mb-3">
        <p className="text-xs mb-0">Nationality</p>
        <p className="text-sm mt-0 font-bold">Pakistan</p>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-xs mb-0">Native Language</p>
        <p className="text-sm mt-0 font-bold">Urdu</p>
      </div>

      <div className="divider my-3" />

      <div className="flex flex-col gap-1 justify-start mb-3">
        <p className="text-sm font-bold mb-3">My Favorites</p>
        <div className="flex flex-col justify-start mb-3">
          <p className="text-xs mb-0">Content Creators</p>
          <p className="text-xs mt-0 font-bold">
            <Link
              href="https://www.youtube.com/user/TechGuyWeb"
              target="_blank"
              title="Traversy Media"
              className="text-xs mt-0 font-bold hover:link-primary"
            >
              Brad Traversy
            </Link>
            <span className="mx-1">&amp;</span>
            <Link
              href="https://www.geeksforgeeks.org/"
              target="_blank"
              title="geeksforgeeks"
              className="text-xs mt-0 font-bold hover:link-primary"
            >
              Geeks for Geeks
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-start mb-3">
          <p className="text-xs mb-0">AI Tool</p>
          <p className="text-xs mt-0 font-bold">
            <Link
              href="https://bard.google.com/"
              target="_blank"
              title="Bard by Google"
              className="text-xs mt-0 font-bold hover:link-primary"
            >
              Bard
            </Link>
            <span className="mx-1">&amp;</span>
            <Link
              href="https://chat.openai.com/"
              target="_blank"
              title="Chat GPT by Open AI"
              className="text-xs mt-0 font-bold hover:link-primary"
            >
              Chat GPT
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-start mb-3">
          <p className="text-xs mb-0">Video Games</p>
          <p className="text-xs mt-0 font-bold">
            <Link
              href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
              target="_blank"
              title="By Valve"
              className="text-xs mt-0 font-bold hover:link-primary"
            >
              CS-GO
            </Link>
            <span className="mx-1">&amp;</span>
            <Link
              href="https://playvalorant.com/en-gb/"
              target="_blank"
              title="By Riot Games"
              className="text-xs mt-0 font-bold hover:link-primary"
            >
              Valorant
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-start mb-3">
          <p className="text-xs mb-0">Indoor Game</p>
          <Link
            href="https://www.chess.com/member/mdazlaanzubair"
            target="_blank"
            title="By Chess.com"
            className="text-xs mt-0 font-bold hover:link-primary"
          >
            Chess
          </Link>
        </div>
        <div className="flex flex-col justify-start mb-3">
          <p className="text-xs mb-0">Movie</p>
          <Link
            href="https://www.imdb.com/title/tt2084970/"
            target="_blank"
            title="Directed by Morten Tyldum"
            className="text-xs mt-0 font-bold hover:link-primary"
          >
            The Imitation Game
          </Link>
        </div>
        <div className="flex flex-col justify-start mb-3">
          <p className="text-xs mb-0">Series</p>
          <Link
            href="https://www.imdb.com/title/tt6468322/"
            target="_blank"
            title="Creator - Álex Pina"
            className="text-xs mt-0 font-bold hover:link-primary"
          >
            Money Heist
          </Link>
        </div>
        <div className="flex flex-col justify-start mb-3">
          <p className="text-xs mb-0">Pets</p>
          <p className="text-xs mt-0 font-bold">Cats &amp; Dog</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-xs mb-0">Color</p>
          <div className="flex flex-row gap-1 items-center justify-start">
            <p className="text-xs mt-0 font-bold p-2 bg-neutral text-primary">
              Blue
            </p>
            <p className="text-xs mt-0 font-bold p-2 bg-primary text-neutral">
              Green
            </p>
          </div>
        </div>
      </div>

      <div className="divider my-3" />

      <div className="flex flex-col gap-1 justify-start mb-3">
        <p className="text-sm font-bold mb-3">I can be found here</p>
        <div className="flex flex-row gap-3 justify-start items-center mb-2">
          <p className="text-lg font-bold">
            <EmailIcon />
          </p>
          <Link
            href="mailto:mdazlaan1996@gmail.com?subject=Hi%20There!&body=Hi%20Azlaan!%20Hope%20you're%20doin'%20well."
            className="text-xs hover:link-primary font-semibold"
          >
            mdazlaan1996@gmail.com
          </Link>
        </div>
        <SocialContextProvider>
          <ResumeSocialLinks />
        </SocialContextProvider>
      </div>
    </div>
  );
};

export default ResumeSidePanel;
