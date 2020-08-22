import { injectable } from 'inversify';
import IProvider from '@enterprise/plugins/src';

@injectable()
export class NameProvider implements IProvider<string> {
  provide() {
    return 'World';
  }
}
