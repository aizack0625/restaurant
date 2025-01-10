"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // チェックボックスの状態も解除
    const checkbox = document.getElementById('menu-btn');
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <div className="headerArea">
      <header>
        <nav className="gMenu">
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            checked={isMenuOpen}
            onChange={(e) => setIsMenuOpen(e.target.checked)}
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li><Link href={`/`} onClick={handleLinkClick}>home</Link></li>
            <li><Link href={`/concept/`} onClick={handleLinkClick}>concept</Link></li>
            <li><Link href={`/menu/`} onClick={handleLinkClick}>menu</Link></li>
            <li><Link href={`/info/`} onClick={handleLinkClick}>info</Link></li>
            <li><Link href={`/news/`} onClick={handleLinkClick}>news</Link></li>
            <li><Link href={`/admin/`} onClick={handleLinkClick}>admin</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
