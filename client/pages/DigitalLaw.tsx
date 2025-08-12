import { useState, useEffect } from "react";
import {
  Scale,
  Copyright,
  Shield,
  FileText,
  Image,
  Music,
  Video,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Gavel,
  Users,
  Lock,
  Smartphone,
  Flag,
  DollarSign,
  Eye,
  Heart,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  TrendingUp,
  Globe,
  Lightbulb,
  Brain,
  Zap,
  Coffee,
  Target,
  ArrowLeft,
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
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function DigitalLaw() {
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  const toggleBookmark = (itemId: string) => {
    setBookmarkedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const digitalLawStats = [
    {
      value: "89%",
      label: "Vi phạm bản quyền không cố ý",
      color: "from-purple-500 to-purple-600",
      description: "Do thiếu hiểu biết",
    },
    {
      value: "2.1 tỷ",
      label: "Thiệt hại bản quyền toàn cầu",
      color: "from-blue-500 to-blue-600",
      description: "USD/năm 2023",
    },
    {
      value: "75 triệu",
      label: "Mức phạt tối đa cá nhân",
      color: "from-red-500 to-red-600",
      description: "VNĐ tại Việt Nam",
    },
    {
      value: "150 triệu",
      label: "Mức phạt tối đa tổ chức",
      color: "from-orange-500 to-orange-600",
      description: "VNĐ tại Việt Nam",
    },
  ];

  const legalRules = [
    {
      id: "copyright",
      icon: Copyright,
      title: "Bản quyền tác phẩm",
      importance: "Cực kỳ quan trọng",
      importanceLevel: 98,
      color: "text-purple-600 bg-purple-100",
      gradient: "from-purple-500 to-indigo-500",
      shortDesc: "Tôn trọng quyền sở hữu trí tuệ của tác giả",
      impact: "Bảo vệ sáng tạo",
      usage: "Mọi tác phẩm số",
      description:
        "Bản quyền bảo vệ quyền của tác giả đối với tác phẩm sáng tạo, bao gồm văn bản, hình ảnh, âm nhạc và video.",
      dos: [
        "Xin phép tác giả trước khi sử dụng",
        "Sử dụng tài nguyên Creative Commons",
        "Tạo nội dung gốc của riêng mình",
        "Trích dẫn nguồn rõ ràng khi cần",
        "Mua license khi sử dụng thương mại",
        "Tôn trọng quyền moral của tác giả",
      ],
      donts: [
        "Copy/paste nội dung không phép",
        "Crop watermark của tác giả",
        "Sử dụng ảnh từ Google Images",
        "Download nhạc, phim bản quyền trái phép",
        "Bán lại tác phẩm không phải của mình",
        "Tự nhận mình là tác giả tác phẩm",
      ],
    },
    {
      id: "privacy",
      icon: Shield,
      title: "Bảo vệ dữ liệu cá nhân",
      importance: "Rất quan trọng",
      importanceLevel: 96,
      color: "text-blue-600 bg-blue-100",
      gradient: "from-blue-500 to-cyan-500",
      shortDesc: "Tuân thủ luật bảo vệ dữ liệu cá nhân",
      impact: "An toàn thông tin",
      usage: "Mọi hoạt động số",
      description:
        "Luật Bảo vệ dữ liệu cá nhân quy định nghiêm ngặt về việc thu thập, xử lý và sử dụng thông tin cá nhân.",
      dos: [
        "Xin đồng ý trước khi thu thập dữ liệu",
        "Giải thích rõ mục đích sử dụng",
        "Bảo mật dữ liệu thu thập được",
        "Cho phép người dùng chỉnh sửa/xóa",
        "Thông báo khi có rò rỉ dữ liệu",
        "Tuân thủ quyền được quên",
      ],
      donts: [
        "Thu thập dữ liệu không cần thiết",
        "Chia sẻ thông tin cho bên thứ ba",
        "Sử dụng sai mục đích đã khai báo",
        "Lưu trữ dữ liệu quá thời hạn",
        "Không bảo mật dữ liệu đúng cách",
        "Từ chối quyền truy cập dữ liệu",
      ],
    },
    {
      id: "content",
      icon: FileText,
      title: "Nội dung hợp pháp",
      importance: "Quan trọng cao",
      importanceLevel: 94,
      color: "text-green-600 bg-green-100",
      gradient: "from-green-500 to-emerald-500",
      shortDesc: "Đăng tải nội dung không vi phạm pháp luật",
      impact: "Môi trường lành mạnh",
      usage: "Mạng xã hội, website",
      description:
        "Nội dung đăng tải phải tuân thủ luật pháp Việt Nam, không vi phạm đạo đức xã hội và quy định nền tảng.",
      dos: [
        "Kiểm tra tính chính xác thông tin",
        "Tôn trọng các giá trị xã hội",
        "Tuân thủ quy định nền tảng",
        "Khai báo hợp tác thương mại",
        "Bảo vệ danh tiếng người khác",
        "Sử dụng ngôn ngữ văn minh",
      ],
      donts: [
        "Đăng tin giả, tin đồn thất thiệt",
        "Xúc phạm danh dự, nhân phẩm",
        "Kích động bạo lực, thù hận",
        "Quảng cáo sản phẩm trái phép",
        "Tuyên truyền chống phá nhà nước",
        "Chia sẻ nội dung khiêu dâm",
      ],
    },
    {
      id: "social-media",
      icon: Smartphone,
      title: "Quy định mạng xã hội",
      importance: "Quan trọng cao",
      importanceLevel: 91,
      color: "text-orange-600 bg-orange-100",
      gradient: "from-orange-500 to-red-500",
      shortDesc: "Tuân thủ luật khi sử dụng Facebook, TikTok, YouTube",
      impact: "Sử dụng an toàn",
      usage: "Các nền tảng MXH",
      description:
        "Mỗi nền tảng mạng xã hội có quy định riêng, song song với luật pháp Việt Nam về an toàn thông tin mạng.",
      dos: [
        "Đọc và tuân thủ Community Guidelines",
        "Báo cáo nội dung vi phạm",
        "Bảo vệ tài khoản bằng 2FA",
        "Khai báo quảng cáo có trả tiền",
        "Tôn trọng quyền riêng tư người khác",
        "Sử dụng real name trên nền tảng yêu cầu",
      ],
      donts: [
        "Tạo tài khoản giả mạo",
        "Spam tin nhắn, bình luận",
        "Harassment, cyberbullying",
        "Chia sẻ link độc hại",
        "Livestream nội dung vi phạm",
        "Mua bán tài khoản, like, follow",
      ],
    },
    {
      id: "business",
      icon: DollarSign,
      title: "Kinh doanh online",
      importance: "Quan trọng",
      importanceLevel: 88,
      color: "text-indigo-600 bg-indigo-100",
      gradient: "from-indigo-500 to-purple-500",
      shortDesc: "Tuân thủ pháp luật khi bán hàng, kinh doanh trên mạng",
      impact: "Kinh doanh bền vững",
      usage: "E-commerce, livestream",
      description:
        "Kinh doanh online phải tuân thủ luật thương mại điện tử, thuế, và bảo vệ người tiêu dùng.",
      dos: [
        "Đăng ký kinh doanh khi cần thiết",
        "Khai báo và nộp thuế đúng quy định",
        "Cung cấp thông tin sản phẩm chính xác",
        "Có chính sách đổi trả rõ ràng",
        "Bảo vệ thông tin khách hàng",
        "Tuân thủ quy định về quảng cáo",
      ],
      donts: [
        "Bán hàng giả, hàng nhái",
        "Quảng cáo gian dối, thổi phồng",
        "Trốn thuế, không khai báo doanh thu",
        "Lừa đảo, chiếm đoạt tài sản",
        "Bán hàng cấm, hạn chế",
        "Vi phạm quyền lợi người tiêu dùng",
      ],
    },
    {
      id: "cybersecurity",
      icon: Lock,
      title: "An toàn thông tin mạng",
      importance: "Đang nổi lên",
      importanceLevel: 85,
      color: "text-red-600 bg-red-100",
      gradient: "from-red-500 to-pink-500",
      shortDesc: "Bảo vệ hệ thống và dữ liệu khỏi tấn công mạng",
      impact: "An ninh quốc gia",
      usage: "Hệ thống thông tin",
      description:
        "Luật An toàn thông tin mạng quy định về bảo vệ hệ thống thông tin quan trọng và phòng chống tấn công mạng.",
      dos: [
        "Cập nhật phần mềm bảo mật định kỳ",
        "Sử dụng mật khẩu mạnh, unique",
        "Backup dữ liệu quan trọng",
        "Báo cáo sự cố an ninh mạng",
        "Đào tạo nhân viên về cybersecurity",
        "Tuân thủ tiêu chuẩn bảo mật",
      ],
      donts: [
        "Tấn công, xâm nhập hệ thống",
        "Tạo và phát tán malware",
        "DDoS các website",
        "Hack tài khoản người khác",
        "Bán thông tin cá nhân trái phép",
        "Sử dụng công cụ hack",
      ],
    },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100">
      <Header />
      <DisclaimerBanner />

      {/* =================================== */}
      {/* DESKTOP VERSION - Full Featured     */}
      {/* =================================== */}
      <div className="hidden lg:block">
        {/* Hero Section - Desktop */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Scale className="h-12 w-12 mr-4 animate-pulse" />
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    CÔNG LÝ VÀ PHÁP QUYỀN
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Pháp Luật Số &{" "}
                  <span className="text-yellow-300">Bản Quyền</span>
                </h1>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Hiểu biết về luật pháp, bảo vệ bản quyền và sử dụng công nghệ 
                  một cách hợp pháp trong thời đại số.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      89%
                    </div>
                    <div className="text-sm opacity-80">
                      Vi phạm không cố ý
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      75 triệu
                    </div>
                    <div className="text-sm opacity-80">
                      Mức phạt tối đa VNĐ
                    </div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      2.1 tỷ
                    </div>
                    <div className="text-sm opacity-80">USD thiệt hại/năm</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Biểu tượng cân công lý lớn làm button */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <Scale className="h-48 w-48 mx-auto text-yellow-300 drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300" />

                    {/* Bên trái cân: Pháp luật số - TO HƠN */}
                    <div className="absolute -left-24 top-12">
                      <Button
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 h-auto flex-col"
                        variant="ghost"
                      >
                        <div className="text-center">
                          <Gavel className="h-12 w-12 mx-auto mb-3 text-white" />
                          <div className="text-lg font-bold text-white">Pháp Luật Số</div>
                          <div className="text-sm opacity-90 text-white">Quy định & Luật lệ</div>
                        </div>
                      </Button>
                    </div>

                    {/* Bên phải cân: Bản quyền - TO HƠN */}
                    <div className="absolute -right-24 top-12">
                      <Button
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 h-auto flex-col"
                        variant="ghost"
                      >
                        <div className="text-center">
                          <Copyright className="h-12 w-12 mx-auto mb-3 text-white" />
                          <div className="text-lg font-bold text-white">Bản Quyền</div>
                          <div className="text-sm opacity-90 text-white">Sở hữu trí tuệ</div>
                        </div>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-3">Cân Bằng Công Lý</h3>
                    <p className="text-lg opacity-90">
                      Sự kết hợp hoàn hảo giữa tuân thủ pháp luật và bảo vệ quyền sáng tạo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Legal Rules - Desktop (Zigzag Layout) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ⚖️ Quy Định Pháp Lý Cốt Lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              6 lĩnh vực pháp lý quan trọng nhất khi hoạt động trong không gian số hiện đại
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-24">
            {legalRules.map((rule, index) => (
              <div key={rule.id} id={rule.id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Content Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <Card className="overflow-hidden shadow-xl border-0 h-full">
                      {/* Card Header with Gradient */}
                      <div className={`bg-gradient-to-r ${rule.gradient} text-white p-6`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                              <rule.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold mb-1">
                                {rule.title}
                              </h2>
                              <Badge
                                variant="secondary"
                                className="bg-white/20 text-white border-white/30 text-xs"
                              >
                                {rule.importance}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-4xl font-bold text-white/30">
                              0{index + 1}
                            </div>
                          </div>
                        </div>
                        <p className="text-base opacity-90 leading-relaxed">
                          {rule.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4" />
                            <span>Tác động: {rule.impact}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4" />
                            <span>Áp dụng: {rule.usage}</span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 gap-6">
                          {/* Should Do */}
                          <div className="bg-green-50 rounded-xl p-4">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </div>
                              <h3 className="text-lg font-bold text-green-800">
                                NÊN LÀM
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {rule.dos.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2 group"
                                >
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Should Not Do */}
                          <div className="bg-red-50 rounded-xl p-4">
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                <XCircle className="h-4 w-4 text-red-600" />
                              </div>
                              <h3 className="text-lg font-bold text-red-800">
                                KHÔNG NÊN LÀM
                              </h3>
                            </div>
                            <ul className="space-y-2">
                              {rule.donts.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start space-x-2 group"
                                >
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex items-center justify-center space-x-3">
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Share2 className="h-4 w-4 mr-2" />
                            Chia sẻ
                          </Button>
                          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 flex items-center"
                            onClick={() => toggleBookmark(rule.id)}
                          >
                            {bookmarkedItems.includes(rule.id) ? (
                              <Heart className="h-4 w-4 mr-2 fill-current" />
                            ) : (
                              <Bookmark className="h-4 w-4 mr-2" />
                            )}
                            {bookmarkedItems.includes(rule.id) ? 'Đã lưu' : 'Lưu lại'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Visual Section */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="relative">
                      {/* Background decoration */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${rule.gradient} opacity-10 rounded-3xl transform rotate-6`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${rule.gradient} opacity-5 rounded-3xl transform -rotate-3`}></div>
                      
                      {/* Main visual card */}
                      <Card className="relative bg-white shadow-2xl border-0 p-8 text-center">
                        <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${rule.gradient} flex items-center justify-center shadow-lg`}>
                          <rule.icon className="h-12 w-12 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          {rule.shortDesc}
                        </h3>
                        
                        {/* Progress indicator */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Tầm quan trọng</span>
                            <span className="font-semibold text-indigo-600">
                              {rule.importanceLevel}%
                            </span>
                          </div>
                          <Progress
                            value={rule.importanceLevel}
                            className="h-2"
                          />
                        </div>

                        {/* Quick stats */}
                        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{rule.dos.length}</div>
                            <div className="text-xs text-green-600">Nên làm</div>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg">
                            <div className="text-lg font-bold text-red-600">{rule.donts.length}</div>
                            <div className="text-xs text-red-600">Không nên</div>
                          </div>
                        </div>

                        {/* Floating number */}
                        <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${rule.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {index + 1}
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Statistics Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thống Kê Pháp Lý Toàn Cầu
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Những con số cho thấy tầm quan trọng của tuân thủ pháp luật số
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {digitalLawStats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {stat.value}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">
              <CardContent className="p-12">
                <Scale className="h-16 w-16 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Cùng Xây Dựng Không Gian Số Hợp Pháp!
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Hiểu biết pháp luật giúp bạn sáng tạo tự do và bảo vệ quyền lợi 
                  của bản thân cũng như người khác
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-indigo-600 hover:bg-gray-100"
                  >
                    <Scale className="h-5 w-5 mr-2" />
                    Tìm hiểu thêm luật Việt Nam
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Tải template bản quyền
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* =================================== */}
      {/* MOBILE VERSION                      */}
      {/* =================================== */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          
          <div className="relative px-6 py-12 text-center">
            <Scale className="h-14 w-14 mx-auto mb-6 animate-pulse drop-shadow-lg" />
            <h1 className="text-3xl font-bold mb-3 tracking-wide leading-tight">
              Pháp Luật Số & Bản Quyền
            </h1>
            <p className="text-base opacity-95 mb-8 leading-relaxed px-4">
              Hiểu biết pháp luật để sử dụng công nghệ một cách hợp pháp và an toàn
            </p>

            {/* Quick Stats Mobile */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl font-bold mb-1">89%</div>
                <div className="text-sm opacity-90 leading-tight">
                  Vi phạm không cố ý
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                <div className="text-2xl font-bold mb-1">75 triệu</div>
                <div className="text-sm opacity-90 leading-tight">
                  Mức phạt tối đa VNĐ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="px-4 py-6 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
              ⚖️ Quy định pháp lý cần biết
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              6 lĩnh vực pháp lý quan trọng khi hoạt động số
            </p>
          </div>

          <div className="space-y-4 pb-24">
            {legalRules.map((rule, index) => (
              <Card
                key={rule.id}
                className="cursor-pointer transition-all duration-200 border-l-4 hover:shadow-lg"
                style={{ borderLeftColor: rule.gradient.includes('purple') ? '#8b5cf6' : 
                         rule.gradient.includes('blue') ? '#3b82f6' :
                         rule.gradient.includes('green') ? '#10b981' :
                         rule.gradient.includes('orange') ? '#f59e0b' :
                         rule.gradient.includes('indigo') ? '#6366f1' : '#ef4444' }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${rule.gradient} flex items-center justify-center shadow-sm`}>
                      <rule.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight mb-2">
                        {rule.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {rule.shortDesc}
                      </p>
                      <div className="flex items-center space-x-4 text-xs">
                        <div className="flex items-center space-x-1 text-indigo-600">
                          <Scale className="h-3 w-3" />
                          <span>{rule.importance}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-green-600">
                          <CheckCircle className="h-3 w-3" />
                          <span>{rule.dos.length} quy tắc</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
