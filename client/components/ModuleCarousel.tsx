import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Module {
  icon: any;
  title: string;
  description: string;
  color: string;
  link: string;
}

interface ModuleCarouselProps {
  modules: Module[];
}

export default function ModuleCarousel({ modules }: ModuleCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle module

  const nextModule = () => {
    setActiveIndex((prev) => (prev + 1) % modules.length);
  };

  const prevModule = () => {
    setActiveIndex((prev) => (prev - 1 + modules.length) % modules.length);
  };

  const getModulePosition = (index: number) => {
    // Calculate position relative to activeIndex (center)
    // Always show all 5 modules in a circular arrangement
    const totalModules = 5;
    const relativeIndex = (index - activeIndex + totalModules) % totalModules;

    switch (relativeIndex) {
      case 0:
        return "center"; // Current active module
      case 1:
        return "right-1"; // Next module (right front)
      case 2:
        return "right-2"; // Right back (behind right-1)
      case 3:
        return "left-2"; // Left back (behind left-1)
      case 4:
        return "left-1"; // Previous module (left front)
      default:
        return "center";
    }
  };

  const getModuleStyles = (position: string) => {
    const baseStyles =
      "absolute transition-all duration-700 ease-in-out cursor-pointer hover:z-40";

    switch (position) {
      case "center":
        return `${baseStyles} left-1/2 top-0 transform -translate-x-1/2 z-30 scale-110 opacity-100`;
      case "left-1":
        // Mô đun bên trái gần (đè lên 1/2 mô đun 5)
        return `${baseStyles} left-1/2 top-8 transform -translate-x-1/2 -translate-x-32 sm:-translate-x-40 lg:-translate-x-48 z-25 scale-90 opacity-95 hover:scale-95`;
      case "left-2":
        // Mô đun 5 đè lên 1/2 mô đun 4 (xa hơn)
        return `${baseStyles} left-1/2 top-16 transform -translate-x-1/2 -translate-x-48 sm:-translate-x-60 lg:-translate-x-72 z-20 scale-75 opacity-85 hover:scale-80`;
      case "right-1":
        // Mô đun bên phải gần (đè lên 1/2 mô đun 2)
        return `${baseStyles} left-1/2 top-8 transform -translate-x-1/2 translate-x-32 sm:translate-x-40 lg:translate-x-48 z-25 scale-90 opacity-95 hover:scale-95`;
      case "right-2":
        // Mô đun 2 đè lên 1/2 mô đun 3 (xa hơn)
        return `${baseStyles} left-1/2 top-16 transform -translate-x-1/2 translate-x-48 sm:translate-x-60 lg:translate-x-72 z-20 scale-75 opacity-85 hover:scale-80`;
      default:
        return `${baseStyles} left-1/2 top-0 transform -translate-x-1/2 z-5 scale-70 opacity-0 pointer-events-none`;
    }
  };

  return (
    <div className="relative px-4 sm:px-8 lg:px-16">
      {/* Desktop/Tablet View */}
      <div className="hidden sm:block">
        <div className="relative h-96 lg:h-[28rem] flex items-center justify-center overflow-visible">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevModule}
            className="absolute left-2 lg:left-6 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md hover:bg-blue-50 dark:hover:bg-gray-700 shadow-xl hover:shadow-2xl transition-all border-blue-200/50 hover:border-blue-400/50 hover:scale-110"
          >
            <ChevronLeft className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextModule}
            className="absolute right-2 lg:right-6 z-50 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md hover:bg-blue-50 dark:hover:bg-gray-700 shadow-xl hover:shadow-2xl transition-all border-blue-200/50 hover:border-blue-400/50 hover:scale-110"
          >
            <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </Button>

          {/* Module Cards - Show all 5 modules */}
          {modules.map((module, index) => {
            const position = getModulePosition(index);
            const isCenter = position === "center";
            const isFront = position.includes("1") || isCenter;

            return (
              <div
                key={index}
                className={getModuleStyles(position)}
                onClick={() => !isCenter && setActiveIndex(index)}
              >
                <Card
                  className={cn(
                    "w-52 sm:w-60 lg:w-72 bg-white/98 dark:bg-gray-800/98 backdrop-blur-md border border-white/20 dark:border-gray-700/30 transition-all duration-500",
                    isCenter
                      ? "shadow-2xl ring-2 ring-blue-500/30 hover:ring-blue-500/50 hover:shadow-3xl"
                      : "shadow-xl hover:shadow-2xl cursor-pointer border-gray-200/50 dark:border-gray-600/30",
                    isFront && !isCenter && "hover:scale-105 hover:z-35 hover:ring-2 hover:ring-blue-400/30",
                    !isFront && !isCenter && "hover:scale-90 hover:opacity-95"
                  )}
                >
                  <CardContent
                    className={cn(
                      "text-center transition-all",
                      isCenter
                        ? "p-6 lg:p-8"
                        : isFront
                          ? "p-4 lg:p-5"
                          : "p-3 lg:p-4",
                    )}
                  >
                    <div
                      className={`inline-flex rounded-2xl ${module.color} mb-2 lg:mb-4 transition-all ${isCenter ? "p-4 lg:p-5 animate-pulse shadow-lg" : isFront ? "p-3 lg:p-4" : "p-2 lg:p-3"}`}
                    >
                      <module.icon
                        className={cn(
                          "transition-all",
                          isCenter
                            ? "h-8 w-8 lg:h-10 lg:w-10"
                            : isFront
                              ? "h-6 w-6 lg:h-8 lg:w-8"
                              : "h-5 w-5 lg:h-6 lg:w-6",
                        )}
                      />
                    </div>

                    <h3
                      className={cn(
                        "font-bold text-gray-900 dark:text-white transition-all",
                        isCenter
                          ? "text-lg lg:text-xl mb-3"
                          : isFront
                            ? "text-base lg:text-lg mb-2"
                            : "text-sm lg:text-base mb-1",
                      )}
                    >
                      {module.title}
                    </h3>

                    {isCenter && (
                      <>
                        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-4 lg:mb-6 leading-relaxed">
                          {module.description}
                        </p>
                        <Badge
                          variant="outline"
                          className={`mb-4 ${module.color.split(" ")[0]} border-current`}
                        >
                          Mô-đun {index + 1}
                        </Badge>
                        <div className="mt-4">
                          <Link to={module.link}>
                            <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all w-full hover:scale-105 group">
                              Khám phá ngay
                              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}

                    {isFront && !isCenter && (
                      <Badge
                        variant="outline"
                        className={`text-xs ${module.color.split(" ")[0]} border-current`}
                      >
                        Mô-đun {index + 1}
                      </Badge>
                    )}

                    {!isFront && !isCenter && (
                      <Badge
                        variant="outline"
                        className={`text-xs ${module.color.split(" ")[0]} border-current opacity-80`}
                      >
                        {index + 1}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Module Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-education-blue scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500",
              )}
            />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden">
        <div className="relative">
          <Card className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6 text-center">
              <div
                className={`inline-flex p-4 rounded-2xl ${modules[activeIndex].color} mb-4 animate-protective-pulse`}
              >
                {React.createElement(modules[activeIndex].icon, {
                  className: "h-8 w-8",
                })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {modules[activeIndex].title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {modules[activeIndex].description}
              </p>
              <Badge
                variant="outline"
                className={`mb-4 ${modules[activeIndex].color.split(" ")[0]} border-current`}
              >
                Mô-đun {activeIndex + 1}
              </Badge>
              <div className="flex space-x-3 mt-6">
                <Button
                  variant="outline"
                  onClick={prevModule}
                  className="flex-1"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Trước
                </Button>
                <Link to={modules[activeIndex].link} className="flex-1">
                  <Button className="bg-gradient-to-r from-education-blue to-education-purple hover:from-blue-700 hover:to-purple-700 text-white w-full">
                    Khám phá
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={nextModule}
                  className="flex-1"
                >
                  Sau
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-education-blue scale-125"
                  : "bg-gray-300 dark:bg-gray-600",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
