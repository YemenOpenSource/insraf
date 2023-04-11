export default function Footer() {
  return (
    <footer className="bg-slate-50 text-center">
      <div className="flex flex-col items-center border-t border-slate-400/10 py-10 justify-center">
        <p className="mt-6 text-sm text-slate-500 sm:mt-0 font-bolder">
          جميع الحقوق محفوظة {new Date().getFullYear()} &copy;  إنصراف
        </p>
      </div>
    </footer>
  );
}
