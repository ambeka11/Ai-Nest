import ArticleGrid from "./ArticleGrid ";

const AinestArticle = () => {
  return (
    <div className="text-white min-h-screen pt-24 px-4 py-4">
      <div className="max-w-5xl w-full mx-auto">
        <div className="my-16 gap-y-9">
          <button className="mb-8 rounded-full text-sm bg-white/5 backdrop-blur-1 px-4 py-2">
            CreationHub Article
          </button>
          <h1 className="text-6xl text-gray-300 leading-tight tracking-tight mb-4 font-light">
            The latest articles and <br /> news
          </h1>
          <p className="text-white/70">
            Explore our concise blog for insightful content on tech trends,{" "}
            <br />
            innovation, and actionable insights.
          </p>
        </div>
        <ArticleGrid />
      </div>
    </div>
  );
};
export default AinestArticle;
