'use client';

import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  oldPrice: string;
  price: string;
  discount: string;
  desc: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lấy link API từ file .env.local: NEXT_PUBLIC_API_URL=http://localhost:8080
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    
    fetch(`${apiUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi kết nối API:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full bg-purple-50 min-h-screen pb-12">
      
      {/* SECTION 1: BANNER LỚN TÍM HOÀNG HÔN */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white relative overflow-hidden shadow-inner">
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Bên trái: Chữ quảng cáo */}
          <div className="max-w-lg space-y-4 text-center md:text-left z-10">
            <span className="bg-white text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Năng Lượng Đột Phá
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight drop-shadow-md">
              Mẫu Pin Siêu Cấp <br />Sức Mạnh Bền Bỉ
            </h2>
            <p className="text-purple-100 text-sm md:text-base font-light leading-relaxed">
              Giảm giá cực sâu lên đến <strong className="text-yellow-300 text-xl font-bold">40%</strong> cho toàn bộ dòng pin sạc và phụ kiện nguồn tuần này!
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-950 font-extrabold py-2.5 px-8 rounded-full text-sm shadow transform hover:scale-105 transition-all">
              ▶ Xem chi tiết
            </button>
          </div>

          {/* Bên phải: Vòng tròn chứa ảnh */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
            <div className="absolute inset-0 bg-yellow-400 rounded-full border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-center text-gray-950 p-6">
                <span className="text-6xl">🔋</span>
                <p className="font-black text-xl mt-2 text-purple-950">Thế Giới Pin Sạc</p>
                <p className="text-xs text-white font-bold bg-purple-600 px-3 py-1 rounded-full mt-1">Giảm đến 40%</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-purple-700 rounded-full border-2 border-white shadow-md flex items-center justify-center text-3xl text-white">
              ⚡
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DANH SÁCH SẢN PHẨM KHUNG TÍM */}
      <main className="container mx-auto px-4 mt-12">
        
        {/* Tiêu đề phân đoạn viền tím */}
        <div className="text-center mb-10 space-y-1">
          <h3 className="text-xl md:text-2xl font-black text-purple-700 uppercase tracking-wide">
            Sản Phẩm Của Chúng Tôi
          </h3>
          <div className="w-24 h-0.5 bg-purple-400 mx-auto"></div>
          <p className="text-xs md:text-sm text-purple-600 italic pt-1">
            Chuyên các dòng pin nhập khẩu chính hãng chất lượng cao.
          </p>
        </div>

        {/* Trạng thái đợi API */}
        {loading ? (
          <div className="text-center text-purple-600 font-bold py-12 animate-pulse">
            🔄 Đang kết nối API Backend lấy danh sách Pin...
          </div>
        ) : (
          /* Lưới sản phẩm viền tím hồng nhạt */
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-purple-100 overflow-hidden flex flex-col justify-between relative group p-4 text-center">
                
                {/* Tag giảm giá tròn màu hồng tím cánh sen nổi bật */}
                {p.discount && (
                  <span className="absolute top-3 left-3 bg-pink-500 text-white text-[10px] font-bold w-9 h-9 flex items-center justify-center rounded-full z-10 shadow-sm">
                    {p.discount}
                  </span>
                )}

                {/* Khu vực ảnh nền tím nhạt */}
                <div className="w-full h-36 bg-purple-50 rounded-lg flex items-center justify-center text-4xl mb-3 group-hover:scale-105 transition-transform duration-200">
                  🔋
                </div>

                {/* Tên sản phẩm */}
                <div className="space-y-1 flex-grow">
                  <h4 className="text-xs md:text-sm font-bold text-gray-800 line-clamp-2 min-h-[32px] hover:text-purple-600 transition cursor-pointer">
                    {p.name}
                  </h4>
                  <p className="text-[11px] text-gray-400 line-clamp-1">{p.desc}</p>
                </div>

                {/* Giá tiền và nút Mua ngay màu tím */}
                <div className="mt-3 pt-2 border-t border-dashed border-gray-100 space-y-2">
                  <div className="flex flex-col items-center justify-center">
                    {p.oldPrice && (
                      <span className="text-[11px] text-gray-400 line-through">{p.oldPrice}</span>
                    )}
                    <span className="text-sm md:text-base font-black text-purple-700">{p.price}</span>
                  </div>
                  
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-1.5 rounded-full transition-colors shadow-sm">
                    Mua ngay
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Nút Xem thêm */}
        <div className="text-center mt-10">
          <button className="border border-purple-400 text-purple-600 bg-white hover:bg-purple-50 px-6 py-1.5 rounded-full text-xs font-bold shadow-sm transition">
            Xem thêm
          </button>
        </div>

      </main>
    </div>
  );
}