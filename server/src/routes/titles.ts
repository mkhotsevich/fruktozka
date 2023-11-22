import { Router } from "express";
import { CLICKS_TITLE, GAME_TITLE, LEADERBOARD_TITLE, MAIN_TITLE, MY_SUPPORT_TITLE, MY_SUPPORT_URL, STREAMER_SUPPORT_TITLE, STREAMER_SUPPORT_URL } from "../constants";

export const titlesRouter = Router();

titlesRouter.get('', (req, res) => {
    return res.json({
        mainTitle: MAIN_TITLE,
        gameTitle: GAME_TITLE,
        leaderboardTitle: LEADERBOARD_TITLE,
        clicks: {
            title: CLICKS_TITLE,
            value: 0
        },
        streamerSupport: {
            title: STREAMER_SUPPORT_TITLE,
            url: STREAMER_SUPPORT_URL
        },
        mySupport: {
            title: MY_SUPPORT_TITLE,
            url: MY_SUPPORT_URL
        }
    })
})

