import axios from "axios";
import { Router } from "express";
import { User } from "../models/User";
import jwt from 'jsonwebtoken'

export const authRouter = Router()
// secret afn8cpj7o4807t372b4mk98uj2jv89
// id wr9nu9tkwzgjrqg4lxp94yx89lynon
authRouter.get('/', (req, res) => {
    return res.redirect('https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=wr9nu9tkwzgjrqg4lxp94yx89lynon&redirect_uri=http://localhost:3000/auth/redirect&force_verify=true')
})

authRouter.get('/redirect', async (req, res) => {
    const { code } = req.query

    const { data: { access_token: accessToken } } = await axios.post('https://id.twitch.tv/oauth2/token', {
        client_id: 'wr9nu9tkwzgjrqg4lxp94yx89lynon',
        client_secret: 'afn8cpj7o4807t372b4mk98uj2jv89',
        code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3000/auth/redirect'
    }, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })

    const a = await axios.get('https://api.twitch.tv/helix/users?', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Client-Id': 'wr9nu9tkwzgjrqg4lxp94yx89lynon'
        }
    })
    const qwe = a.data.data[0]
    const u = await User.findOneAndUpdate({ twitchId: a.data.data[0].id }, { username: a.data.data[0].display_name }, { upsert: true, new: true })
    await u.save()

    const token = jwt.sign({ id: u._id },
        // @ts-ignore
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: 86400 * 365, // 24 hours
        });
    return res.send({ u, token })
})