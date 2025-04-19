import { AppDataSource } from "../src/data-source"
import { User } from "../src/entity/User"
import * as argon2 from 'argon2'

const userRepo = AppDataSource.getRepository(User)

export async function registration(req, res) {
    const {email, password} = req.body
    const exist = await userRepo.findOneBy({email: email})
    if(exist) return res.send('Запись уже создана');
    const passwordHash = await argon2.hash(password)
    const user = new User
    user.email = email
    user.passwordHash = passwordHash
    await userRepo.save(user)
    return res.status(201).send('Пользователь создан')
}