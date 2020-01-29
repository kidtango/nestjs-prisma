import { Test, TestingModule } from '@nestjs/testing';
import { RigResolver } from './rig.resolver';

describe('RigResolver', () => {
  let resolver: RigResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RigResolver],
    }).compile();

    resolver = module.get<RigResolver>(RigResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
