import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config(
    {
        path:"../../.env"
    }
);




const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

async function getComments(videoId) {
  const res = await youtube.commentThreads.list({
    part: ["snippet"],
    videoId: videoId,
    maxResults: 50, // change as needed
  });

  res.data.items.forEach((item, index) => {
    const comment =
      item.snippet.topLevelComment.snippet;

    console.log(`\nComment ${index + 1}`);
    console.log("Author:", comment.authorDisplayName);
    console.log("Text:", comment.textDisplay);
    console.log("Likes:", comment.likeCount);
    console.log("Published:", comment.publishedAt);
  });
}

getComments("QTlF-RlZ2Rs");