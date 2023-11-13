import { Query, Resolver } from 'type-graphql';
import { User } from '../models/User';

@Resolver()
export class userResolver {
  @Query(() => String)
  async hello() {
    return 'Hello World';
  }

  @Query(() => String)
  async helloUser() {
    const user = new User();
    user.id = 1;
    user.name = 'Someone';
    return `Hello ${user.name} with id ${user.id}`;
  }
}
