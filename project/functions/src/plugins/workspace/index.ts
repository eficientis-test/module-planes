import { EventBus } from '@eficientis-test/core/EventBus';
import { PluginContract } from '@eficientis-test/core/PluginContract';

export default class WorkspacePlugin implements PluginContract {
  name = 'WorkspacePlugin';
  private active = true;

  constructor(eventBus: EventBus) {}

  init(): void {
    console.log(`[WorkspacePlugin] initialized`);
  }

  isActive(): boolean {
    return this.active;
  }
}
