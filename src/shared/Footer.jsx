import { LuPlane as Plane } from "react-icons/lu";
import { FaFacebook as Facebook, FaInstagram as Instagram, FaTwitter as Twitter, FaYoutube as Youtube } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        <div>
          <div className="mb-4 flex items-center gap-2">
            <Plane className="text-[var(--primary)]" size={26} />
            <h2 className="text-2xl font-bold text-[var(--text)]">
              Tourify
            </h2>
          </div>

          <p className="leading-7 text-[var(--text-muted)]">
            Discover unforgettable adventures around the globe.
            Explore mountains, beaches, cities, and cultures with
            carefully crafted tours.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[var(--text)]">
            Explore
          </h3>

          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/tours"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                Tours
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[var(--text)]">
            Popular Destinations
          </h3>

          <ul className="space-y-3 text-[var(--text-muted)]">
            <li>🇨🇭 Switzerland</li>
            <li>🇯🇵 Japan</li>
            <li>🇮🇩 Bali</li>
            <li>🇬🇷 Greece</li>
            <li>🇳🇿 New Zealand</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[var(--text)]">
            Stay Updated
          </h3>

          <p className="mb-4 text-[var(--text-muted)]">
            Subscribe to receive travel inspiration and exclusive deals.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-2 text-[var(--text)] outline-none focus:border-[var(--primary)]"
            />

            <button
              className="rounded-lg bg-[var(--primary)] py-2 font-medium text-white transition hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">

          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Tourify. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-full p-2 text-[var(--text-muted)] transition hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="rounded-full p-2 text-[var(--text-muted)] transition hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="rounded-full p-2 text-[var(--text-muted)] transition hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]"
            >
              <Twitter size={20} />
            </a>

            <a
              href="#"
              className="rounded-full p-2 text-[var(--text-muted)] transition hover:bg-[var(--surface-secondary)] hover:text-[var(--primary)]"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;