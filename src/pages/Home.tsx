import React from "react";
import FeedEntry from "../components/feed/FeedEntry";
import FeedSharedCard from "../components/feed/FeedSharedCard";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <FeedEntry />
      <div className="flex flex-col gap-2">
        <FeedSharedCard
          userAvatar="https://randomuser.me/api/portraits/men/32.jpg"
          userName="John Doe"
          postTime="3h ago"
          postContent="Excited to share my new project with you all!"
          postImage="https://via.placeholder.com/500x300"
        />
        <FeedSharedCard
          userAvatar="https://randomuser.me/api/portraits/men/32.jpg"
          userName="John Doe"
          postTime="3h ago"
          postContent="Excited to share my new project with you all!"
          postImage="https://via.placeholder.com/500x300"
        />
      </div>
    </div>
  );
};

export default Home;
