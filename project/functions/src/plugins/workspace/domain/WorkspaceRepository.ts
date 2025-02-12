import { Workspace, WorkspaceDto } from './Workspace';

export interface WorkspaceRepository {
  find(id: string): Promise<Workspace>;
  save(entity: WorkspaceDto): Promise<boolean>;
  remove(id: string): Promise<boolean>;
}