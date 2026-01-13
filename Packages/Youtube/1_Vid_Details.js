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

async function getVideoData(url) {
  const videoId = getVideoId(url);
  if (!videoId) {
    console.log("Invalid YouTube URL");
    return;
  }

  const res = await youtube.videos.list({
    part: ["snippet", "statistics", "contentDetails"],
    id: [videoId],
  });

  const video = res.data.items[0];
  console.log(video);

  console.log("Title:", video.snippet.title);
  console.log("Description:", video.snippet.description);
  console.log("Views:", video.statistics.viewCount);
  console.log("Likes:", video.statistics.likeCount);
  console.log("Comments:", video.statistics.commentCount);
  console.log("Channel:", video.snippet.channelTitle);
  console.log("Published:", video.snippet.publishedAt);
  console.log("Duration:", video.contentDetails.duration);
  console.log("Thumbnail:", video.snippet.thumbnails.high.url);
}

function getVideoId(url) {
  const match = url.match(
    /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/ 
  );
  return match ? match[1] : null;
}

getVideoData("https://youtu.be/QTlF-RlZ2Rs");
