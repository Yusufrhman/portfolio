export default function Navbar({}) {
  return (
    <nav className="fixed z-50 text-white font-semibold mx-auto w-fit right-1/2 translate-x-1/2 top-[20px] px-6 py-4 rounded-full bg-black bg-opacity-40 backdrop-blur-sm border border-white/20 ">
      <ul className="flex items-center justify-center gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#projects">Projects</a>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
