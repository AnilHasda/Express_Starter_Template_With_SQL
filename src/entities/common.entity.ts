import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn
}from"typeorm";

@Entity("common")
export class CommonEntity extends BaseEntity{
  
  @PrimaryColumn("uuid")
  id:string;
  
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
  
}
