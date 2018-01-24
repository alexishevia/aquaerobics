# Aqua Aerobics Workout Generator
A simple app that will randomly generate an aqua aerobic workout for you.

Just visit https://keen-cori-69b1a9.netlify.com and 5 random exercises will be
picked for you.

## Getting Started
This is a simple static site, just start up a local webserver pointing to this
directory and you're ready.

ie: `python -m SimpleHTTPServer`

## How to add a new video
1. download a youtube video using https://y2mate.com/
2. open the video in openshot video editor and cut the part you want
3. export the video using the following settings:
    - Profile: All Formats
    - Target: MP4 (h.264)
    - Video Profile: Mobile 360p
    - Quality: High
4. Upload the video to S3 'aquaerobics' folder using header: `Content-Type: video/mp4`
5. add the video to the `exercises` array in index.js

## Deployment
This app is currently deployed to Netlify using a bitbucket hook (whenever a
new commit is pushed to the bitbucket repo, Netlify will re-deploy the app)

URL: https://keen-cori-69b1a9.netlify.com
