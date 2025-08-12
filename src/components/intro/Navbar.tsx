export default function Navbar() {
  return (
    <div className="relative z-10 h-[72px] rounded-[40px] bg-[rgba(0,0,0,0.6)] py-[10px] px-[48px] flex justify-between">
      <div className="w-[173px] h-[52px]  p-[10px]">
        <a className="h-[32px] gap-[10px] flex flex-row">
          <img className="size-[32px]"></img>
          <h1 className="text-[20px] text-[#CDD4F9]">Segundo</h1>
        </a>
      </div>
      <nav
        className="flex items-center"
        style={{ fontFamily: "Satoshi-Light" }}
      >
        <ul className="flex flex-row text-white gap-[32px]">
          <li>
            <a>Platform</a>
          </li>
          <li>
            <a>Process</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
