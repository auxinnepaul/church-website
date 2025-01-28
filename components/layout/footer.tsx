import React from "react";
import ThemeToggleSlider from "../theme-toggle-slider";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-800 dark:bg-slate-900 text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              {process.env.NEXT_PUBLIC_CHURCH_ADDRESS}
              <br />
              {process.env.NEXT_PUBLIC_CHURCH_CITY},{" "}
              {process.env.NEXT_PUBLIC_CHURCH_STATE}{" "}
              {process.env.NEXT_PUBLIC_CHURCH_ZIP}
              <br />
              {process.env.NEXT_PUBLIC_CHURCH_PHONE}
              <br />
              {process.env.NEXT_PUBLIC_CHURCH_EMAIL}
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Sermons</li>
              <li>Events</li>
              <li>Ministries</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2">
              <li>Sunday: 9:00 AM</li>
              <li>Sunday: 11:00 AM</li>
              <li>Sunday: 6:00 PM</li>
              <li>Wednesday: 7:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="max-w-40 mx-auto  my-4 md:my-10">
          <ThemeToggleSlider />
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/200 text-center">
          <p>
            &copy; {currentYear} {process.env.NEXT_PUBLIC_CHURCH_NAME}. All
            rights reserved.
          </p>
          <a
            href="https://bricapa.com"
            className="py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered and Built by <span className="text-black">Bricapa</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
