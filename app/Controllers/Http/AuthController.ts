import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login ({ auth, request, response }: HttpContextContract) {
    const { user: { email, password } } = request.all()

    const { token } = await auth.use('api')
      .attempt(email, password, {
        expiresIn: '15 minutes',
        name: 'auth',
      })

    const user = {
      email: auth.user?.email,
      username: auth.user?.username,
      bio: auth.user?.bio,
      image: auth.user?.image,
      token,
    }

    return response.json({
      user,
    })
  }
}
