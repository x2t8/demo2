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
import Header from "@/components/Header";
import DisclaimerBanner from "@/components/DisclaimerBanner";

export default function DigitalLaw() {
  const copyrightTypes = [
    {
      icon: FileText,
      title: "Văn bản & Tài liệu",
      description: "Bài viết, sách, báo, luận văn, bài nghiên cứu",
      protectionTime: "Trọn đời tác giả + 50 năm",
      examples: [
        "Blog posts",
        "E-books",
        "Báo cáo nghiên cứu",
        "Nội dung website",
      ],
      violations: [
        "Copy/paste toàn bộ bài viết",
        "Dịch và đăng lại không phép",
        "Sử dụng nội dung không trích dẫn",
        "Bán lại tài liệu có bản quyền",
      ],
      goodPractices: [
        "Trích dẫn nguồn rõ ràng",
        "Xin phép tác giả khi cần",
        "Sử dụng fair use hợp lý",
        "Tạo nội dung gốc của riêng mình",
      ],
    },
    {
      icon: Image,
      title: "Hình ảnh & Đồ họa",
      description: "Ảnh, logo, poster, infographic, artwork",
      protectionTime: "Trọn đời tác giả + 50 năm",
      examples: ["Stock photos", "Logo thương hiệu", "Artwork", "Meme gốc"],
      violations: [
        "Tải và sử dụng ảnh từ Google Images",
        "Crop watermark của tác giả",
        "Sử dụng logo thương hiệu trái phép",
        "Bán ảnh không phải của mình",
      ],
      goodPractices: [
        "Mua ảnh từ stock photo sites",
        "Sử dụng ảnh Creative Commons",
        "Tự chụp ảnh hoặc tạo đồ họa",
        "Xin phép photographer/designer",
      ],
    },
    {
      icon: Music,
      title: "Âm nhạc & Audio",
      description: "Bài hát, nhạc nền, podcast, sound effects",
      protectionTime: "50-70 năm từ khi phát hành",
      examples: [
        "Bài hát pop",
        "Nhạc phim",
        "Jingle quảng cáo",
        "Sound effects",
      ],
      violations: [
        "Sử dụng nhạc làm nền video YouTube",
        "Stream nhạc có b��n quyền trái phép",
        "Remix không xin phép",
        "Sử dụng trong sản phẩm thương mại",
      ],
      goodPractices: [
        "Mua license từ tác giả/label",
        "Sử dụng royalty-free music",
        "Tạo nhạc gốc",
        "Sử dụng Creative Commons music",
      ],
    },
    {
      icon: Video,
      title: "Video & Phim",
      description: "Phim, video clip, stream, animation",
      protectionTime: "50-70 năm từ khi sản xuất",
      examples: ["Phim Hollywood", "Video TikTok", "Stream game", "Animation"],
      violations: [
        "Tải lên phim bản quyền",
        "Sử dụng clip phim trong video",
        "Re-upload video của người khác",
        "Screen recording Netflix, Disney+",
      ],
      goodPractices: [
        "Tạo video gốc 100%",
        "Mua license sử dụng",
        "Fair use cho review/giáo dục",
        "Xin phép tác giả video",
      ],
    },
  ];

  const legalConcepts = [
    {
      icon: Copyright,
      title: "Bản quyền (Copyright)",
      definition:
        "Quyền độc quyền của tác giả đối với tác phẩm do mình sáng tạo",
      scope: "Tự động có từ khi tác phẩm được tạo ra, không cần đăng ký",
      examples: ["Sách", "Nhạc", "Phim", "Phần mềm", "Website"],
    },
    {
      icon: Shield,
      title: "Sở hữu trí tuệ",
      definition: "Quyền pháp lý đối với các sáng tạo trí tuệ",
      scope: "Bao gồm bản quyền, thương hiệu, bằng sáng chế",
      examples: ["Logo Apple", "Công thức Coca-Cola", "Thuật toán Google"],
    },
    {
      icon: Users,
      title: "Fair Use/Sử dụng hợp lý",
      definition: "Sử dụng tác phẩm có bản quyền mà không cần xin phép",
      scope: "Giáo dục, nghiên cứu, phê bình, tin tức",
      examples: ["Review phim", "Trích dẫn trong luận văn", "Parody"],
    },
    {
      icon: Lock,
      title: "Creative Commons",
      definition: "Hệ thống license cho phép chia sẻ có điều kiện",
      scope: "Các mức độ từ attribution đến no derivatives",
      examples: ["Wikipedia", "Unsplash", "Freepik CC"],
    },
  ];

  const quickGuides = [
    {
      title: "Kiểm tra bản quyền nhanh",
      icon: CheckCircle,
      steps: [
        "Tìm hiểu nguồn gốc tác phẩm",
        "Kiểm tra license và điều khoản",
        "Xác định mục đích sử dụng",
        "Liên hệ tác giả nếu cần",
      ],
    },
    {
      title: "Tạo nội dung an toàn",
      icon: Shield,
      steps: [
        "Sử dụng tài nguyên Creative Commons",
        "Tạo nội dung gốc 100%",
        "Ghi nguồn trích dẫn rõ ràng",
        "Tôn trọng quyền riêng tư",
      ],
    },
    {
      title: "Chia sẻ có trách nhiệm",
      icon: Users,
      steps: [
        "Kiểm tra tính chính xác thông tin",
        "Khai báo lợi ích thương mại",
        "Bảo vệ thông tin cá nhân",
        "Tránh nội dung gây hiểu lầm",
      ],
    },
  ];

  const socialMediaLaws = [
    {
      platform: "Facebook & Instagram",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      rules: [
        "Không đăng nội dung bạo lực, khích động thù hận",
        "Không spam, fake news hoặc thông tin sai lệch",
        "Tôn trọng bản quyền ảnh, video, nhạc",
        "Không bán hàng trái phép, hàng giả",
        "Bảo vệ quyền riêng tư người khác",
      ],
      violations: [
        "Phạt 10-30 triệu với cá nhân",
        "Phạt 30-100 triệu với tổ chức",
        "Block tài kho���n vĩnh viễn",
        "Khởi kiện hình sự nếu nghiêm trọng",
      ],
    },
    {
      platform: "TikTok & YouTube",
      icon: Video,
      color: "from-red-500 to-pink-600",
      rules: [
        "Không sử dụng nhạc có bản quyền trái phép",
        "Không re-upload video của người khác",
        "Tuân thủ Community Guidelines",
        "Khai báo hợp tác thương mại (#ad)",
        "Không livestream nội dung nhạy cảm",
      ],
      violations: [
        "Strike và gỡ video",
        "Tạm khóa monetization",
        "Phạt tiền theo luật Việt Nam",
        "Xóa kênh nếu vi phạm nghiêm trọng",
      ],
    },
    {
      platform: "Zalo & Telegram",
      icon: Smartphone,
      color: "from-green-500 to-emerald-600",
      rules: [
        "Không spam tin nhắn hàng loạt",
        "Không chia sẻ thông tin cá nhân trái phép",
        "Tuân thủ luật bảo vệ dữ liệu cá nhân",
        "Không tạo nhóm lừa đảo, đa cấp",
        "Báo cáo nội dung vi phạm kịp thời",
      ],
      violations: [
        "Khóa tài khoản tạm thời/vĩnh viễn",
        "Phạt hành chính 5-75 triệu",
        "Phạt hình sự nếu lừa đảo",
        "Bồi thường thiệt hại cho nạn nhân",
      ],
    },
  ];

  const vietnamLaws = [
    {
      title: "Nghị định 15/2020/NĐ-CP",
      icon: Scale,
      description:
        "Xử phạt vi phạm hành chính trong lĩnh vực bưu chính, viễn thông, tần số vô tuyến điện và công nghệ thông tin",
      keyPoints: [
        "Phạt 10-20 triệu: Đăng tải thông tin sai sự thật",
        "Phạt 20-30 triệu: Xúc phạm uy tín tổ chức/cá nhân",
        "Phạt 30-50 triệu: Kích động bạo lực, tệ nạn xã hội",
        "Phạt 50-100 triệu: Tuyên truyền chống phá nhà nước",
      ],
    },
    {
      title: "Luật An toàn thông tin mạng 2015",
      icon: Shield,
      description:
        "Quy định về bảo vệ an toàn thông tin mạng, phòng chống tấn công mạng",
      keyPoints: [
        "Bảo vệ hệ thống thông tin quan trọng",
        "Phòng chống virus, mã độc",
        "Bảo mật dữ liệu cá nhân",
        "Ứng cứu sự cố an toàn thông tin",
      ],
    },
    {
      title: "Luật Bảo vệ dữ liệu cá nhân 2023",
      icon: Lock,
      description:
        "Quy định về xử lý dữ liệu cá nhân, quyền của chủ thể dữ liệu",
      keyPoints: [
        "Đồng ý rõ ràng khi thu thập dữ liệu",
        "Quyền được biết, sửa đổi, xóa dữ liệu",
        "Thông báo khi có rò rỉ dữ liệu",
        "Phạt tới 5% doanh thu hoặc 50 tỷ đồng",
      ],
    },
  ];

  const reportingGuide = [
    {
      title: "Báo cáo vi phạm bản quyền",
      icon: Flag,
      platform: "Nền tảng số",
      steps: [
        "Screenshot/ghi lại bằng chứng vi phạm",
        "Truy cập form báo cáo của platform",
        "Cung cấp thông tin tác phẩm gốc",
        "Đính kèm giấy tờ chứng minh quyền sở hữu",
        "Theo dõi tiến trình xử lý",
      ],
    },
    {
      title: "Khiếu nại pháp lý",
      icon: Gavel,
      platform: "Cơ quan chức năng",
      steps: [
        "Liên hệ Cục Bản quyền tác giả (CPTA)",
        "Nộp đơn khiếu nại kèm bằng chứng",
        "Phối hợp điều tra khi được yêu cầu",
        "Tham gia hòa giải nếu có thể",
        "Khởi kiện ra tòa nếu cần thiết",
      ],
    },
    {
      title: "Tố cáo hình sự",
      icon: Eye,
      platform: "Cơ quan điều tra",
      steps: [
        "Thu thập đầy đủ chứng cứ vi phạm",
        "Tính toán thiệt hại kinh tế (>100 triệu)",
        "Nộp đơn tố cáo lên Công an",
        "Phối hợp cung cấp tài liệu điều tra",
        "Tham gia tố tụng với tư cách bị hại",
      ],
    },
  ];

  const legalConsequences = [
    {
      title: "Phạt hành chính",
      icon: DollarSign,
      color: "bg-yellow-500",
      details: [
        "Cá nhân: 5-75 triệu đồng",
        "Tổ chức: 10-150 triệu đồng",
        "Tịch thu tang vật vi phạm",
        "Đình chỉ hoạt động 1-6 tháng",
      ],
    },
    {
      title: "Trách nhiệm dân sự",
      icon: Scale,
      color: "bg-blue-500",
      details: [
        "Bồi thường thiệt hại thực tế",
        "Bồi thường lợi nhuận bị mất",
        "Chi phí thuê luật sư, công chứng",
        "Công khai xin lỗi, cải chính",
      ],
    },
    {
      title: "Trách nhiệm hình sự",
      icon: Gavel,
      color: "bg-red-500",
      details: [
        "Phạt tiền 50-500 triệu đồng",
        "Cải tạo không giam giữ đến 3 năm",
        "Tù có thời hạn 6 tháng - 3 năm",
        "Tịch thu toàn bộ tài sản vi phạm",
      ],
    },
  ];

  const emergencyContacts = [
    {
      title: "Cơ quan quản lý nhà nước",
      icon: Shield,
      contacts: [
        "Cục Bản quyền tác giả (CPTA): 024.3943.3435",
        "Thanh tra Bộ TT&TT: 024.3943.4630",
        "Cục An toàn thông tin: 024.3943.6969",
        "Hotline báo cáo: 111 (24/7)",
      ],
    },
    {
      title: "Hỗ trợ pháp lý",
      icon: Gavel,
      contacts: [
        "Đoàn Luật sư Hà Nội: 024.3976.1324",
        "Trung tâm Trợ giúp pháp lý: 19003280",
        "Viện Kiểm sát nhân dân: 024.3825.2420",
        "Tòa án nhân dân: tra cứu online",
      ],
    },
    {
      title: "Báo cáo vi phạm online",
      icon: Eye,
      contacts: [
        "Zalo: Báo cáo trong app",
        "Facebook/Meta: support.facebook.com",
        "YouTube: youtube.com/reportabuse",
        "TikTok: support.tiktok.com",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-100">
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pháp Luật Số & Bản Quyền
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Hiểu biết về bản quyền, sở hữu trí tuệ và chia sẻ thông tin hợp pháp
            trong thế giới số
          </p>
        </div>
      </div>

      {/* Legal Concepts Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khái Niệm Pháp Lý Cơ Bản
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những kiến thức nền tảng về luật sở hữu trí tuệ trong thời đại số
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legalConcepts.map((concept, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <concept.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  {concept.definition}
                </p>
                <Badge variant="outline" className="mb-3">
                  {concept.scope}
                </Badge>
                <div className="text-xs text-gray-500">
                  VD: {concept.examples.slice(0, 2).join(", ")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Copyright Types */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Các Loại Bản Quyền Số
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tìm hiểu chi tiết về từng loại tác phẩm và cách sử dụng hợp pháp
            </p>
          </div>

          <div className="space-y-12">
            {copyrightTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 rounded-full bg-white shadow-sm">
                        <type.icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {type.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-800">
                      {type.protectionTime}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Violations */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-red-700">
                        <XCircle className="h-6 w-6 mr-2" />
                        Vi phạm phổ biến
                      </h3>
                      <ul className="space-y-3">
                        {type.violations.map((violation, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{violation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Good Practices */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-green-700">
                        <CheckCircle className="h-6 w-6 mr-2" />
                        Thực hành tốt
                      </h3>
                      <ul className="space-y-3">
                        {type.goodPractices.map((practice, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Action Guides */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Hướng Dẫn Thực Hành Nhanh
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Các bước đơn giản để tuân thủ pháp luật khi tạo và chia sẻ nội dung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickGuides.map((guide, index) => (
            <Card
              key={index}
              className="text-center h-full hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <guide.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {guide.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Media Laws */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📱 Luật Mạng Xã Hội
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quy định pháp lý khi sử dụng Facebook, TikTok, YouTube và các nền
            tảng số khác
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {socialMediaLaws.map((platform, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader
                className={`bg-gradient-to-r ${platform.color} text-white`}
              >
                <platform.icon className="h-10 w-10 mx-auto mb-4" />
                <CardTitle className="text-xl text-center">
                  {platform.platform}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Quy định cần tuân thủ
                    </h4>
                    <ul className="space-y-2">
                      {platform.rules.map((rule, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Hậu quả khi vi phạm
                    </h4>
                    <ul className="space-y-2">
                      {platform.violations.map((violation, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">
                            {violation}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Vietnam Laws */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⚖️ Luật Pháp Việt Nam
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Các văn bản pháp lý chính điều chỉnh hoạt động trên không gian
              mạng
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {vietnamLaws.map((law, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <law.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{law.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {law.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3 text-indigo-700">
                    Điểm chính:
                  </h4>
                  <ul className="space-y-2">
                    {law.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Scale className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Reporting Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚨 Hướng Dẫn Báo Cáo Vi Phạm
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Các bước cụ thể khi phát hiện vi phạm bản quyền hoặc nội dung vi
            phạm pháp luật
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reportingGuide.map((guide, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <guide.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{guide.title}</CardTitle>
                <Badge variant="outline" className="mt-2">
                  {guide.platform}
                </Badge>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {guide.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Legal Consequences */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💰 Hậu Quả Pháp Lý
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mức phạt và trách nhiệm pháp lý khi vi phạm luật về bản quyền và
              thông tin mạng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {legalConsequences.map((consequence, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div
                    className={`w-16 h-16 ${consequence.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <consequence.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{consequence.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {consequence.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-6 max-w-4xl mx-auto">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                ⚠️ Lưu ý quan trọng
              </h3>
              <p className="text-yellow-700">
                Hậu quả pháp lý có thể được áp dụng đồng thời. Việc vi phạm
                nghiêm trọng hoặc tái phạm sẽ bị xử lý theo khung phạt cao nhất.
                Tham khảo luật sư để được tư vấn cụ thể.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              📞 Liên Hệ Khẩn Cấp
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Số điện thoại và địa chỉ cần thiết khi gặp vấn đề pháp lý
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="bg-white text-gray-900">
                <CardHeader className="text-center">
                  <contact.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {contact.contacts.map((info, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <span className="text-sm text-gray-700">{info}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Kiến Thức Pháp Luật = Tự Do Sáng Tạo
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Khi hiểu rõ luật pháp, bạn có thể sáng tạo và chia sẻ một cách tự tin
          và an toàn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Scale className="h-5 w-5 mr-2" />
            Tìm hiểu thêm luật Việt Nam
          </Button>
          <Button size="lg" variant="outline">
            <FileText className="h-5 w-5 mr-2" />
            Tải template license
          </Button>
        </div>
      </div>
    </div>
  );
}
