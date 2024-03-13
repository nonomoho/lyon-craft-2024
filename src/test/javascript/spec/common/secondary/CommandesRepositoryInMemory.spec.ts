import { CommandeRepositoryInMemory } from '@/common/secondary/CommandeRepositoryInMemory';
import { describe, it, expect } from 'vitest';

describe('CommandeRepositoryInMemory', () => {
  it('should list', () => {
    const commandeRepository = new CommandeRepositoryInMemory();

    expect(commandeRepository.list()).toEqual([]);
  });
});
