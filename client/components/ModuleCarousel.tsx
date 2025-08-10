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
      case 0: return "center";        // Current active module
      case 1: return "right-1";       // Next module (right front)
      case 2: return "right-2";       // Right back (behind right-1)
      case 3: return "left-2";        // Left back (behind left-1)
      case 4: return "left-1";        // Previous module (left front)
      default: return "center";
    }
  };

  const getModuleStyles = (position: string) => {
    const baseStyles = "absolute transition-all duration-600 ease-in-out cursor-pointer";

    switch (position) {
      case "center":
        return `${baseStyles} left-1/2 top-0 transform -translate-x-1/2 z-30 scale-110 opacity-100`;
      case "left-1":
        // Module 1 đè lên 1/2 module 5
        return `${baseStyles} left-1/2 top-6 transform -translate-x-1/2 -translate-x-28 sm:-translate-x-32 lg:-translate-x-36 z-25 scale-85 opacity-95`;
      case "left-2":
        // Module 5 đè lên 1/2 module 4 (ở xa hơn, nhỏ hơn)
        return `${baseStyles} left-1/2 top-12 transform -translate-x-1/2 -translate-x-40 sm:-translate-x-48 lg:-translate-x-56 z-20 scale-70 opacity-75`;
      case "right-1":
        // Module 1 đè lên 1/2 module 2
        return `${baseStyles} left-1/2 top-6 transform -translate-x-1/2 translate-x-28 sm:translate-x-32 lg:translate-x-36 z-25 scale-85 opacity-95`;
      case "right-2":
        // Module 2 đè lên 1/2 module 3 (ở xa hơn, nhỏ hơn)
        return `${baseStyles} left-1/2 top-12 transform -translate-x-1/2 translate-x-40 sm:translate-x-48 lg:translate-x-56 z-20 scale-70 opacity-75`;
      default:
        return `${baseStyles} left-1/2 top-0 transform -translate-x-1/2 z-5 scale-70 opacity-0 pointer-events-none`;
    }
  };

  return (
    <div className="relative px-4 sm:px-8 lg:px-16">
      {/* Desktop/Tablet View */}
      <div className="hidden sm:block">
        <div className="relative h-80 lg:h-96 flex items-center justify-center overflow-visible">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevModule}
            className="absolute left-4 lg:left-8 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextModule}
            className="absolute right-4 lg:right-8 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Module Cards */}
          {modules.map((module, index) => {
            const position = getModulePosition(index);
            const isCenter = position === "center";
            const isVisible = position !== "hidden";

            if (!isVisible) return null;

            return (
              <div
                key={index}
                className={getModuleStyles(position)}
                onClick={() => !isCenter && setActiveIndex(index)}
              >
                <Card
                  className={cn(
                    "w-64 lg:w-72 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-0 transition-all duration-300",
                    isCenter
                      ? "shadow-2xl ring-2 ring-education-blue/30 hover:shadow-3xl"
                      : "shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                  )}
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className={`inline-flex p-4 lg:p-5 rounded-2xl ${module.color} mb-4 lg:mb-6 transition-all ${isCenter ? 'animate-protective-pulse' : 'group-hover:scale-110'}`}>
                      <module.icon className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {module.title}
                    </h3>
                    {(isCenter || position.includes("1")) && (
                      <>
                        <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-4 lg:mb-6 leading-relaxed">
                          {module.description}
                        </p>
                        <Badge
                          variant="outline"
                          className={`mb-4 ${module.color.split(' ')[0]} border-current`}
                        >
                          Mô-đun {index + 1}
                        </Badge>
                      </>
                    )}
                    {!isCenter && position.includes("2") && (
                      <Badge
                        variant="outline"
                        className={`${module.color.split(' ')[0]} border-current`}
                      >
                        {index + 1}
                      </Badge>
                    )}
                    {isCenter && (
                      <div className="mt-4">
                        <Link to={module.link}>
                          <Button
                            className="bg-gradient-to-r from-education-blue to-education-purple hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all w-full"
                          >
                            Khám phá ngay
                            <ChevronRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
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
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
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
              <div className={`inline-flex p-4 rounded-2xl ${modules[activeIndex].color} mb-4 animate-protective-pulse`}>
                {React.createElement(modules[activeIndex].icon, { className: "h-8 w-8" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {modules[activeIndex].title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {modules[activeIndex].description}
              </p>
              <Badge 
                variant="outline" 
                className={`mb-4 ${modules[activeIndex].color.split(' ')[0]} border-current`}
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
                  : "bg-gray-300 dark:bg-gray-600"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
