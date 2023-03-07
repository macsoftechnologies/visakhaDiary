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

@Entity({ name: 'BCC' })
export class BCC extends BaseEntity {
  @PrimaryColumn()
  bcc_code: string;

  @Column()
  district_code: string;

  @Column()
  bcc_name: string;

  @Column()
  mis_bcc_code: string;

  @Column()
  production_bcc_code: string;

  @Column()
  bcc_address: string;

  @Column()
  entry_date: string;

  @Column()
  entry_time: string;

  @Column()
  s_no: string;

  @Column()
  bcc_nick_name: string;

  @Column()
  focus_bcc_code: string;

  @Column()
  focus_district_code: string;

  @Column()
  status: string;

  @Column()
  phone_no: string;
}
