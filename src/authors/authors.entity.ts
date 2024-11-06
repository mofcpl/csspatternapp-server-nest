import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    password: string;
    
    @Column()
    homepage: string;

    //projects: Project[];

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}