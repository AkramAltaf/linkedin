import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from "@mui/material";
import { styled, useTheme } from "styled-components";
import { FaThumbsUp, FaCommentDots, FaShare } from "react-icons/fa";

interface FeedSharedCardProps {
  userAvatar: string;
  userName: string;
  postTime: string;
  postContent: string;
  postImage?: string;
}

// Styled card to use theme values
const StyledCard = styled(Card)`
  margin-bottom: 1.5rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Styled card header
const StyledHeader = styled(CardHeader)`
  .MuiCardHeader-title {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  .MuiCardHeader-subheader {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

// Action buttons
const ActionButton = styled(Button)`
  text-transform: none;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeedSharedCard: React.FC<FeedSharedCardProps> = ({
  userAvatar,
  userName,
  postTime,
  postContent,
  postImage,
}) => {
  const theme = useTheme(); // Access the current theme

  return (
    <StyledCard>
      <StyledHeader
        avatar={<Avatar src={userAvatar} alt={userName} />}
        title={userName}
        subheader={postTime}
      />
      <CardContent>
        <p style={{ color: theme.colors.textPrimary }}>{postContent}</p>
        {postImage && (
          <div className="mt-3">
            <img
              src={postImage}
              alt="Shared post"
              style={{
                width: "100%",
                borderRadius: "8px",
                border: `1px solid ${theme.colors.border}`,
              }}
            />
          </div>
        )}
      </CardContent>
      <CardActions className="flex justify-between px-4 py-2">
        <ActionButton startIcon={<FaThumbsUp />}>Like</ActionButton>
        <ActionButton startIcon={<FaCommentDots />}>Comment</ActionButton>
        <ActionButton startIcon={<FaShare />}>Share</ActionButton>
      </CardActions>
    </StyledCard>
  );
};

export default FeedSharedCard;
