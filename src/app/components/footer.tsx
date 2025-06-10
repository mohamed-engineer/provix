// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#161B22] text-gray-400 py-8 text-center space-y-4 text-sm">
      <div className="flex justify-center gap-6 flex-wrap">
        <a href="#services" className="hover:text-white">الخدمات</a>
        <a href="#about" className="hover:text-white">من نحن</a>
        <a href="#contact" className="hover:text-white">تواصل معنا</a>
      </div>
      <div className="flex justify-center gap-4 text-lg">
        <a href="https://facebook.com" target="_blank" className="hover:text-white"><i className="fab fa-facebook" /></a>
        <a href="https://instagram.com" target="_blank" className="hover:text-white"><i className="fab fa-instagram" /></a>
        <a href="https://wa.me/201556157843" target="_blank" className="hover:text-white"><i className="fab fa-whatsapp" /></a>
      </div>
      <p className="text-xs text-gray-500">© {new Date().getFullYear()} جميع الحقوق محفوظة - SRVS Agency</p>
    </footer>
  );
}
