import mongoose from 'mongoose';
import Password from '../utils/password';

interface UserType {
    name: string;
    email: string;
    password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserType): UserDoc
}

interface UserDoc extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserType>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

userSchema.pre('save', async function(done) {
    if(this.isModified('password')) {
        const hashedPwd = await Password.hashPwd(this.get('password'))
        this.set('password', hashedPwd)
    }
    done()
})

userSchema.statics.build = (attrs: UserType) => {
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export default User;