import React from "react";
import FeedEntry from "../components/feed/FeedEntry";
import FeedSharedCard from "../components/feed/FeedSharedCard";

const Home: React.FC = () => {
  return (
    <>
      <FeedEntry />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <FeedSharedCard
          userAvatar="https://randomuser.me/api/portraits/men/32.jpg"
          userName="John Doe"
          postTime="3h ago"
          postContent="Excited to share my new project with you all!"
          postImage="https://via.placeholder.com/500x300"
        />
      </div>
    </>
  );
};

export default Home;
