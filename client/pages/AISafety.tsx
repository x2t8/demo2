import {
  Bot,
  Brain,
  Eye,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  Camera,
  Mic,
  FileText,
  Search,
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

export default function AISafety() {
  const aiApplications = [
    {
      icon: Bot,
      title: "Chatbot & AI Assistant",
      description: "ChatGPT, Gemini, Claude - Trợ lý AI thông minh",
      benefits: [
        "Hỗ trợ học tập và nghiên cứu",
        "Viết và chỉnh sửa văn bản",
        "Giải đáp thắc mắc nhanh chóng", // Sửa "nhanh ch��ng"
        "Brainstorming ý tưởng",         // Sửa "�� tưởng"
      ],
      risks: [
        "Thông tin có thể không chính xác",
        "Thiếu suy nghĩ phản biện",
        "Phụ thuộc quá mức vào AI",
        "Vi phạm bản quyền nếu sao chép",
      ],
      tips: [
        "Luôn ki��m tra thông tin từ AI",
        "Sử dụng AI như công cụ hỗ trợ, không thay thế",
        "Không chia sẻ thông tin nhạy cảm",
        "Ghi nhận nguồn khi sử dụng AI",
      ],
    },
    {
      icon: Camera,
      title: "AI Tạo Hình Ảnh",
      description: "Midjourney, DALL-E, Stable Diffusion",
      benefits: [
        "Tạo artwork và illustration",
        "Design đồ họa nhanh chóng",
        "Concept art và prototype",
        "Giáo dục và giải trí",
      ],
      risks: [
        "Deepfake và hình ảnh giả",
        "Vi phạm bản quyền hình ảnh",
        "Nội dung không phù hợp",
        "Nhầm lẫn thật-giả",
      ],
      tips: [
        "Kiểm tra nguồn gốc hình ảnh",   // Sửa "nguồn g��c"
        "Sử dụng watermark khi cần",
        "Không tạo hình ảnh có hại",
        "Tôn trọng quyền riêng tư người khác",
      ],
    },
    {
      icon: Mic,
      title: "AI Giọng Nói",
      description: "Text-to-speech, voice cloning, audio AI",
      benefits: [
        "Hỗ trợ người khuyết tật",
        "Tạo nội dung audio",
        "Học ngoại ngữ",
        "Chatbot có giọng nói",
      ],
      risks: [
        "Voice deepfake lừa đảo",
        "Giả mạo giọng nói người khác",
        "Tin tức giả với âm thanh",
        "Quấy rối qua giọng nói AI",
      ],
      tips: [
        "Xác thực qua nhiều kênh",
        "Nghi ngờ cuộc gọi lạ",
        "Không tin hoàn toàn vào giọng nói",
        "Báo cáo nếu gặp voice deepfake",
      ],
    },
    {
      icon: Search,
      title: "AI Tìm Kiếm & Phân Tích",
      description: "AI-powered search, data analysis",
      benefits: [
        "Tìm kiếm thông tin chính xác",
        "Phân tích dữ liệu phức tạp",
        "Tóm tắt nội dung dài",
        "Dịch thuật tự động",
      ],
      risks: [
        "Bias trong kết quả tìm kiếm",
        "Thông tin thiên lệch",
        "Filter bubble effect",
        "Mất khả năng tư duy độc lập",
      ],
      tips: [
        "So sánh nhiều nguồn thông tin",
        "Tìm hiểu cách AI hoạt động",    // Sửa "hoạt đ��ng"
        "Đặt câu hỏi phản biện",
        "Giữ thói quen suy nghĩ độc lập",
      ],
    },
  ];

  const deepfakeDetection = [
    {
      type: "Video Deepfake",
      signs: [
        "Chuyển động mắt không tự nhiên",
        "Đồng bộ môi-âm thanh kém",
        "Chất lượng ảnh không đồng đều", // Sửa "không đ���ng đều"
        "Ánh sáng và bóng đổ lạ",
        "Tóc và viền mặt mờ ảo",
      ],
    },
    {
      type: "Audio Deepfake",
      signs: [
        "Giọng nói máy móc, thiếu cảm xúc",
        "Tốc độ nói không nhất quán",
        "Âm thanh nền bất thường",
        "Phát âm một số từ kỳ lạ",
        "Chất lượng âm thanh khác biệt",
      ],
    },
    {
      type: "Text AI-Generated",
      signs: [
        "Văn phong quá hoàn hảo",
        "Thiếu cá tính, cảm xúc cá nhân",
        "Lặp lại cấu trúc câu",
        "Thông tin chung chung, mơ hồ",
        "Không có trải nghiệm cụ thể",   // Sửa "Không c��"
      ],
    },
  ];

  const aiEthics = [
    {
      icon: Shield,
      title: "Sử dụng AI có trách nhiệm",
      principles: [
        "Minh bạch về việc sử dụng AI",
        "Không tạo nội dung có hại",
        "Tôn trọng quyền riêng tư",
        "Không phân biệt đối xử",
      ],
    },
    {
      icon: Eye,
      title: "Nhận biết AI-generated content", // Sửa "Nh��n biết"
      principles: [
        "Luôn kiểm tra nguồn gốc",
        "Tìm hiểu các dấu hiệu AI",
        "Sử dụng công cụ detection",
        "Giáo dục người khác",
      ],
    },
    {
      icon: Brain,
      title: "Giữ tư duy phản biện",
      principles: [
        "Đặt câu hỏi về thông tin AI",
        "So sánh nhiều nguồn",
        "Phát triển critical thinking",
        "Không phụ thuộc hoàn toàn vào AI",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
      <Header />
      <DisclaimerBanner />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI An Toàn & Ứng Dụng Thông Minh
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Khám phá ứng dụng AI trong cuộc sống và cách sử dụng an toàn, hiệu
            quả, có trách nhiệm
          </p>
        </div>
      </div>

      {/* AI Applications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ứng Dụng AI Phổ Biến Hiện Nay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá lợi ích, rủi ro và cách sử dụng an toàn các công nghệ AI
          </p>
        </div>

        <div className="space-y-12">
          {aiApplications.map((app, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full bg-white shadow-sm">
                    <app.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{app.title}</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {app.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-green-700">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      Lợi ích
                    </h3>
                    <ul className="space-y-3">
                      {app.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Risks */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-red-700">
                      <AlertTriangle className="h-6 w-6 mr-2" />
                      Rủi ro
                    </h3>
                    <ul className="space-y-3">
                      {app.risks.map((risk, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Safety Tips */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-700">
                      <Shield className="h-6 w-6 mr-2" />
                      Cách sử dụng an toàn
                    </h3>
                    <ul className="space-y-3">
                      {app.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
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

      {/* Deepfake Detection */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nhận Biết Deepfake & Nội Dung AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Các d��u hiệu để phát hiện nội dung được tạo bởi AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deepfakeDetection.map((detection, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <Badge variant="destructive" className="mb-4 mx-auto">
                    {detection.type}
                  </Badge>
                  <CardTitle className="text-xl">Dấu hiệu nhận biết</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {detection.signs.map((sign, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Eye className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{sign}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* AI Ethics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Đạo Đức AI & Sử Dụng Có Trách Nhiệm // Sửa "Sử D��ng"
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nguyên tắc đạo đức khi tương tác với công nghệ AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiEthics.map((ethics, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <ethics.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{ethics.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {ethics.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Zap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm text-left">
                        {principle}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AI for Students Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎓 AI và Học Sinh/Sinh Viên
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hướng dẫn sử dụng AI trong học tập một cách đúng đắn và c�� trách
              nhiệm
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Should Do */}
            <Card className="border-green-200 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="text-xl text-green-800 dark:text-green-200 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />✅ NÊN LÀM // Sửa "N��N"
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Brainstorming ý tưởng
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Dùng AI để khám phá các góc nhìn mới cho bài tập
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Giải thích khái niệm khó
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Hỏi AI giải th��ch bằng ngôn ngữ đơn giản
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Luyện tập ngôn ngữ
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Chat với AI để cải thiện kỹ năng giao tiếp
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Kiểm tra ngữ pháp
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nhờ AI sửa lỗi chính tả và ngữ pháp
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Should Not Do */}
            <Card className="border-red-200 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="bg-red-50 dark:bg-red-900/20">
                <CardTitle className="text-xl text-red-800 dark:text-red-200 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />❌ KHÔNG NÊN LÀM
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Copy nguyên văn bài AI viết
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Vi phạm quy tắc học thuật và bản quyền
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Làm bài tập hoàn toàn bằng AI
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Mất đi cơ hội học hỏi và phát triển tư duy
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Nộp bài không ghi nguồn AI
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Thiếu trung thực trong học thuật
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Tin hoàn toàn vào thông tin AI
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        AI có thể đưa ra thông tin sai hoặc lỗi thời
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI in Workplace Section */}
      <div className="bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              💼 AI Trong Công Việc
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Sử dụng AI để nâng cao hiệu qu��� công việc một cách an toàn và
              chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Safe Uses */}
            <Card className="border-blue-200 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-xl text-blue-800 dark:text-blue-200">
                  AN TOÀN
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Viết email draft chuyên nghiệp
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Tóm tắt meeting notes
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Phân tích dữ liệu cơ bản
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Dịch tài liệu nhanh
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Tạo presentation outline
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Risks */}
            <Card className="border-orange-200 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="bg-orange-50 dark:bg-orange-900/20 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl text-orange-800 dark:text-orange-200">
                  RỦI RO
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Chia sẻ thông tin công ty với AI public
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Tin hoàn toàn vào AI analysis
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Thay thế hoàn toàn tư duy con người
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Không kiểm tra kết quả AI
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Upload dữ liệu nhạy cảm lên AI
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Best Practices */}
            <Card className="border-purple-200 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-xl text-purple-800 dark:text-purple-200">
                  THỰC HÀNH TỐT
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Zap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Xin phép trước khi dùng AI
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Luôn review và edit kết quả AI
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Sử dụng AI nội bộ công ty
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Ghi rõ khi sử dụng AI
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Học cách prompt hiệu quả
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* AI Detection Infographic */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              👁️ Nhận Biết Nội Dung AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              So sánh đặc điểm giữa nội dung do con người và AI tạo ra
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Human Content */}
            <Card className="border-green-200 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="bg-green-50 dark:bg-green-900/20 text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👤</span>
                </div>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200">
                  HUMAN CONTENT
                </CardTitle>
                <p className="text-green-600 dark:text-green-400">
                  Nội dung do con người tạo
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Cảm xúc tự nhiên
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Thể hiện cảm xúc chân thực, có chiều sâu
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Chi tiết cá nhân
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Có trải nghiệm và câu chuyện riêng
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Lỗi nhỏ bình thường
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Có thể có lỗi chính tả, ngữ pháp nhỏ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Phong cách nhất quán
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Giữ được tính cách và style riêng
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Context phù hợp
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Hiểu rõ bối cảnh và văn hóa
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Content */}
            <Card className="border-orange-200 dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="bg-orange-50 dark:bg-orange-900/20 text-center">
                <div className="w-20 h-20 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-orange-800 dark:text-orange-200">
                  AI GENERATED
                </CardTitle>
                <p className="text-orange-600 dark:text-orange-400">
                  Nội dung do AI tạo ra
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Cảm xúc giả tạo
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Cảm xúc có vẻ được lập trình
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Thông tin chung chung
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Thiếu chi tiết cá nhân cụ thể
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Quá hoàn hảo
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ngữ pháp và cấu trúc quá chuẩn
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Nhảy topic đột ngột
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Chuyển đề không mạch lạc
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Pattern lặp lại
                      </span>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Cấu trúc câu có xu hướng lặp
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Tips */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-gray-600">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  🔍 Mẹo Nhận Biết Nhanh
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-3">
                      <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Đọc kỹ toàn bộ
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Chú ý pattern và cấu trúc
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mb-3">
                      <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Dùng common sense
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Cảm nhận tự nhiên hay giả tạo
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-3">
                      <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Cross-check
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Kiểm tra với nguồn khác
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn Sàng Sử Dụng AI An Toàn?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            AI là công cụ mạnh mẽ - hãy sử dụng một cách thông minh và có trách
            nhiệm
          </p>
        </div>
      </div>
    </div>
  );
}
