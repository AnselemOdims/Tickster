import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)
class Password {
    static async hashPwd(pwd: string) {
        const salt = randomBytes(16).toString('hex')
        const buf = await scryptAsync(pwd, salt, 64) as Buffer;
        return `${buf.toString('hex')}.${salt}`
    }

    static async comparePwd(storedPwd: string, pwd: string) {
        const [hashedPwd, salt] = storedPwd.split('.')
        const newBuf = await scryptAsync(pwd, salt, 64) as Buffer;
        return hashedPwd === newBuf.toString('hex')
    }
}

export default Password;