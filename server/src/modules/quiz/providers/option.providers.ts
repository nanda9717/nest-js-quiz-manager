import { DataSource } from 'typeorm';
import { Option } from '../entities/option.entity';

export const optionProviders = [
  {
    provide: 'OPTION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Option),
    inject: ['DATA_SOURCE'],
  },
];