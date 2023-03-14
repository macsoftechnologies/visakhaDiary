// import { UsersAuthentication } from 'src/authentication/entities/users-authentication.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Users_Master' })
export class Users extends BaseEntity {
  @PrimaryColumn()
  userId: string;

  @Column()
  user_name: string;

  @Column()
  password: string;

  @Column()
  user_type: string;

  @Column()
  user_type_code: string;
}
