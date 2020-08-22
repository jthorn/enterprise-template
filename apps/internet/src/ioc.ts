import IProvider from '@enterprise/plugins/src';
import { container } from './ioc.container';
import { NameProvider } from './providers';

container.bind<IProvider<string>>('nameProvider').to(NameProvider);
