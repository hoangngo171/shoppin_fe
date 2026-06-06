import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      {/* Top Bar màu tím đậm trên cùng */}
      <div className="bg-purple-950 text-purple-100 text-xs py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span>Chào mừng bạn đến với mẫu web của Shop Pin Siêu Cấp</span>
          <div className="flex items-center gap-4">

  {/* Dropdown Tài Khoản */}
  <div className="relative group">

  {/* Button tài khoản */}
  <button className="hover:underline py-2">
    Tài khoản ▾
  </button>

  {/* Dropdown */}
  <div
    className="
      absolute right-0 top-full
      w-56
      bg-white
      text-gray-700
      rounded-md
      shadow-lg
      opacity-0
      invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all
      duration-200
      z-50
      border
    "
  >

    <Link
      href="/account/login"
      className="block px-4 py-3 hover:bg-purple-100"
    >
      Đăng nhập
    </Link>

    <Link
      href="/account/register"
      className="block px-4 py-3 hover:bg-purple-100"
    >
      Đăng ký
    </Link>
  </div>
</div>

  <Link href="#" className="hover:underline">
    Thanh toán
  </Link>

  <Link href="#" className="hover:underline">
    Cửa hàng
  </Link>

</div>
        </div>
      </div>

      {/* Main Header (Logo, Ô tìm kiếm, Menu) */}
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black text-purple-700 tracking-tight flex items-center gap-1">
          🔋 GiusePin <span className="text-xs text-gray-400 font-normal">PIN SẠC CHÍNH HÃNG</span>
        </Link>

        {/* Ô Tìm Kiếm chính giữa viền tím */}
        <div className="flex w-full md:w-96 border-2 border-purple-600 rounded-md overflow-hidden">
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            className="w-full px-3 py-1.5 text-sm outline-none placeholder-gray-400"
          />
          <button className="bg-purple-600 text-white px-4 hover:bg-purple-700 transition flex items-center justify-center">
            🔍
          </button>
        </div>

        {/* Menu Điều Hướng bên phải */}
        <nav className="flex items-center space-x-1 md:space-x-2 text-sm font-bold text-gray-700">
          <Link href="/" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">Trang chủ</Link>
          <Link href="#" className="hover:bg-purple-50 p-2 rounded-md transition text-purple-900">Sản phẩm ▾</Link>
          <Link href="#" className="hover:bg-purple-50 p-2 rounded-md transition">Thanh toán</Link>
          <Link href="#" className="hover:bg-purple-50 p-2 rounded-md transition">Giới thiệu</Link>
          <Link href="#" className="hover:bg-purple-50 p-2 rounded-md transition">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}