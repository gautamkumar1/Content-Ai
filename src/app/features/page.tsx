import { FaTwitter, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaPinterest } from 'react-icons/fa';

export default function FeaturePage() {
  return (
    <div className="py-20" id="features">
      <h2 className="text-3xl font-bold mb-16 text-center text-white">
        Supercharge Your Social Media Presence
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {[
          {
            title: "Twitter Threads",
            icon: <FaTwitter className="w-10 h-10 mb-4 text-blue-400" />,
            description:
              "Generate compelling Twitter threads that engage your audience and boost your reach.",
          },
          {
            title: "Instagram Captions",
            icon: (
              <FaInstagram className="w-10 h-10 mb-4 text-pink-400" />
            ),
            description:
              "Create catchy captions for your Instagram posts that increase engagement and followers.",
          },
          {
            title: "LinkedIn Posts",
            icon: <FaLinkedin className="w-10 h-10 mb-4 text-blue-600" />,
            description:
              "Craft professional content for your LinkedIn network to establish thought leadership.",
          },
          {
            title: "TikTok Videos",
            icon: <FaTiktok className="w-10 h-10 mb-4 text-black" />,
            description:
              "Create engaging TikTok scripts and ideas to capture your audience's attention.",
          },
          {
            title: "YouTube Descriptions",
            icon: <FaYoutube className="w-10 h-10 mb-4 text-red-600" />,
            description:
              "Generate optimized descriptions for your YouTube videos to enhance discoverability.",
          },
          {
            title: "Pinterest Ideas",
            icon: <FaPinterest className="w-10 h-10 mb-4 text-red-600" />,
            description:
              "Create visually appealing post ideas that attract clicks and saves on Pinterest.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
