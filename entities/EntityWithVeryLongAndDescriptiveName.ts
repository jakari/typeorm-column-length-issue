import {PrimaryColumn} from 'typeorm';
import {Entity} from 'typeorm';

@Entity()
export class EntityWithVeryLongAndDescriptiveName {
  @PrimaryColumn()
  andHereWehaveAnTooLongEntityNameThatIsVeryDescriptive: number

}
