import React, { useState, useEffect } from "react";
import {
  Shield,
  Heart,
  Brain,
  Scale,
  BookOpen,
  X,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProgressProps {
  currentPage: string;
}

export default function LearningProgress({ currentPage }: ProgressProps) {
  const [progress, setProgress] = useState(0);
  const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set());
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const learningModules = [
    {
      path: "/",
      icon: BookOpen,
      title: "Khởi đầu hành trình",
      color: "text-blue-600",
    },
    {
      path: "/scam-types",
      icon: Shield,
      title: "An toàn số",
      color: "text-red-600",
    },
    {
      path: "/digital-ethics",
      icon: Heart,
      title: "Đạo đức số",
      color: "text-purple-600",
    },
    {
      path: "/ai-safety",
      icon: Brain,
      title: "AI An toàn",
      color: "text-blue-600",
    },
    {
      path: "/digital-law",
      icon: Scale,
      title: "Pháp luật số",
      color: "text-indigo-600",
    },
    {
      path: "/digital-skills",
      icon: BookOpen,
      title: "Kỹ năng số",
      color: "text-green-600",
    },
  ];

  useEffect(() => {
    // Load visited pages and visibility from localStorage
    const saved = localStorage.getItem("learningProgress");
    const hiddenUntil = localStorage.getItem("progressHiddenUntil");

    if (saved) {
      setVisitedPages(new Set(JSON.parse(saved)));
    }

    // Check if user has hidden the progress temporarily
    if (hiddenUntil) {
      const hiddenTime = parseInt(hiddenUntil);
      const now = Date.now();
      if (now < hiddenTime) {
        setIsVisible(false);
      }
    }
  }, []);

  useEffect(() => {
    // Add current page to visited
    if (currentPage) {
      const newVisited = new Set(visitedPages);
      newVisited.add(currentPage);

      // Only update if there's actually a change
      if (newVisited.size !== visitedPages.size) {
        setVisitedPages(newVisited);

        // Save to localStorage
        localStorage.setItem(
          "learningProgress",
          JSON.stringify(Array.from(newVisited)),
        );

        // Calculate progress
        const progressPercentage =
          (newVisited.size / learningModules.length) * 100;
        setProgress(progressPercentage);
      }
    }
  }, [currentPage]);

  const getCurrentModuleIndex = () => {
    return learningModules.findIndex((module) => module.path === currentPage);
  };

  const getProgressMessage = () => {
    const completed = visitedPages.size;
    const total = learningModules.length;

    if (completed === total) {
      return "🎉 Chúc mừng! Bạn đã hoàn thành hành trình an toàn số!";
    } else if (completed >= total * 0.8) {
      return "💪 Gần xong rồi! Bạn đang bảo vệ bản thân rất tốt!";
    } else if (completed >= total * 0.5) {
      return "🛡️ Tuyệt vời! Bạn đang trở thành công dân số thông minh!";
    } else if (completed >= total * 0.3) {
      return "📚 Tiếp tục học hỏi để bảo vệ bản thân nhé!";
    } else {
      return "🌟 Bắt đầu hành trình an toàn số của bạn!";
    }
  };

  const getNextModule = () => {
    const currentIndex = getCurrentModuleIndex();
    const unvisitedModules = learningModules.filter(
      (module) => !visitedPages.has(module.path),
    );

    if (unvisitedModules.length === 0) return null;

    // Prefer next in sequence, or first unvisited
    const nextInSequence = learningModules[currentIndex + 1];
    if (nextInSequence && !visitedPages.has(nextInSequence.path)) {
      return nextInSequence;
    }

    return unvisitedModules[0];
  };

  const handleClose = () => {
    setIsVisible(false);
    // Hide for 1 hour
    const hideUntil = Date.now() + 60 * 60 * 1000;
    localStorage.setItem("progressHiddenUntil", hideUntil.toString());
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  const nextModule = getNextModule();

  return (
    <div
      className={`fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 z-40 animate-slide-up transition-all duration-300 hover:shadow-xl ${
        isMinimized ? "max-w-xs p-3" : "max-w-sm sm:max-w-md p-4"
      } ${
        // Mobile responsive positioning
        "sm:bottom-4 sm:right-4 bottom-2 right-2 left-2 sm:left-auto"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <h3
            className={`font-semibold text-gray-800 ${isMinimized ? "text-xs" : "text-sm"}`}
          >
            Hành trình học tập
          </h3>
          {!isMinimized && (
            <span className="text-xs text-gray-500">
              {visitedPages.size}/{learningModules.length}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={handleMinimize}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            title={isMinimized ? "Mở rộng" : "Thu gọn"}
            aria-label={
              isMinimized
                ? "Mở rộng hành trình học tập"
                : "Thu gọn hành trình học tập"
            }
            aria-expanded={!isMinimized}
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform ${isMinimized ? "rotate-90" : "rotate-270"}`}
            />
          </button>
          <button
            onClick={handleClose}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors rounded focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
            title="Ẩn trong 1 giờ"
            aria-label="Ẩn hành trình học tập trong 1 giờ"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Progress bar */}
          <div
            className="w-full bg-gray-200 rounded-full h-3 mb-3 relative overflow-hidden"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Tiến độ học tập: ${Math.round(progress)}% hoàn thành`}
          >
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 h-full rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
            <div className="absolute top-0 right-2 text-xs font-semibold text-gray-600 mt-0.5">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Current module indicator */}
          <div className="flex space-x-1 sm:space-x-2 mb-3 justify-center">
            {learningModules.map((module, index) => {
              const isVisited = visitedPages.has(module.path);
              const isCurrent = module.path === currentPage;
              const IconComponent = module.icon;

              return (
                <Link
                  key={module.path}
                  to={module.path}
                  className={`p-1 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                    isVisited
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : isCurrent
                        ? "bg-blue-100 text-blue-600 animate-protective-pulse"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`}
                  title={`${module.title} ${isVisited ? "✅ Đã hoàn thành" : isCurrent ? "📍 Đang học" : "⏳ Chưa học"}`}
                  aria-label={`Chuyển đến module ${module.title}. Trạng thái: ${isVisited ? "Đã hoàn thành" : isCurrent ? "Đang học" : "Chưa học"}`}
                  role="button"
                >
                  <IconComponent className="h-3 w-3" />
                </Link>
              );
            })}
          </div>

          {/* Encouraging message */}
          <p className="text-xs text-gray-600 text-center animate-text-breathe mb-2">
            {getProgressMessage()}
          </p>

          {/* Next step with action */}
          {nextModule && (
            <div className="mt-2 pt-2 border-t border-gray-100">
              <Link
                to={nextModule.path}
                className="flex items-center justify-between p-2 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors group"
              >
                <div className="flex items-center space-x-2">
                  <nextModule.icon className={`h-4 w-4 ${nextModule.color}`} />
                  <span className="text-xs font-medium text-gray-700">
                    {nextModule.title}
                  </span>
                </div>
                <ChevronRight className="h-3 w-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}

          {progress === 100 && (
            <div className="mt-2 pt-2 border-t border-gray-100 text-center">
              <p className="text-xs text-green-600 font-medium mb-2">
                🏆 Bạn đã hoàn thành! Hãy chia sẻ kiến thức này!
              </p>
              <div className="flex space-x-2 justify-center">
                <button className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200 transition-colors">
                  📱 Chia sẻ
                </button>
                <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 transition-colors">
                  🔄 Ôn lại
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Minimized view */}
      {isMinimized && (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-16 bg-gray-200 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-1 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-500">{Math.round(progress)}%</span>
        </div>
      )}
    </div>
  );
}
