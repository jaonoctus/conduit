import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ReplaceAuthToken {
  public async handle ({ request }: HttpContextContract, next: () => Promise<void>) {
    if (request.header('authorization')) {
      request.headers().authorization = request.header('authorization')?.replace('Token', 'Bearer')
    }

    await next()
  }
}
