import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    description: string;

    @Column('datetime')
    date: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
