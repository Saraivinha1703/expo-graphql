import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../models/User';
import crypto from 'crypto';

//@query: fetch data
//@mutation: create, update or delete data
//@Arg: receives properties

@Resolver()
export class userResolver {
  //database user table simulation
  private usersArr: User[] = [];

  private someUser: User = {
    id: '375e0e21-b3fc-4b78-8046-8b42bf5b839e',
    name: 'Some',
  };

  @Query(() => String)
  async hello() {
    return 'Hello World';
  }

  @Query(() => String)
  async helloUser() {
    const user = new User();
    user.id = 'non existent';
    user.name = 'Someone';
    return `Hello ${this.someUser.name} with id ${this.someUser.id}`;
  }

  @Query(() => [User])
  async users() {
    return this.usersArr;
  }

  @Query(() => User)
  async user() {
    return this.someUser;
  }

  @Mutation(() => User)
  async createUser(@Arg('name') name: string) {
    const user = { id: crypto.randomUUID(), name };
    this.usersArr.push(user);
    return user;
  }
}
