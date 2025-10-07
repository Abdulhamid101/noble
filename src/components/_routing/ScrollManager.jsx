import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if there's a hash, try to scroll to it after paint
    if (hash) {
      // timeout lets the page render before measuring
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // smooth scroll, offset friendly if you have a sticky header
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    // otherwise go to top
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
