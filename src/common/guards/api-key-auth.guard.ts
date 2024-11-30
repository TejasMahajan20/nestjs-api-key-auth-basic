import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class ApiKeyAuthGuard implements CanActivate {
  constructor(
    private configService: ConfigService
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('API key is missing.');
    }

    if (token !== this.configService.get<string>('API_KEY')) {
      throw new UnauthorizedException('Invalid API key.');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    return request.headers['x-api-key'] as string | undefined;
  }
}