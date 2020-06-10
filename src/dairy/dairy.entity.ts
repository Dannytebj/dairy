import  { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Dairy {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
    @Column({ default: false })
    isPassworded: boolean;
    @Column({ default: null })
    password: string;
    @CreateDateColumn()
    createdAt: Date
}
