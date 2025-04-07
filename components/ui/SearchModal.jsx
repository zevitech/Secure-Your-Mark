"use client";

import React, { useState } from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import SearchingAnimation from "@/public/animations/searching-animation.json";
import SearchedAnimation from "@/public/animations/searched-animation.json";
import { BiSearch } from "react-icons/bi";
import HeroBtn from "../buttons/HeroBtn";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const SearchModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleOpen = () => {
    setIsSearching(true);
    setIsSearchComplete(false);
    onOpen();

    // Simulate search with a timeout
    setTimeout(() => {
      setIsSearching(false);
      setIsSearchComplete(true);
    }, 3000); // Set your desired delay in milliseconds
  };

  const handleClose = () => {
    onClose();
    setIsSearching(false);
    setIsSearchComplete(false);
  };

  return (
    <>
      <div className="flex-center gap-4 max-md:flex-col">
        <div className="relative w-[100%] max-md:w-full">
          <div className="w-full bg-[#F0f0f0] h-[60px] rounded-[10px] p-8 flex items-center justify-between text-start">
            <input
              type="text"
              className="w-full h-[28px] outline-none focus:outline-none bg-transparent text-black placeholder:text-[#141C2F] placeholder:text-opacity-35"
              placeholder="Search for trademark availability..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <BiSearch
              className="text-[#F25601] w-[40px] h-[40px] cursor-pointer hover:text-orange-700"
              onClick={handleOpen}
              disabled={!searchInput.trim()}
              type="submit"
            />
          </div>
          <div
            className={`max-md:gap-5 flex items-center justify-between gap-16 mt-10 max-md:mt-6
            `}
          >
            <HeroBtn />
            <Button
              as={Link}
              href="/contact-us"
              color="warning"
              variant="light"
              className="px-12 py-7 text-md text-[#F3F4F6] max-md:hidden font-inriaSerif font-[400] tracking-[0%] leading-[auto]"
              radius="sm"
            >
              {`> Contact Us`}
            </Button>
          </div>
        </div>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onClose={handleClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {isSearching ? "Searching..." : "Search Results"}
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-between">
                  <p className="text-black/60 text-[24px]">
                    {searchInput || "Trademark"}
                  </p>
                  {isSearchComplete ? (
                    <>
                      <DotLottiePlayer
                        src={SearchedAnimation}
                        className="w-[80px] h-[80px]"
                        autoplay
                        loop={isSearching}
                      />
                    </>
                  ) : (
                    <>
                      <DotLottiePlayer
                        src={SearchingAnimation}
                        className="w-[60px] h-[60px]"
                        autoplay
                        loop={isSearching}
                      />
                    </>
                  )}
                </div>
                <Divider />
                {isSearchComplete ? (
                  <p className="mb-4">
                    Congratulations! The trademark name &quot;
                    <span className="font-semibold">{searchInput}</span>
                    &quot; is available for registration.
                  </p>
                ) : (
                  <p className="mb-4 text-black/50">
                    Please wait while we check availability...
                  </p>
                )}
              </ModalBody>
              <ModalFooter>
                {/* <Button
                  className="bg-primary text-white bg-color-primary"
                  onPress={onClose}
                  disabled={isSearching}
                >
                  Trademark Now
                </Button> */}
                <PrimaryButton
                  size={`md`}
                  text={`Trademark Now`}
                  animate={false}
                />

                <Button
                  className="bg-danger text-white font-bold"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
