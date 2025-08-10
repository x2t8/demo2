import { useState } from "react";
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Mail,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ChevronRight,
  Shield,
  Eye,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Star,
  Heart,
  Bookmark,
  Share2,
  Info,
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
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";
import { useScrollReveal, useStaggeredReveal } from "@/hooks/useScrollReveal";
import LearningProgress from "@/components/LearningProgress";
import Statistics from "@/components/Statistics";
import SocialShare from "@/components/SocialShare";
import RealWorldExamples from "@/components/RealWorldExamples";

export default function ScamTypes() {
  const [selectedScam, setSelectedScam] = useState<string | null>(null);
  const [bookmarkedScams, setBookmarkedScams] = useState<string[]>([]);

  // Initialize protective animations
  useScrollReveal();
  useStaggeredReveal();

  const toggleBookmark = (scamId: string) => {
    setBookmarkedScams((prev) =>
      prev.includes(scamId)
        ? prev.filter((id) => id !== scamId)
        : [...prev, scamId],
    );
  };

  const scamStatistics = [
    {
      value: "15,000+",
      label: "Vụ lừa đảo online năm 2023",
      color: "from-red-500 to-red-600",
      description: "Tăng 35% so với năm trước",
    },
    {
      value: "2,500 tỷ",
      label: "VNĐ thiệt hại/năm",
      color: "from-orange-500 to-orange-600",
      description: "Trung bình 167 triệu/vụ",
    },
    {
      value: "68%",
      label: "Qua điện thoại & SMS",
      color: "from-purple-500 to-purple-600",
      description: "Hình thức phổ biến nhất",
    },
    {
      value: "25-45",
      label: "Tuổi bị lừa nhiều nhất",
      color: "from-blue-500 to-blue-600",
      description: "Độ tuổi lao động chính",
    },
  ];

  const scamDetails = [
    {
      id: "phone",
      icon: Phone,
      title: "Lừa đảo qua điện thoại",
      danger: "Cực kỳ nguy hiểm",
      dangerLevel: 95,
      color: "text-red-600 bg-red-100",
      gradient: "from-red-500 to-red-600",
      shortDesc: "Giả danh cơ quan, yêu cầu chuyển tiền",
      popularity: "92%",
      avgLoss: "45 triệu VNĐ",
      description:
        "Kẻ lừa đảo gọi điện giả danh cơ quan công an, ngân hàng, tòa án để lừa thông tin cá nhân và tiền bạc.",
      techniques: [
        "Giả danh công an, kiểm sát viện",
        "Thông báo tài khoản bị khóa",
        "Yêu cầu chuyển tiền 'bảo toàn tài sản'",
        "Đe dọa bắt giữ nếu không hợp tác",
        "Tạo áp lực tâm lý cực lớn",
        "Sử dụng thông tin cá nhân đã thu thập",
      ],
      redFlags: [
        "Yêu cầu cung cấp mã OTP",
        "Đe dọa, gây áp lực tâm lý",
        "Không cho thời gian suy nghĩ",
        "Yêu cầu chuyển tiền ngay lập tức",
        "Không có văn bản chính thức",
        "Từ chối gặp trực tiếp",
      ],
      protection: [
        "Cúp máy ngay khi nghi ngờ",
        "Gọi lại số hotline chính thức",
        "Không cung cấp thông tin cá nhân",
        "Tham khảo ý kiến người thân",
        "Ghi âm cuộc gọi nếu có thể",
        "Báo cáo ngay cho cơ quan chức năng",
      ],
    },
    {
      id: "sms",
      icon: MessageSquare,
      title: "Lừa đảo qua SMS",
      danger: "Nguy hiểm cao",
      dangerLevel: 78,
      color: "text-orange-600 bg-orange-100",
      gradient: "from-orange-500 to-orange-600",
      shortDesc: "Tin nhắn trúng thưởng, link độc hại",
      popularity: "85%",
      avgLoss: "8 triệu VNĐ",
      description:
        "Tin nhắn giả mạo thông báo trúng thưởng, khuyến mãi hoặc cảnh báo tài khoản để lừa click link độc hại.",
      techniques: [
        "Thông báo trúng thưởng khủng",
        "Khuyến mãi hấp dẫn từ thương hiệu nổi tiếng",
        "Cảnh báo tài khoản bị hack",
        "Link rút gọn che giấu đích đến",
        "Giả mạo tin nhắn ngân hàng",
        "Tạo cảm giác khẩn cấp",
      ],
      redFlags: [
        "Số điện thoại lạ, không rõ nguồn gốc",
        "Yêu cầu click link ngay lập tức",
        "Thông tin quá hấp dẫn, không hợp lý",
        "Lỗi chính tả, ngữ pháp",
        "Link không chính thức",
        "Yêu cầu chia sẻ thông tin",
      ],
      protection: [
        "Không click vào link lạ",
        "Kiểm tra tên miền website",
        "Xác minh qua kênh chính thức",
        "Sử dụng app diệt virus",
        "Chặn số lạ",
        "Báo cáo tin nhắn spam",
      ],
    },
    {
      id: "email",
      icon: Mail,
      title: "Lừa đảo qua Email",
      danger: "Nguy hiểm cao",
      dangerLevel: 82,
      color: "text-yellow-600 bg-yellow-100",
      gradient: "from-yellow-500 to-orange-500",
      shortDesc: "Email giả mạo ngân hàng, phishing",
      popularity: "73%",
      avgLoss: "25 triệu VNĐ",
      description:
        "Email phishing giả mạo ngân hàng, dịch vụ online để đánh cắp thông tin đăng nhập và tài khoản.",
      techniques: [
        "Giả mạo email ngân hàng",
        "Thông báo cập nhật bảo mật",
        "Hóa đơn giả từ dịch vụ online",
        "Đính kèm file độc hại",
        "Clone website chính thức",
        "Sử dụng domain tương tự",
      ],
      redFlags: [
        "Email từ địa chỉ lạ",
        "Yêu cầu cập nhật thông tin khẩn cấp",
        "Logo, thiết kế không chính thức",
        "File đính kèm đáng ngờ",
        "Lỗi chính tả trong email",
        "Domain không chính thức",
      ],
      protection: [
        "Kiểm tra địa chỉ email gửi",
        "Đăng nhập trực tiếp vào website",
        "Không tải file đính kèm lạ",
        "Báo cáo email spam",
        "Sử dụng 2FA",
        "Cập nhật phần mềm bảo mật",
      ],
    },
    {
      id: "financial",
      icon: CreditCard,
      title: "Lừa đảo tài chính",
      danger: "Cực kỳ nguy hiểm",
      dangerLevel: 98,
      color: "text-purple-600 bg-purple-100",
      gradient: "from-purple-500 to-pink-500",
      shortDesc: "Đầu tư ma, sàn forex giả",
      popularity: "67%",
      avgLoss: "150 triệu VNĐ",
      description:
        "Các hình thức đầu tư ma, sàn forex giả, vay tiền online với lãi suất hấp dẫn để chiếm đoạt tài sản.",
      techniques: [
        "Sàn forex, crypto giả",
        "Đầu tư đa cấp online",
        "Vay tiền lãi suất 0%",
        "HYIP - lãi suất siêu cao",
        "Ponzi scheme",
        "Fake trading signals",
      ],
      redFlags: [
        "Lãi suất quá cao, không hợp lý",
        "Không có giấy phép hoạt động",
        "Yêu cầu nạp tiền trước",
        "Không thể rút tiền",
        "Không có địa chỉ văn phòng",
        "Áp lực đầu tư nhanh",
      ],
      protection: [
        "Kiểm tra giấy phép kinh doanh",
        "Tìm hiểu kỹ trước khi đầu tư",
        "Không tin vào lời hứa lãi cao",
        "Tham khảo chuyên gia tài chính",
        "Đầu tư theo khả năng",
        "Diversify portfolio",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-red-50 to-orange-100">
      <Header />
      <DisclaimerBanner />

      {/* =================================== */}
      {/* DESKTOP VERSION - Full Featured     */}
      {/* =================================== */}
      <div className="hidden lg:block">
        {/* Hero Section - Desktop */}
        <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-12 w-12 mr-4 animate-pulse" />
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    CẢNH BÁO QUAN TRỌNG
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Các Dạng Lừa Đảo{" "}
                  <span className="text-yellow-300">Chi Tiết</span>
                </h1>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Phân tích sâu từng loại lừa đảo với dữ liệu thực tế, thống kê
                  cập nhật và hướng dẫn phòng tránh hiệu quả nhất.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      15,000+
                    </div>
                    <div className="text-sm opacity-80">Vụ lừa đảo/năm</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      2,500 tỷ
                    </div>
                    <div className="text-sm opacity-80">VNĐ thiệt hại</div>
                  </div>
                  <div className="w-px h-12 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">
                      68%
                    </div>
                    <div className="text-sm opacity-80">Qua ĐT & SMS</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {scamDetails.map((scam, index) => (
                    <Card
                      key={scam.id}
                      className={`transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${index % 2 === 1 ? "mt-8" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div
                          className={`w-12 h-12 rounded-lg ${scam.color} flex items-center justify-center mb-3`}
                        >
                          <scam.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-sm mb-2">
                          {scam.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">
                              Độ nguy hiểm
                            </span>
                            <span className="text-xs font-semibold text-red-600">
                              {scam.dangerLevel}%
                            </span>
                          </div>
                          <Progress value={scam.dangerLevel} className="h-1" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Desktop */}
        <div className="bg-white shadow-sm border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Phân loại chi tiết
                </h2>
                <div className="flex space-x-4">
                  {scamDetails.map((scam) => (
                    <a
                      key={scam.id}
                      href={`#${scam.id}`}
                      className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <scam.icon
                        className={`h-4 w-4 mr-2 ${scam.color.split(" ")[0]}`}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {scam.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Chia sẻ
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Báo cáo: 113
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Scam Types - Desktop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-20">
            {scamDetails.map((scam, index) => (
              <div key={scam.id} id={scam.id} className="scroll-mt-24">
                <Card className="overflow-hidden shadow-xl border-0">
                  {/* Card Header with Gradient */}
                  <div
                    className={`bg-gradient-to-r ${scam.gradient} text-white p-8`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                          <scam.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold mb-2">
                            {scam.title}
                          </h2>
                          <div className="flex items-center space-x-4">
                            <Badge
                              variant="destructive"
                              className="bg-white/20 text-white border-white/30"
                            >
                              {scam.danger}
                            </Badge>
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-4 w-4" />
                              <span className="text-sm">
                                Phổ biến: {scam.popularity}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CreditCard className="h-4 w-4" />
                              <span className="text-sm">
                                Thiệt hại TB: {scam.avgLoss}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-6xl font-bold text-white/30">
                          0{index + 1}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20"
                          onClick={() => toggleBookmark(scam.id)}
                        >
                          {bookmarkedScams.includes(scam.id) ? (
                            <Heart className="h-4 w-4 fill-current" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <p className="text-lg mt-4 opacity-90 leading-relaxed max-w-4xl">
                      {scam.description}
                    </p>
                  </div>

                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Techniques */}
                      <div className="bg-red-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                            <XCircle className="h-5 w-5 text-red-600" />
                          </div>
                          <h3 className="text-xl font-bold text-red-800">
                            Thủ đoạn thường gặp
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {scam.techniques.map((technique, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 group"
                            >
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-red-600 transition-colors"></div>
                              <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                {technique}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Red Flags */}
                      <div className="bg-orange-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                            <Eye className="h-5 w-5 text-orange-600" />
                          </div>
                          <h3 className="text-xl font-bold text-orange-800">
                            Dấu hiệu nhận biết
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {scam.redFlags.map((flag, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 group"
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-orange-600 transition-colors"></div>
                              <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                {flag}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Protection */}
                      <div className="bg-green-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                            <Shield className="h-5 w-5 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-green-800">
                            Cách phòng tránh
                          </h3>
                        </div>
                        <ul className="space-y-3">
                          {scam.protection.map((tip, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3 group"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-green-600 transition-colors"></div>
                              <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                                {tip}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex items-center justify-center space-x-4">
                      <Button variant="outline" className="flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        Chia sẻ kiến thức này
                      </Button>
                      <Button className="bg-red-600 hover:bg-red-700 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Báo cáo lừa đảo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-20">
            <Statistics
              title="Thống Kê Lừa Đảo Tại Việt Nam"
              subtitle="Những con số đáng báo động về tình trạng lừa đảo online"
              stats={scamStatistics}
              backgroundGradient="from-red-50 to-orange-50"
            />
          </div>

          {/* Real World Examples */}
          <div className="mt-20">
            <RealWorldExamples />
          </div>

          {/* Social Share Section */}
          <div className="mt-20">
            <SocialShare
              title="Bảo vệ bản thân khỏi lừa đảo - Kiến thức cần thiết cho mọi người"
              description="Tìm hiểu các dạng lừa đảo phổ biến và cách phòng tránh hiệu quả. Chia sẻ để bảo vệ cộng đồng!"
            />
          </div>
        </div>
      </div>

      {/* =================================== */}
      {/* MOBILE VERSION - Compact & Clean   */}
      {/* =================================== */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-8">
          <div className="px-4 text-center">
            <AlertTriangle className="h-10 w-10 mx-auto mb-3 animate-pulse" />
            <h1 className="text-xl font-bold mb-1">Lừa Đảo Online</h1>
            <p className="text-sm opacity-90">Nhận biết & Phòng tránh</p>

            {/* Quick Stats Mobile */}
            <div className="flex justify-center space-x-4 mt-4 text-xs">
              <div className="text-center">
                <div className="font-bold">15K+</div>
                <div className="opacity-80">vụ/năm</div>
              </div>
              <div className="text-center">
                <div className="font-bold">2.5K tỷ</div>
                <div className="opacity-80">thiệt hại</div>
              </div>
              <div className="text-center">
                <div className="font-bold">68%</div>
                <div className="opacity-80">qua ĐT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="px-4 py-6 space-y-4">
          {!selectedScam ? (
            /* Scam Types List - Mobile */
            <>
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  🛡️ Chọn loại để tìm hiểu
                </h2>
                <p className="text-gray-600 text-sm">
                  Tap vào card để xem chi tiết phòng tránh
                </p>
              </div>

              <div className="space-y-3">
                {scamDetails.map((scam, index) => (
                  <Card
                    key={scam.id}
                    className="cursor-pointer active:scale-95 transition-transform duration-150 border-l-4 border-red-400 hover:shadow-lg"
                    onClick={() => setSelectedScam(scam.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-xl ${scam.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <scam.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold text-gray-900 text-sm truncate">
                              {scam.title}
                            </h3>
                            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          </div>
                          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                            {scam.shortDesc}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="destructive"
                              className="text-xs px-2 py-0.5"
                            >
                              {scam.danger}
                            </Badge>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <span>📊 {scam.popularity}</span>
                              <span>💰 {scam.avgLoss}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions - Mobile */}
              <div className="mt-6 space-y-3">
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-red-800 mb-3 text-center flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      🚨 Khẩn cấp?
                    </h3>
                    <div className="space-y-2">
                      <Button
                        className="w-full bg-red-600 hover:bg-red-700 text-sm py-2"
                        onClick={() => window.open("tel:113")}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Gọi 113 - Công an
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full text-sm py-2"
                        onClick={() => window.open("tel:19001080")}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Hotline chống lừa đảo
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Tips */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-blue-800 mb-3 text-center">
                      💡 Tips nhanh
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>Không bao giờ cung cấp mã OTP</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>Luôn xác minh qua kênh chính thức</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600">•</span>
                        <span>Cúp máy khi nghi ngờ</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            /* Scam Detail View - Mobile */
            <>
              {(() => {
                const scam = scamDetails.find((s) => s.id === selectedScam);
                if (!scam) return null;

                return (
                  <div className="space-y-4">
                    {/* Back Button */}
                    <div className="flex items-center justify-between mb-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedScam(null)}
                        className="p-2"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Quay lại
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBookmark(scam.id)}
                        className="p-2"
                      >
                        {bookmarkedScams.includes(scam.id) ? (
                          <Heart className="h-4 w-4 fill-current text-red-500" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    {/* Scam Header Mobile */}
                    <Card
                      className={`bg-gradient-to-r ${scam.gradient} text-white border-0`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <scam.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-lg font-bold mb-1">
                              {scam.title}
                            </h2>
                            <Badge
                              variant="destructive"
                              className="bg-white/20 text-white border-white/30 text-xs"
                            >
                              {scam.danger}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-sm opacity-90 leading-relaxed mb-3">
                          {scam.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="bg-white/10 rounded-lg p-2 text-center">
                            <div className="font-bold">{scam.popularity}</div>
                            <div className="opacity-80">Phổ biến</div>
                          </div>
                          <div className="bg-white/10 rounded-lg p-2 text-center">
                            <div className="font-bold">{scam.avgLoss}</div>
                            <div className="opacity-80">Thiệt hại TB</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Danger Level */}
                    <Card className="border-l-4 border-red-400">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            Mức độ nguy hiểm
                          </span>
                          <span className="text-sm font-bold text-red-600">
                            {scam.dangerLevel}%
                          </span>
                        </div>
                        <Progress value={scam.dangerLevel} className="h-2" />
                      </CardContent>
                    </Card>

                    {/* Mobile Info Sections */}
                    <div className="space-y-4">
                      {/* Techniques */}
                      <Card className="bg-red-50 border-red-200">
                        <CardContent className="p-4">
                          <h3 className="font-bold text-red-800 mb-3 flex items-center text-sm">
                            <XCircle className="h-4 w-4 mr-2" />
                            Thủ đoạn thường gặp
                          </h3>
                          <div className="space-y-2">
                            {scam.techniques
                              .slice(0, 4)
                              .map((technique, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start space-x-2"
                                >
                                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                  <span className="text-sm text-gray-700 leading-relaxed">
                                    {technique}
                                  </span>
                                </div>
                              ))}
                            {scam.techniques.length > 4 && (
                              <div className="text-xs text-red-600 font-medium">
                                +{scam.techniques.length - 4} thủ đoạn khác...
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Red Flags */}
                      <Card className="bg-orange-50 border-orange-200">
                        <CardContent className="p-4">
                          <h3 className="font-bold text-orange-800 mb-3 flex items-center text-sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Dấu hiệu nhận biết
                          </h3>
                          <div className="space-y-2">
                            {scam.redFlags.slice(0, 4).map((flag, idx) => (
                              <div
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span className="text-sm text-gray-700 leading-relaxed">
                                  {flag}
                                </span>
                              </div>
                            ))}
                            {scam.redFlags.length > 4 && (
                              <div className="text-xs text-orange-600 font-medium">
                                +{scam.redFlags.length - 4} dấu hiệu khác...
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Protection */}
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="p-4">
                          <h3 className="font-bold text-green-800 mb-3 flex items-center text-sm">
                            <Shield className="h-4 w-4 mr-2" />
                            Cách phòng tránh
                          </h3>
                          <div className="space-y-2">
                            {scam.protection.slice(0, 4).map((tip, idx) => (
                              <div
                                key={idx}
                                className="flex items-start space-x-2"
                              >
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span className="text-sm text-gray-700 leading-relaxed">
                                  {tip}
                                </span>
                              </div>
                            ))}
                            {scam.protection.length > 4 && (
                              <div className="text-xs text-green-600 font-medium">
                                +{scam.protection.length - 4} cách khác...
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Action Buttons Mobile */}
                    <div className="space-y-2 pt-4">
                      <Button
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={() => window.open("tel:113")}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Báo cáo ngay - 113
                      </Button>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedScam(null)}
                        >
                          📚 Xem loại khác
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-3 w-3 mr-1" />
                          Chia sẻ
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </>
          )}
        </div>
      </div>

      <LearningProgress currentPage="/scam-types" />
    </div>
  );
}
