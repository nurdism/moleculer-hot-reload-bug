import { Service as MoleculerService, Context } from 'moleculer'
import { Service, Action } from 'moleculer-decorators'

import { User } from '../entity/user/User'

@Service({ name: 'test' })
export default class CustomService extends MoleculerService {

  @Action()
  test(ctx: Context): any {
    return new User()
  }
}
