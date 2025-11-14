import Image from "next/image";
import { FaInstagram, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="gradient-text">IRON</span>
              <span className="text-white">MAX</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-zinc-300 hover:text-white transition-colors">About</a>
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors font-semibold">
                Connect
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="gradient-text">IRONMAX</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-zinc-400 font-light mb-6">
                Personal Training & Fitness Coaching
              </p>
              <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                Transform your body and mind through dedicated training, 
                discipline, and the pursuit of strength.
              </p>
              <a href="#contact" className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full transition-colors font-semibold text-lg">
                Let&apos;s Connect
              </a>
            </div>

            {/* Right side - Instagram-style vertical photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="IronMax Trainer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-6 leading-relaxed">
            Certified personal trainer dedicated to helping you achieve your fitness goals
            through personalized training programs and expert guidance.
          </p>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Whether you&apos;re looking to build strength, lose weight, or improve your overall
            fitness, I&apos;m here to support your journey every step of the way.
          </p>
        </div>
      </section>

      {/* Contact/Socials Section */}
      <section id="contact" className="py-20 px-6 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto text-center w-full">
          <h2 className="text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Connect with me on social media or reach out directly
          </p>

          {/* Social Links */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 mb-8">
            <div className="grid gap-6">
              <a 
                href="https://instagram.com/ironmax.fit" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl transition-all hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <FaInstagram className="text-4xl text-pink-500" />
                  <div className="text-left">
                    <div className="text-xl font-semibold text-white">Instagram</div>
                    <div className="text-zinc-400">@ironmax.fit</div>
                  </div>
                </div>
                <span className="text-red-500 group-hover:translate-x-2 transition-transform">→</span>
              </a>

              <a
                href="https://twitter.com/ironmaxfit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl transition-all hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <FaXTwitter className="text-4xl text-white" />
                  <div className="text-left">
                    <div className="text-xl font-semibold text-white">Twitter</div>
                    <div className="text-zinc-400">@ironmaxfit</div>
                  </div>
                </div>
                <span className="text-red-500 group-hover:translate-x-2 transition-transform">→</span>
              </a>

              <a
                href="https://youtube.com/@ironmaxfit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl transition-all hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <FaYoutube className="text-4xl text-red-600" />
                  <div className="text-left">
                    <div className="text-xl font-semibold text-white">YouTube</div>
                    <div className="text-zinc-400">@ironmaxfit</div>
                  </div>
                </div>
                <span className="text-red-500 group-hover:translate-x-2 transition-transform">→</span>
              </a>

              <a
                href="https://tiktok.com/@ironmax_fit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl transition-all hover:scale-105 group"
              >
                <div className="flex items-center gap-4">
                  <FaTiktok className="text-4xl text-white" />
                  <div className="text-left">
                    <div className="text-xl font-semibold text-white">TikTok</div>
                    <div className="text-zinc-400">@ironmax_fit</div>
                  </div>
                </div>
                <span className="text-red-500 group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href="mailto:contact@ironmax.fit"
              className="flex items-center justify-center gap-3 text-lg text-zinc-400 hover:text-white transition-colors"
            >
              <span className="text-red-500 text-2xl">📧</span>
              contact@ironmax.fit
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center text-zinc-400">
          <p>&copy; 2025 IronMax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
