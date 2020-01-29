import { Resolver, Args, Info, Query, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { Rig } from 'src/graphql.schema';

@Resolver('Rig')
export class RigResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query('rigs')
  async getRigs(@Args() args, @Info() info): Promise<Rig[]> {
    return this.prisma.query.rigs(args, info);
  }

  @Query('rig')
  async getRig(@Args() args, @Info() info): Promise<Rig> {
    return this.prisma.query.rig(args, info);
  }

  @Mutation('createRig')
  async createRig(@Args() args, @Info() info): Promise<Rig> {
    return this.prisma.mutation.createRig(args, info);
  }
}
