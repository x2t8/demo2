import {
  ArrowLeft,
  Monitor,
  Smartphone,
  Cloud,
  Users,
  Globe,
  Keyboard,
  Mouse,
  Wifi,
  Lock,
  Search,
  Mail,
  Calendar,
  FileText,
  Video,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import LearningProgress from "@/components/LearningProgress";
import LazySection from "@/components/LazySection";

export default function DigitalSkills() {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Kỹ năng máy tính cơ bản",
      description: "Sử dụng thành thạo máy tính và các phần mềm thiết yếu",
      level: "Cơ bản",
      color: "bg-blue-100 text-blue-800",
      skills: [
        {
          name: "Hệ điều hành",
          details: [
            "Windows/macOS/Linux basics",
            "File management",
            "System settings",
            "Software installation",
          ],
        },
        {
          name: "Microsoft Office/Google Workspace",
          details: [
            "Word/Docs processing",
            "Excel/Sheets calculations",
            "PowerPoint/Slides presentations",
            "Basic formulas & formatting",
          ],
        },
        {
          name: "Internet Browser",
          details: [
            "Efficient web navigation",
            "Bookmarks management",
            "Privacy settings",
            "Extensions usage",
          ],
        },
        {
          name: "File Management",
          details: [
            "Organize folders effectively",
            "File compression/extraction",
            "Cloud storage sync",
            "Backup strategies",
          ],
        },
      ],
    },
    {
      icon: Globe,
      title: "Tìm kiếm & Đánh giá thông tin",
      description: "Kỹ năng tìm kiếm, lọc và đánh giá thông tin trực tuyến",
      level: "Trung bình",
      color: "bg-green-100 text-green-800",
      skills: [
        {
          name: "Tìm kiếm nâng cao",
          details: [
            "Google search operators",
            "Academic databases",
            "Boolean search",
            "Reverse image search",
          ],
        },
        {
          name: "Đánh giá nguồn tin",
          details: [
            "Source credibility check",
            "Fact-checking techniques",
            "Bias identification",
            "Cross-referencing",
          ],
        },
        {
          name: "Research methods",
          details: [
            "Primary vs secondary sources",
            "Citation practices",
            "Information synthesis",
            "Data interpretation",
          ],
        },
        {
          name: "Digital note-taking",
          details: [
            "Note apps (Notion, Obsidian)",
            "Tagging systems",
            "Link connections",
            "Knowledge management",
          ],
        },
      ],
    },
    {
      icon: Users,
      title: "Collaboration & Communication",
      description: "Làm việc nhóm hiệu quả với công cụ số",
      level: "Nâng cao",
      color: "bg-purple-100 text-purple-800",
      skills: [
        {
          name: "Video Conferencing",
          details: [
            "Zoom/Teams/Meet mastery",
            "Screen sharing",
            "Virtual backgrounds",
            "Meeting etiquette",
          ],
        },
        {
          name: "Project Management",
          details: [
            "Trello/Asana/Monday.com",
            "Task delegation",
            "Timeline planning",
            "Progress tracking",
          ],
        },
        {
          name: "Real-time Collaboration",
          details: [
            "Google Docs editing",
            "Slack/Discord communication",
            "Version control basics",
            "Conflict resolution",
          ],
        },
        {
          name: "Digital Presentations",
          details: [
            "Interactive presentations",
            "Live polling",
            "Q&A management",
            "Recording & sharing",
          ],
        },
      ],
    },
    {
      icon: Lock,
      title: "An ninh & Quyền riêng tư",
      description: "Bảo vệ dữ liệu và quyền riêng tư trong môi trường số",
      level: "Nâng cao",
      color: "bg-red-100 text-red-800",
      skills: [
        {
          name: "Password Security",
          details: [
            "Strong password creation",
            "Password managers",
            "Two-factor authentication",
            "Security questions",
          ],
        },
        {
          name: "Privacy Settings",
          details: [
            "Social media privacy",
            "Browser privacy",
            "App permissions",
            "Data sharing controls",
          ],
        },
        {
          name: "Safe Browsing",
          details: [
            "Phishing recognition",
            "Safe download practices",
            "VPN usage",
            "Secure connections (HTTPS)",
          ],
        },
        {
          name: "Data Backup",
          details: [
            "Regular backup schedules",
            "Cloud vs local storage",
            "Recovery procedures",
            "Data encryption",
          ],
        },
      ],
    },
  ];

  const collaborationTools = [
    {
      category: "Communication",
      icon: MessageSquare,
      tools: [
        { name: "Slack", purpose: "Team messaging", level: "Workplace" },
        {
          name: "Discord",
          purpose: "Community chat",
          level: "Gaming/Communities",
        },
        {
          name: "Microsoft Teams",
          purpose: "Enterprise communication",
          level: "Business",
        },
        {
          name: "Zalo/Telegram",
          purpose: "Personal messaging",
          level: "Daily use",
        },
      ],
    },
    {
      category: "Video Conferencing",
      icon: Video,
      tools: [
        { name: "Zoom", purpose: "Meetings & webinars", level: "Professional" },
        { name: "Google Meet", purpose: "Quick video calls", level: "Simple" },
        {
          name: "Microsoft Teams",
          purpose: "Enterprise meetings",
          level: "Business",
        },
        { name: "Skype", purpose: "Personal video calls", level: "Personal" },
      ],
    },
    {
      category: "Project Management",
      icon: Calendar,
      tools: [
        { name: "Trello", purpose: "Kanban boards", level: "Visual" },
        { name: "Asana", purpose: "Task management", level: "Detailed" },
        { name: "Notion", purpose: "All-in-one workspace", level: "Advanced" },
        { name: "Monday.com", purpose: "Team workflows", level: "Enterprise" },
      ],
    },
    {
      category: "File Sharing",
      icon: Cloud,
      tools: [
        {
          name: "Google Drive",
          purpose: "Cloud storage & docs",
          level: "Collaboration",
        },
        { name: "Dropbox", purpose: "File synchronization", level: "Simple" },
        { name: "OneDrive", purpose: "Microsoft ecosystem", level: "Business" },
        { name: "WeTransfer", purpose: "Large file transfer", level: "Quick" },
      ],
    },
  ];

  const digitalLiteracyLevels = [
    {
      level: "Beginner",
      title: "Người mới bắt đầu",
      percentage: "30%",
      description: "Sử dụng cơ bản máy tính và internet",
      skills: [
        "Gửi email đơn giản",
        "Tìm kiếm Google",
        "Sử dụng Facebook",
        "Xem video YouTube",
      ],
      nextSteps: ["Học Microsoft Office", "Cài đặt ứng dụng", "Bảo mật cơ bản"],
    },
    {
      level: "Intermediate",
      title: "Trình độ trung bình",
      percentage: "50%",
      description: "Sử dụng thành thạo các công cụ phổ biến",
      skills: [
        "Tạo tài liệu Word",
        "Excel cơ bản",
        "Video call",
        "Mua sắm online",
      ],
      nextSteps: ["Collaboration tools", "Digital marketing", "Data analysis"],
    },
    {
      level: "Advanced",
      title: "Trình độ nâng cao",
      percentage: "80%",
      description: "Làm việc hiệu quả với công nghệ số",
      skills: [
        "Project management",
        "Digital marketing",
        "Data analysis",
        "Automation",
      ],
      nextSteps: ["AI integration", "Advanced security", "Digital leadership"],
    },
    {
      level: "Expert",
      title: "Chuyên gia",
      percentage: "95%",
      description: "Dẫn dắt chuyển đổi số và đổi mới",
      skills: [
        "Digital strategy",
        "AI implementation",
        "Tech leadership",
        "Innovation",
      ],
      nextSteps: ["Mentoring others", "Tech evangelism", "Continuous learning"],
    },
  ];

  const practicalExercises = [
    {
      title: "Thử thách Email hiệu quả",
      description:
        "Viết email chuyên nghiệp với subject line rõ ràng, nội dung súc tích",
      time: "15 phút",
      difficulty: "Cơ bản",
    },
    {
      title: "Tạo presentation tương tác",
      description:
        "Sử dụng Canva/PowerPoint tạo slide có animation và interactive elements",
      time: "45 phút",
      difficulty: "Trung bình",
    },
    {
      title: "Setup workspace hiệu quả",
      description:
        "Tổ chức desktop, bookmarks, và shortcuts để làm việc nhanh hơn",
      time: "30 phút",
      difficulty: "Cơ bản",
    },
    {
      title: "Collaborative project",
      description:
        "Làm việc nhóm online với Google Docs và Trello trong 1 tuần",
      time: "1 tuần",
      difficulty: "Nâng cao",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-teal-50 to-blue-100">
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Keyboard className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kỹ Năng Số & Digital Literacy
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Phát triển kỹ năng công nghệ thiết yếu cho thời đại số
          </p>
        </div>
      </div>

      {/* Digital Literacy Levels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Đánh Giá Trình Độ Digital Literacy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Xác định vị trí hiện tại và lộ trình phát triển kỹ năng số
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {digitalLiteracyLevels.map((level, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - parseInt(level.percentage) / 100)}`}
                      className="text-green-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-600">
                      {level.percentage}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg">{level.title}</CardTitle>
                <Badge className="mx-auto">{level.level}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {level.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Kỹ năng chủ chốt:</h4>
                  <ul className="text-xs text-gray-500 space-y-1">
                    {level.skills.slice(0, 3).map((skill, idx) => (
                      <li key={idx}>• {skill}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skill Categories */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              4 Nhóm Kỹ Năng Số Cốt Lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Phát triển toàn diện khả năng sử dụng công nghệ số
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 rounded-full bg-white shadow-sm">
                        <category.icon className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={category.color}>{category.level}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-lg border">
                        <h4 className="font-semibold text-lg mb-3 text-gray-800">
                          {skill.name}
                        </h4>
                        <ul className="space-y-2">
                          {skill.details.map((detail, detailIdx) => (
                            <li
                              key={detailIdx}
                              className="flex items-start space-x-2"
                            >
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-gray-600">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Công Cụ Collaboration Phổ Biến
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Làm chủ các công cụ làm việc nhóm thiết yếu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborationTools.map((toolCategory, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <toolCategory.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">
                  {toolCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {toolCategory.tools.map((tool, idx) => (
                    <div key={idx} className="border-l-4 border-blue-200 pl-4">
                      <h4 className="font-semibold text-sm">{tool.name}</h4>
                      <p className="text-xs text-gray-600">{tool.purpose}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {tool.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Practical Exercises */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Thử Thách Thực Hành
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Bài tập thực tế để nâng cao kỹ năng số của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalExercises.map((exercise, index) => (
              <Card key={index} className="bg-white text-gray-900">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{exercise.time}</Badge>
                      <Badge
                        className={
                          exercise.difficulty === "Cơ bản"
                            ? "bg-green-100 text-green-800"
                            : exercise.difficulty === "Trung bình"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exercise.description}</p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Bắt đầu thử thách
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Bắt Đầu Hành Trình Digital Literacy
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Kỹ năng số không chỉ là xu hướng - đó là yêu cầu thiết yếu của tương
          lai
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Monitor className="h-5 w-5 mr-2" />
            Đánh giá kỹ năng hiện tại
          </Button>
          <Button size="lg" variant="outline">
            <Users className="h-5 w-5 mr-2" />
            Tham gia khóa học
          </Button>
        </div>
      </div>
      <LearningProgress currentPage="/digital-skills" />
    </div>
  );
}
