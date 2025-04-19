import * as argon2 from "argon2";
import { AppDataSource } from "../src/data-source";
import { User } from "../src/entity/User";
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
const userRepo = AppDataSource.getRepository(User)

dotenv.config()

export async function login(req, res) {
    const {email , password} = req.body
    const user = await userRepo.findOneBy({email})
    if(!user) res.send('Пройдите регистрацию');
    try {
        if (await argon2.verify(user.passwordHash, password)) {
            const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' })
            res.json({ accessToken })
        } else {
          res.status(401).send('Ошибка пароля')
        }
      } catch (err) {
        res.send(err)
      }
    
}