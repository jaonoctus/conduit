import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async current ({ auth, request, response }: HttpContextContract) {
    await auth.authenticate()

    const user = {
      email: auth.user?.email,
      username: auth.user?.username,
      bio: auth.user?.bio,
      image: auth.user?.image,
      token: request.header('authorization')?.replace('Bearer ', ''),
    }

    return response.json({
      user,
    })
  }
}
