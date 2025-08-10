import React, { useState } from "react";
import {
  Users,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Shield,
  ExternalLink,
  Search,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WebsiteReport {
  id: string;
  url: string;
  domain: string;
  status: "safe" | "suspicious" | "dangerous" | "unknown";
  trustScore: number;
  reportCount: number;
  upvotes: number;
  downvotes: number;
  lastUpdate: string;
  description: string;
  reportedBy: string;
  category: string;
}

const mockReports: WebsiteReport[] = [
  {
    id: "1",
    url: "https://fake-vietcombank.com",
    domain: "fake-vietcombank.com",
    status: "dangerous",
    trustScore: 15,
    reportCount: 89,
    upvotes: 85,
    downvotes: 4,
    lastUpdate: "2 giờ trước",
    description:
      "Website giả mạo Vietcombank, steal thông tin đăng nhập và mật khẩu",
    reportedBy: "Cộng đồng",
    category: "Giả mạo ngân hàng",
  },
  {
    id: "2",
    url: "https://shop-fake-nike.vn",
    domain: "shop-fake-nike.vn",
    status: "suspicious",
    trustScore: 45,
    reportCount: 23,
    upvotes: 18,
    downvotes: 5,
    lastUpdate: "1 ngày trước",
    description: "Bán giày Nike fake với giá rẻ, nhận tiền không giao hàng",
    reportedBy: "Người dùng",
    category: "Lừa đảo mua bán",
  },
  {
    id: "3",
    url: "https://vnexpress.net",
    domain: "vnexpress.net",
    status: "safe",
    trustScore: 95,
    reportCount: 1250,
    upvotes: 1180,
    downvotes: 70,
    lastUpdate: "1 tuần trước",
    description: "Trang tin tức uy tín, an toàn",
    reportedBy: "Cộng đồng",
    category: "Tin tức",
  },
  {
    id: "4",
    url: "https://invest-crypto-pro.com",
    domain: "invest-crypto-pro.com",
    status: "dangerous",
    trustScore: 8,
    reportCount: 156,
    upvotes: 142,
    downvotes: 14,
    lastUpdate: "30 phút trước",
    description: "Sàn đ���u tư crypto giả, lừa tiền của nhiều người",
    reportedBy: "Chuyên gia",
    category: "Đầu tư lừa đảo",
  },
];

export default function CommunityReports() {
  const [reports, setReports] = useState<WebsiteReport[]>(mockReports);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<
    "all" | "safe" | "suspicious" | "dangerous"
  >("all");

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" || report.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: WebsiteReport["status"]) => {
    switch (status) {
      case "safe":
        return "text-green-600 bg-green-100 dark:bg-green-900/20";
      case "suspicious":
        return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20";
      case "dangerous":
        return "text-red-600 bg-red-100 dark:bg-red-900/20";
      case "unknown":
        return "text-gray-600 bg-gray-100 dark:bg-gray-800";
      default:
        return "text-gray-600 bg-gray-100 dark:bg-gray-800";
    }
  };

  const getStatusIcon = (status: WebsiteReport["status"]) => {
    switch (status) {
      case "safe":
        return <Shield className="h-4 w-4" />;
      case "suspicious":
        return <AlertTriangle className="h-4 w-4" />;
      case "dangerous":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: WebsiteReport["status"]) => {
    switch (status) {
      case "safe":
        return "AN TOÀN";
      case "suspicious":
        return "NGHI NGỜ";
      case "dangerous":
        return "NGUY HIỂM";
      case "unknown":
        return "CHƯA RÕ";
      default:
        return "CHƯA RÕ";
    }
  };

  const getTrustScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center">
          <Users className="h-6 w-6 mr-2 text-blue-600" />
          🛡️ Đánh Giá An Toàn Website
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Hệ thống đánh giá độ tin cậy từ cộng đồng - tương tự chongluadao.vn
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Nhập tên website để kiểm tra..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          {["all", "safe", "suspicious", "dangerous"].map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter as any)}
            >
              {filter === "all"
                ? "Tất cả"
                : filter === "safe"
                  ? "An toàn"
                  : filter === "suspicious"
                    ? "Nghi ngờ"
                    : "Nguy hiểm"}
            </Button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredReports.map((report) => (
          <Card
            key={report.id}
            className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge className={getStatusColor(report.status)}>
                      {getStatusIcon(report.status)}
                      <span className="ml-1">
                        {getStatusText(report.status)}
                      </span>
                    </Badge>
                    <Badge variant="outline">{report.category}</Badge>
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    {report.domain}
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {report.url}
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`text-2xl font-bold ${getTrustScoreColor(report.trustScore)}`}
                  >
                    {report.trustScore}
                  </div>
                  <div className="text-xs text-gray-500">Điểm tin cậy</div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {report.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                  <span>📊 {report.reportCount} báo cáo</span>
                  <span>⏱️ {report.lastUpdate}</span>
                  <span>👤 {report.reportedBy}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ThumbsUp className="h-4 w-4 text-green-600" />
                    </Button>
                    <span className="text-green-600 font-medium">
                      {report.upvotes}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ThumbsDown className="h-4 w-4 text-red-600" />
                    </Button>
                    <span className="text-red-600 font-medium">
                      {report.downvotes}
                    </span>
                  </div>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Xem
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Submit Report CTA */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600">
        <CardContent className="p-6 text-center">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            🤝 Cùng xây dựng cộng đồng an toàn
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Bạn có thể đánh giá và báo cáo website để giúp cộng đồng tránh được
            lừa đảo
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              ➕ Thêm đánh giá website
            </Button>
            <Button variant="outline">🔍 Kiểm tra website khác</Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="text-2xl font-bold text-green-600">2,450</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Website an toàn
          </div>
        </div>
        <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <div className="text-2xl font-bold text-red-600">1,127</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Website nguy hiểm
          </div>
        </div>
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">15,892</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Lượt đánh giá
          </div>
        </div>
        <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">8,445</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Thành viên
          </div>
        </div>
      </div>
    </div>
  );
}
