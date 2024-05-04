import { Injectable } from '@nestjs/common'
import { GetUserRequest } from './get-user-request.dto'

@Injectable()
export class AppService {
  private readonly users = [
    {
      userId: '1',
      stripeUserId: 'stripe-user-id-1'
    },
    {
      userId: '2',
      stripeUserId: 'stripe-user-id-2'
    }
  ]

  getHello(): string {
    return 'Hello World!'
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId)
  }
}
