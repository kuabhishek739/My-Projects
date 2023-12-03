import { Box } from "@mui/material";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <>
      <GitHubCalendar
        className="react-activity-calendar"
        color="skyblue"
        username="kuabhishek739"
      />

      <Box>
        <img
          id="github-top-langs"
          width="100%"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=kuabhishek739&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
        />
      </Box>
      <Box>
        <img
          id="github-stats-card"
          width="100%"
          src="https://github-readme-stats.vercel.app/api?username=kuabhishek739&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
        />
      </Box>
      <Box>
        <img
          id="github-streak-stats"
          width="100%"
          src="https://github-readme-streak-stats.herokuapp.com/?user=kuabhishek739&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
          alt=""
        />
      </Box>
    </>
  );
}