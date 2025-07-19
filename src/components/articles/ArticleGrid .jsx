const articles = [
  {
    date: "Feb 21, 2024",
    timeToRead: "15 min read",
    title: "Tutorial for Building Powerful Apps",
    author: "Nolan White",
    image:
      "https://www.shutterstock.com/image-photo/people-watching-video-live-streamings-260nw-1338120284.jpg",
  },
  {
    date: "Feb 22, 2024",
    timeToRead: "10 min read",
    title: "Redefining Efficiency in Workflows",
    author: "Nolan White",
    image:
      "https://hayotfilms.com/wp-content/uploads/2024/12/videoeditors-work.jpg",
  },
  {
    date: "Feb 24, 2024",
    timeToRead: "12 min read",
    title: "Potential of Seamless Data Management",
    author: "Nolan White",
    image:
      "https://t4.ftcdn.net/jpg/05/46/01/69/360_F_546016914_qE7KlgNMJCzFSueLhBZ1Qo7NbmIVfu9e.jpg",
  },
  {
    date: "Feb 7, 2024",
    timeToRead: "15 min read",
    title: "Unleash Your Creativity",
    author: "Nolan White",
    image:
      "https://specials-images.forbesimg.com/imageserve/5f8cca791613c7699a9323f3/960x0.jpg?fit=scale",
  },
  {
    date: "Aug 22, 2024",
    timeToRead: "20 min read",
    title: "Mastering Workflow Automation with Flexify",
    author: "Nolan White",
    image:
      "https://cdn-faoln.nitrocdn.com/YtYZppaEPxIroVGEZHYGsMtixDlhNZjn/assets/images/optimized/rev-0160257/www.flixcheck.de/wp-content/uploads/2024/08/workflow_system-e1724756568203.jpg",
  },
  {
    date: "Jul 5, 2024",
    timeToRead: "22 min read",
    title: "Flexify's App Building Magic",
    author: "Nolan White",
    image:
      "https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg",
  },
  {
    date: "Jun 15, 2024",
    timeToRead: "18 min read",
    title: "Flexify's Data Integration Capabilities",
    author: "Nolan White",
    image:
      "https://www.cio.com/wp-content/uploads/2025/05/2099497-0-06971900-1747370550-shutterstock_2136788109.jpg?quality=50&strip=all",
  },
  {
    date: "Mar 24, 2024",
    timeToRead: "20 min read",
    title: "Your First Data-Driven App",
    author: "Nolan White",
    image:
      "https://www.smartdatacollective.com/wp-content/uploads/2020/07/data-driven-app-development-scaled.jpg",
  },
  {
    date: "Apr 12, 2024",
    timeToRead: "15 min read",
    title: "Unleashing the Power of Automation",
    author: "Nolan White",
    image:
      "https://www.wealthformula.com/wp-content/uploads/2024/09/AEG_Banner_Blog_APAC_2023_05_08.webp",
  },
  {
    date: "Mar 18, 2024",
    timeToRead: "12 min read",
    title: "A Masterclass in User-Centric Design",
    author: "Nolan White",
    image:
      "https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-16/8690c020-3f7c-11eb-ba02-af36eefa2322.jpg",
  },
  {
    date: "Feb 22, 2024",
    timeToRead: "10 min read",
    title: "Symphony of Data Orchestration",
    author: "Nolan White",
    image:
      "https://cdn.prod.website-files.com/6541750d4db1a741ed66738c/65df1a1a68550759e7926ffa_Apache_Kafka_data_Admin%20API.webp",
  },
  {
    date: "Jan 15, 2024",
    timeToRead: "8 min read",
    title: "Unveiling the Secrets of Data Alchemy",
    author: "Nolan White",
    image:
      "https://www.key4biz.it/wp-content/uploads/2025/06/thumbnail_image004-1.jpg",
  },
];

const ArticleGrid = () => {
  return (
    <div className="pt-24 px-2 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl border border-[#ffffff14] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:border-[#ffffff22]"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 space-y-2">
              <div className="text-white/60 text-sm">
                {article.date} · {article.timeToRead}
              </div>
              <h3 className="text-white text-lg font-semibold">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 pt-2">
                <img
                  src="https://i.pravatar.cc/32?u=nolanwhite"
                  className="w-6 h-6 rounded-full"
                  alt="Nolan White"
                />
                <span className="text-sm text-white/90">{article.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
