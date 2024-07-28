//--------------------------------
// © Ada Maynek 2024
//--------------------------------
import Logo from "@/components/elements/logo"
import Navi from "@/components/elements/navi"

export default function Header() {
  return (
    <>
      <div className="md:flex justify-between">
        <Logo />
        <Navi />
      </div>
    </>
  );
}