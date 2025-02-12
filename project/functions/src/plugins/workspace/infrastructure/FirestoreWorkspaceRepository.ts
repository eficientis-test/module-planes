import { getRepository } from 'fireorm';
import { Workspace } from '../domain/Workspace';
import { WorkspaceRepository } from '../domain/WorkspaceRepository';

export class FirestoreWorkspaceRepository implements WorkspaceRepository {
  constructor() {}

  async find(id: string): Promise<Workspace> {
    return getRepository(Workspace).findById(id);
  }

  async save(entity: Workspace): Promise<boolean> {
    await getRepository(Workspace).create(entity);
    return true;
  }

  async remove(id: string): Promise<boolean> {
    await getRepository(Workspace).delete(id);
    return true;
  }
}