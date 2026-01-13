import { google } from "googleapis";
// import dotenv from "dotenv";

// dotenv.config(
//     {
//         path:"../../.env"
//     }
// );

// console.log(process.env.YOUTUBE_API_KEY)

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

function getVideoId(url) {
  const match = url.match(
    /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/ 
  );
  return match ? match[1] : null;
}


export const loadDetails = async (req,res) => {
    const {url} = req.body
      const videoId = getVideoId(url);
    //   console.log(28,videoId);
  if (!videoId) {
    console.log("Invalid YouTube URL");
    return;
  }

  const responseAPI = await youtube.videos.list({
    part: ["snippet", "statistics", "contentDetails"],
    id: [videoId],
  });

//   console.log(37,responseAPI.data.items);

  const video = responseAPI.data.items[0];
//   console.log(39,video);

const vidData = {

  "Title": video.snippet.title,
  "Description": video.snippet.description,
  "Views": video.statistics.viewCount,
  "Likes": video.statistics.likeCount,
  "Comments": video.statistics.commentCount,
  "Channel": video.snippet.channelTitle,
  "Published": video.snippet.publishedAt,
  "Duration": video.contentDetails.duration,
  "Thumbnail": video.snippet.thumbnails.high.url,


}

res.status(200).json({
    message:"Got data",
    data:vidData
})

}