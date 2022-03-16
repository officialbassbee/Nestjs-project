import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostInt } from './interface/postinterface';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post')
    private readonly postModel: Model<PostInt>,
  ) {}

  async findAll(): Promise<PostInt[]> {
    return await this.postModel.find();
  }
  async findOne(id: string): Promise<PostInt> {
    return await this.postModel.findOne({ _id: id });
  }
  async create(post: PostInt): Promise<PostInt> {
    const newPost = new this.postModel(post);
    return await newPost.save();
  }
  async delete(id: string): Promise<PostInt> {
    return await this.postModel.findByIdAndRemove(id);
  }
  async update(id: string, post: PostInt): Promise<PostInt> {
    return await this.postModel.findByIdAndUpdate(id, post, {
      new: true,
    });
  }
}
