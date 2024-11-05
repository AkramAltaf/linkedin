import { Avatar, Button } from "@mui/material";
import styled from "styled-components";
import {
  PhotoSizeSelectActual,
  QuestionAnswer,
  Article,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const FeedEntry: React.FC = () => {
  return (
    <div className="border border-gray-300 bg-white rounded-xl px-4 pt-4 pb-2">
      <div className="flex items-center gap-2 mb-2">
        <Avatar style={{ height: "48px", width: "48px" }} />
        <FeedEntryButton>Start a post, try writing with AI</FeedEntryButton>
      </div>
      <div className="flex items-center justify-around">
        <Button
          startIcon={<PhotoSizeSelectActual style={{ color: "#378FE9" }} />}
          className=""
          sx={{
            backgroundColor: "transparent",
            padding: "0.75rem 0.5rem",
            color: "#666666",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#F3F3F3",
              color: "#181818",
            },
          }}
        >
          Media
        </Button>
        <Link to="/" className="">
          <QuestionAnswer />
          Contribute expertise
        </Link>
        <Link to="/">
          <Article />
          Write article
        </Link>
      </div>
    </div>
  );
};

export default FeedEntry;

const FeedEntryButton = styled(Button)`
  && {
    display: block;
    text-align: left;
    border-radius: 50px;
    border: 1px solid #ddd;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.textSecondary};
    background-color: white;
    font-size: 13px;
    font-weight: bold;
    width: 100%;
    height: 48px;
    text-transform: none;

    &:hover {
      background-color: #f7f7f7;
      color: #181818;
    }
  }
`;
