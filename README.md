# Aqua Aerobics Workout Generator
A simple app that will randomly generate an aqua aerobic workout for you.

Just visit https://aquaerobics.alexishevia.com and click on `Generate Workout`.

## Getting Started
This is a simple static site, just start up a local webserver pointing to this
directory and you're ready.

ie: `python3 -m http.server`

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
This app is currently deployed to Netlify using a Github hook (whenever a
new commit is pushed to the Github repo, Netlify will re-deploy the app)
