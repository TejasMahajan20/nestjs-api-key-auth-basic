import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleApiKeyProtectedRequest(): string {
    return 'Welcome! You have accessed an API key-protected route.';
  }
}
