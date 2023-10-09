import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-centre flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br  />
        <span className="blue_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="text-lg text-gray-600 sm:text-xl max-w-l mt-5 text-center">
          Prompt-Share is open-source AI prompting tool for  <br />modern world
          to discover ,create and share creative prompts.
      </p>
      <Feed />
    </section>
  );
}

export default Home;