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

@Entity({ name: 'Users' })
export class Users extends BaseEntity {
  @PrimaryColumn()
  userId: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
