import {createConnection, getConnectionOptions} from 'typeorm';
import {EntityWithVeryLongAndDescriptiveName} from './entities/EntityWithVeryLongAndDescriptiveName';

async function main() {
  try {
    const connection = await createConnection(await getConnectionOptions());

    const entities = await connection.getRepository(EntityWithVeryLongAndDescriptiveName)
      .createQueryBuilder()
      .getRawMany();

    console.log('Postgresql truncated data', entities[0]);

    process.exit(0);
  } catch (e) {
    console.log('ERROR', e);
  }
}

main();
