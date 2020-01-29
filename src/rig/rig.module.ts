import { Module } from '@nestjs/common';
import { RigResolver } from './rig.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [RigResolver],
  imports: [PrismaModule]
})
export class RigModule {}
