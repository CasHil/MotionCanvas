#!/bin/bash

# Take a directory of frames and combine them into a video
# Usage: frame_combiner.sh <scene name>

# Check if the directory exists
if [ ! -d "output/project/$1" ]; then
  echo "Directory $1 does not exist"
  exit 1
fi

# Combine the frames into a video

ffmpeg -r 60 -f image2 -s 1920x1080 -i "output/project/$1/%06d.png" -vcodec libx264 -crf 25  -pix_fmt yuv420p "videos/$1.mp4"