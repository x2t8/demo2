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

interface ModuleCarouselNewProps {
  modules: Module[];
  onModuleChange?: (index: number) => void;
}

export default function ModuleCarouselNew({ modules, onModuleChange }: ModuleCarouselNewProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle module

  const nextModule = () => {
    const newIndex = (activeIndex + 1) % modules.length;
    setActiveIndex(newIndex);
    onModuleChange?.(newIndex);
  };

  const prevModule = () => {
    const newIndex = (activeIndex - 1 + modules.length) % modules.length;
    setActiveIndex(newIndex);
    onModuleChange?.(newIndex);
  };

  const handleModuleClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      onModuleChange?.(index);
    }
  };

  const getVisibleModules = () => {
    const visibleModules = [];
    
    // For desktop: show 5 modules
    // For tablet: show 5 modules  
    // For mobile: show 3 modules
    
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + modules.length) % modules.length;
      visibleModules.push({
        module: modules[index],
        originalIndex: index,
        position: i
      });
    }
    
    return visibleModules;
  };

  const getModuleStyles = (position: number, isMobile: boolean, isTablet: boolean = false) => {
    const baseStyles = "absolute top-1/2 transform transition-all duration-500 ease-in-out cursor-pointer";

    if (isMobile) {
      // Mobile: only show center (1 module)
      switch (position) {
        case 0: // center only
          return `${baseStyles} left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 scale-100 opacity-100`;
        default:
          return `${baseStyles} opacity-0 pointer-events-none scale-75`;
      }
    }

    if (isTablet) {
      // Tablet: show 3 modules (center + adjacent)
      switch (position) {
        case 0: // center - scale 1.0 (100%)
          return `${baseStyles} left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 scale-100 opacity-100`;
        case -1: // left - scale 0.9 (90%), behind center
          return `${baseStyles} left-[25%] -translate-x-1/2 -translate-y-1/2 translate-y-2 z-25 scale-90 opacity-90 hover:scale-95 hover:z-35`;
        case 1: // right - scale 0.9 (90%), behind center
          return `${baseStyles} right-[25%] translate-x-1/2 -translate-y-1/2 translate-y-2 z-25 scale-90 opacity-90 hover:scale-95 hover:z-35`;
        default:
          return `${baseStyles} opacity-0 pointer-events-none scale-75`;
      }
    }

    // Desktop: show all 5 modules with precise layering
    switch (position) {
      case 0: // center - scale 1.0 (100%), overlaps adjacent by 20%
        return `${baseStyles} left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 scale-100 opacity-100`;
      case -1: // left-1 - scale 0.9 (90%), behind center, slight push back
        return `${baseStyles} left-[30%] -translate-x-1/2 -translate-y-1/2 translate-y-2 z-25 scale-90 opacity-90 hover:scale-95 hover:z-35`;
      case 1: // right-1 - scale 0.9 (90%), behind center, slight push back
        return `${baseStyles} right-[30%] translate-x-1/2 -translate-y-1/2 translate-y-2 z-25 scale-90 opacity-90 hover:scale-95 hover:z-35`;
      case -2: // left-2 - scale 0.8 (80%), 60-70% opacity, deeper
        return `${baseStyles} left-[8%] -translate-x-1/2 -translate-y-1/2 translate-y-4 z-15 scale-80 opacity-65 hover:scale-85 hover:opacity-75`;
      case 2: // right-2 - scale 0.8 (80%), 60-70% opacity, deeper
        return `${baseStyles} right-[8%] translate-x-1/2 -translate-y-1/2 translate-y-4 z-15 scale-80 opacity-65 hover:scale-85 hover:opacity-75`;
      default:
        return `${baseStyles} opacity-0 pointer-events-none scale-70`;
    }
  };

  const getCardSize = (position: number, isMobile: boolean, isTablet: boolean = false) => {
    if (isMobile) {
      return "w-80"; // Single module takes full mobile width
    }

    if (isTablet) {
      return position === 0 ? "w-72" : "w-64";
    }

    // Desktop: consistent base sizes, scaling handled by CSS transform
    switch (position) {
      case 0: // center - base size for scale 1.0
        return "w-80 lg:w-88";
      case -1:
      case 1: // adjacent modules - base size for scale 0.9
        return "w-80 lg:w-88";
      case -2:
      case 2: // outer modules - base size for scale 0.8
        return "w-80 lg:w-88";
      default:
        return "w-80";
    }
  };

  const visibleModules = getVisibleModules();

  return (
    <div className="relative w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="relative h-[32rem] lg:h-[36rem] overflow-hidden">
          {/* Navigation Buttons - Larger with rounded background */}
          <Button
            variant="outline"
            size="lg"
            onClick={prevModule}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg hover:shadow-xl border-blue-200/40 hover:border-blue-400/60 hover:scale-105 transition-all"
          >
            <ChevronLeft className="h-6 w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-blue-400" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={nextModule}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg hover:shadow-xl border-blue-200/40 hover:border-blue-400/60 hover:scale-105 transition-all"
          >
            <ChevronRight className="h-6 w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-blue-400" />
          </Button>

          {/* Module Cards */}
          {visibleModules.map(({ module, originalIndex, position }) => {
            const isCenter = position === 0;
            const isAdjacent = Math.abs(position) === 1;
            const isOuter = Math.abs(position) === 2;

            return (
              <div
                key={`${originalIndex}-${position}`}
                className={getModuleStyles(position, false, false)}
                onClick={() => !isCenter && handleModuleClick(originalIndex)}
              >
                <Card
                  className={cn(
                    getCardSize(position, false, false),
                    "bg-white/98 dark:bg-gray-800/98 backdrop-blur-md border transition-all duration-500",
                    isCenter && "shadow-2xl ring-2 ring-blue-500/30 border-blue-200/50",
                    isAdjacent && "shadow-xl border-gray-200/40 hover:shadow-2xl hover:ring-2 hover:ring-blue-400/20",
                    isOuter && "shadow-lg border-gray-200/20 hover:shadow-xl" // Better shadow for outer modules
                  )}
                >
                  <CardContent className={cn(
                    "h-full flex flex-col text-center",
                    isCenter ? "p-8 lg:p-10" : isAdjacent ? "p-6 lg:p-8" : "p-4 lg:p-6"
                  )}>
                    {/* Icon - Centered and 10-15% larger */}
                    <div className={cn(
                      "flex justify-center mb-4"
                    )}>
                      <div className={cn(
                        "inline-flex rounded-2xl transition-all",
                        module.color,
                        isCenter ? "p-5 lg:p-6 shadow-lg" : isAdjacent ? "p-4 lg:p-5" : "p-3 lg:p-4"
                      )}>
                        <module.icon className={cn(
                          "transition-all",
                          isCenter ? "h-11 w-11 lg:h-14 lg:w-14" : isAdjacent ? "h-9 w-9 lg:h-11 lg:w-11" : "h-7 w-7 lg:h-9 lg:w-9"
                        )} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                      "font-bold text-gray-900 dark:text-white mb-3 leading-tight",
                      isCenter ? "text-2xl lg:text-3xl" : isAdjacent ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"
                    )}>
                      {module.title}
                    </h3>

                    {/* Description - only show for center and adjacent */}
                    {(isCenter || isAdjacent) && (
                      <p className={cn(
                        "text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1",
                        isCenter ? "text-base lg:text-lg" : "text-sm lg:text-base"
                      )}>
                        {module.description}
                      </p>
                    )}

                    {/* Badge - Centered with very subtle styling */}
                    <div className="flex justify-center mb-4">
                      <Badge
                        variant="outline"
                        className={cn(
                          "px-2 py-0.5 text-xs font-normal",
                          "text-gray-500 dark:text-gray-400",
                          "border-gray-300/40 dark:border-gray-600/40 bg-gray-50/50 dark:bg-gray-800/50"
                        )}
                      >
                        Mô-đun {originalIndex + 1}
                      </Badge>
                    </div>

                    {/* Action Button - only for center */}
                    {isCenter && (
                      <Link to={module.link}>
                        <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all w-full hover:scale-105 group">
                          Khám phá ngay
                          <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => handleModuleClick(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-blue-600 scale-125 shadow-lg"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              )}
            />
          ))}
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="relative h-[30rem] overflow-hidden">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="lg"
            onClick={prevModule}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl border-blue-200/40 hover:border-blue-400/60 hover:scale-105 transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={nextModule}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl border-blue-200/40 hover:border-blue-400/60 hover:scale-105 transition-all"
          >
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </Button>

          {/* Tablet Cards - show 3 modules */}
          {visibleModules.filter(({ position }) => Math.abs(position) <= 1).map(({ module, originalIndex, position }) => {
            const isCenter = position === 0;

            return (
              <div
                key={`tablet-${originalIndex}-${position}`}
                className={getModuleStyles(position, false, true)}
                onClick={() => !isCenter && handleModuleClick(originalIndex)}
              >
                <Card className={cn(
                  getCardSize(position, false, true),
                  "bg-white/98 backdrop-blur-md border transition-all duration-500",
                  isCenter ? "shadow-xl ring-2 ring-blue-500/30" : "shadow-lg border-gray-200/40"
                )}>
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="flex justify-center mb-4">
                      <div className={cn("inline-flex rounded-2xl", module.color, "p-4")}>
                        <module.icon className="h-9 w-9" />
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-bold text-gray-900 mb-3",
                      isCenter ? "text-xl" : "text-lg"
                    )}>
                      {module.title}
                    </h3>
                    {isCenter && (
                      <>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                          {module.description}
                        </p>
                        <div className="flex justify-center mb-4">
                          <Badge variant="outline" className="px-2 py-0.5 text-xs font-normal text-gray-500 border-gray-300/40 bg-gray-50/50">
                            Mô-đun {originalIndex + 1}
                          </Badge>
                        </div>
                        <Link to={module.link}>
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
                            Khám phá ngay
                          </Button>
                        </Link>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Tablet Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => handleModuleClick(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative h-96 overflow-hidden">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevModule}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronLeft className="h-4 w-4 text-blue-600" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextModule}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-8 h-8 rounded-full bg-white/95 backdrop-blur-md shadow-lg"
          >
            <ChevronRight className="h-4 w-4 text-blue-600" />
          </Button>

          {/* Mobile Cards - only show 1 (center) */}
          {visibleModules.filter(({ position }) => position === 0).map(({ module, originalIndex, position }) => {
            return (
              <div
                key={`mobile-${originalIndex}-${position}`}
                className={getModuleStyles(position, true, false)}
              >
                <Card className={cn(
                  getCardSize(position, true, false),
                  "bg-white/98 backdrop-blur-md border transition-all duration-500 shadow-xl ring-2 ring-blue-500/30"
                )}>
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="flex justify-center mb-4">
                      <div className={cn("inline-flex rounded-2xl", module.color, "p-4")}>
                        <module.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-xl">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                      {module.description}
                    </p>
                    <div className="flex justify-center mb-4">
                      <Badge variant="outline" className="px-2 py-0.5 text-xs font-normal text-gray-500 border-gray-300/40 bg-gray-50/50">
                        Mô-đun {originalIndex + 1}
                      </Badge>
                    </div>
                    <Link to={module.link}>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
                        Khám phá ngay
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {modules.map((_, index) => (
            <button
              key={index}
              onClick={() => handleModuleClick(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
