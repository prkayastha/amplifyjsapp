// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Test } = initSchema(schema);

export {
  Todo,
  Test
};