import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'PRODUCERS' })
export class Producers extends BaseEntity {
  @PrimaryColumn()
  pno: number;
  @Column()
  pname: string;
  @Column()
  fname: string;
  @Column()
  doj: string;
  @Column()
  occupation: string;
  @Column()
  efee: string;
  @Column()
  shares: string;
  @Column()
  amount: string;
  @Column()
  cat: string;
  @Column()
  nominee: string;
  @Column()
  relation: string;
  @Column()
  photo: string;
  @Column()
  caste: string;
  @Column()
  sex: string;
  @Column()
  society: string;
  @Column()
  dob: string;
  @Column()
  sub_caste: string;
  @Column()
  aadhar_number: string;
  @Column()
  pan_number: string;
  @Column()
  phone_no: string;
  @Column()
  sukhibhava_number: string;
  @Column()
  nominee_aadhar_number: string;
  @Column()
  nominee_bank_name: string;
  @Column()
  nominee_branch_name: string;
  @Column()
  nominee_account_number: string;
  @Column()
  nominee_ifsc_code: string;
  @Column()
  upload_status: string;
  @Column()
  encrypt_status: string;
  @Column()
  bcc_code: string;
  @Column()
  bank_name: string;
  @Column()
  account_no: string;
  @Column()
  ifsc_code: string;
  @Column()
  society_code: string;
  @Column()
  age: string;
  @Column()
  upload_date: string;
  @Column()
  upload_time: string;
  @Column()
  alternative_no: string;
  @Column()
  nominee_phone_no: string;
  @Column()
  copy_status: string;
  @Column()
  fn: string;
  @Column()
  status: string;
}
