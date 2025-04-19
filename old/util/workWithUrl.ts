import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { Url } from '../src/entity/Url'
import { generatingURL } from '../common/urlGenerator'
import { AppDataSource } from '../src/data-source'
import { User } from '../src/entity/User'
import { url } from 'inspector'

dotenv.config()

export async function AddUrl(req, res) {
    const { link, accessToken } = req.body
    const verification = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const user = await AppDataSource.manager.findOneBy(User, {email: verification.email})
    if(await AppDataSource.manager.findOneBy(Url, {userId: user.id, fromUrl: link})){
        res.status(200).send('Уже существует такая ссылка')
        return
    }
    const url = new Url
    url.date = new Date
    url.fromUrl = link
    url.userId = user.id
    url.shortUrl = generatingURL(6)
    await AppDataSource.manager.save(url)
    res.status(200).send(`host/${url.shortUrl}`)
}

export async function deleteUrl(req, res) {
    const { link, accessToken } = req.body
    const verification = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const user = await AppDataSource.manager.findOneBy(User, {email: verification.email})
    await AppDataSource.manager.delete(Url, {userId: user.id, fromUrl: link})
    res.status(200).send('ссылка удалена')
}