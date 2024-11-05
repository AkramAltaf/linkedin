import { Avatar, Button } from "@mui/material";
import styled from "styled-components";
import {
  PhotoSizeSelectActual,
  QuestionAnswer,
  Article,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import LinkedInModal from "../LinkedInModal";

const FeedEntry: React.FC = () => {
  const [feedModalOpen, setFeedModalOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setFeedModalOpen(true);
  };

  const handleClose = () => {
    setFeedModalOpen(false);
  };

  return (
    <div className="border border-gray-300 bg-white rounded-xl px-4 pt-4 pb-2">
      <div className="flex items-center gap-2 mb-2">
        <Avatar style={{ height: "48px", width: "48px" }} />
        <FeedEntryButton onClick={handleOpen}>
          Start a post, try writing with AI
        </FeedEntryButton>
        <LinkedInModal
          open={feedModalOpen}
          onClose={handleClose}
          title="title"
          content="content"
          width={"700px"}
        />
      </div>
      <div className="flex items-center justify-around">
        <LinkButton
          startIcon={<PhotoSizeSelectActual style={{ color: "#378FE9" }} />}
        >
          Media
        </LinkButton>
        <StyledLink to="/">
          <QuestionAnswer style={{ color: "#C37D16" }} />
          Contribute expertise
        </StyledLink>
        <StyledLink to="/">
          <Article style={{ color: "#E06847" }} />
          Write article
        </StyledLink>
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

const LinkButton = styled(Button)`
  && {
    background-color: transparent;
    padding: 0.75rem;
    text-transform: none;
    color: #181818;
    border-radius: 4px;

    &:hover {
      background-color: #f3f3f3;
      color: #181818;
    }
  }
`;

const StyledLink = styled(Link)`
  background-color: transparent;
  padding: 0.75rem;
  text-transform: none;
  color: #181818;
  display: flex;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: #f3f3f3;
    color: #181818;
  }

  svg {
    margin-right: 0.5rem;
  }
`;
