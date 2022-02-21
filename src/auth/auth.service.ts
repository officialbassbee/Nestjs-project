import { Injectable, ConflictException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-CredentialsDto';
import { User } from './interfaces/auth-interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  new: any;
  constructor(
    @InjectModel('User') private readonly userModel: Model<AuthCredentialsDto>,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ username, password: hashedPassword });

    try {
      await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User already exists');
      }
      throw error;
    }
  }
  async signIn(user: User) {
    const payload = { username: user.username, sub: user._id };
    return {
      Token: this.jwtService.sign(payload),
    };
  }
  async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(pass, user.password);

    if (valid) {
      return user;
    }

    return null;
  }
}
