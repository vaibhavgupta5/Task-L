"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState("aboutme");
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleImages(1);
      } else {
        setVisibleImages(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === "string") {
          setImages([...images, e.target.result]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, images.length - visibleImages);
    setCurrentImageIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <div className="min-h-screen bg-linear-to-b p-4 lg:p-8 lg:px-12 from-[#373E44] to-[#191B1F] flex">
      <div className="hidden lg:block lg:w-1/2"></div>

      <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 lg:gap-4">
        <div className="bg-[#363C43] p-4 lg:p-6 rounded-3xl shadow-2xl overflow-hidden flex w-full">
          <div className="w-[12%] hidden lg:flex items-start pt-4 ">
            <img src="/frame.png" alt=""></img>
          </div>

          <div className="w-full lg:w-[80%] flex flex-col items-center">
            <div
              className="flex items-center justify-between rounded-[23px] bg-[#171717] px-2 py-2 shadow-inner mt-1 w-full lg:w-[614px] h-auto lg:h-[62px]"
              style={{
                boxShadow: "inset 0px 4.96px 12.4px 2.48px #00000040",
              }}
            >
              <div className="flex flex-col lg:flex-row gap-1 w-full">
                {["About Me", "Experiences", "Recommended"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() =>
                      setActiveTab(tab.toLowerCase().replace(" ", ""))
                    }
                    className={`md:w-[195px]  cursor-pointer h-[49px] rounded-[16px] font-[500] text-[18px] leading-[16.12px] px-6 py-[10px] transition-all relative overflow-hidden ${
                      activeTab === tab.toLowerCase().replace(" ", "")
                        ? "text-white bg-[#28292F] shadow-[13.49px_16.87px_67.47px_8.43px_#0A0A0A,_-8.43px_-16.87px_50.6px_-16.87px_#485B71]"
                        : "text-gray-400 hover:text-white before:absolute before:content-[''] before:inset-y-0 before:left-0 before:w-0 before:bg-gradient-to-r before:from-[#191B1F] before:to-[#373e4446] before:transition-all before:duration-500 hover:before:w-full"
                    }`}
                  >
                    <span className="relative z-10">{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 w-full">
              {activeTab === "aboutme" && (
                <div className="space-y-5">
                  <p className="text-[#969696] text-[20px] font-[400] leading-[100%] font-[Plus Jakarta Sans]">
                    {
                      "   Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now."
                    }
                    <br />
                    <br />

                    {
                      "   I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a..."
                    }
                  </p>
                </div>
              )}

              {activeTab === "experiences" && (
                <div className="space-y-5">
                  <p className="text-[#969696] text-[20px] font-[400] leading-[100%] font-[Plus Jakarta Sans]">
                    {
                      "   Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now."
                    }
                    <br />
                    <br />

                    {
                      "   I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a..."
                    }
                  </p>
                </div>
              )}

              {activeTab === "recommended" && (
                <div className="space-y-5">
                  <p className="text-[#969696] text-[20px] font-[400] leading-[100%] font-[Plus Jakarta Sans]">
                    {
                      "   Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now."
                    }
                    <br />
                    <br />

                    {
                      "   I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a..."
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="w-[10%] hidden lg:flex items-center justify-end pt-4">
            <div
              className="w-[8px] h-[64px] rounded-[8px]"
              style={{
                background:
                  "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)",
                boxShadow: "4px 4px 4.9px 0px #00000040",
              }}
            />
          </div>
        </div>

        <div
          className="
  w-11/12 lg:w-[612px]
  h-[4px]
  rounded-[2.46px]
  shadow-[0px_4px_4px_0px_#00000054]
  backdrop-blur-[9.84px]
  bg-[linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))]
"
        />

        <div className="bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066] w-full w-full h-auto lg:h-[330px] flex p-4 lg:p-6 items-start overflow-hidden">
          <div className="w-[6%] hidden lg:flex items-start pt-4">
            <img src="/frame.png" alt=""></img>
          </div>

          <div className="w-full flex flex-col ">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0 w-full mb-4">
              <div className="flex items-center justify-between rounded-[20px] bg-[#171717] shadow-[inset_0px_4px_10px_2px_#00000040] px-6 lg:px-12 py-3 h-auto lg:h-[62px]">
                <div className="flex items-center gap-3">
                  <h2 className="text-white text-lg font-semibold">Gallery</h2>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={handleAddImage}
                  className="flex gap-2 px-4 py-3 lg:px-6 lg:py-4 bg-[#363C43] text-white text-sm font-medium rounded-full 
                  shadow-neumorph-inner
                hover:shadow-neumorph transition-all cursor-pointer"
                >
                  <Plus size={14} />
                  ADD IMAGE
                </button>

                <div className="flex gap-3">
                  <button
                    onClick={handlePrevious}
                    disabled={currentImageIndex === 0}
                    className={`w-[45px] h-[45px] rounded-full flex items-center justify-center 
                    bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)]
                    shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]
                    hover:scale-105 transition-all cursor-pointer
                    ${
                      currentImageIndex === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <ArrowLeft className="text-[#6F787C] w-[18px] h-[18px]" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={
                      currentImageIndex >=
                      Math.max(0, images.length - visibleImages)
                    }
                    className={`w-[45px] h-[45px] rounded-full flex items-center justify-center 
                    bg-[linear-gradient(139.14deg,#303439_12.4%,#161718_94.96%)]
                    shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]
                    hover:scale-105 transition-all cursor-pointer
                    ${
                      currentImageIndex >=
                      Math.max(0, images.length - visibleImages)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <ArrowRight className="text-[#6F787C] w-[18px] h-[18px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-4 py-8"
                style={{
                  transform: `translateX(calc(-${currentImageIndex} * (100% + 1rem) / ${visibleImages}))`,
                }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-2xl overflow-hidden bg-[#171717] shadow-lg 
                    hover:shadow-xl hover:scale-115 hover:translate-x-2 hover:z-50 hover:rotate-[-4deg] 
                    transition-all duration-500 ease-in-out"
                    style={{
                      width: `calc((100% - (${
                        visibleImages - 1
                      }) * 1rem) / ${visibleImages})`,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-[10%] hidden lg:flex items-end justify-end pt-4">
            <div
              className="w-[8px] h-[64px] rounded-[8px]"
              style={{
                background:
                  "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)",
                boxShadow: "4px 4px 4.9px 0px #00000040",
              }}
            />
          </div>
        </div>

        <div
          className="
  w-11/12 lg:w-[612px]
  h-[4px]
  rounded-[2.46px]
  shadow-[0px_4px_4px_0px_#00000054]
  backdrop-blur-[9.84px]
  bg-[linear-gradient(180deg,rgba(40,40,40,0.1)_0%,rgba(248,248,248,0.1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))]
"
        />
      </div>
    </div>
  );
}
