import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Project {
    id: number;
    title: string;
    publishDate: string;
    style: string;
    downloads: number;

    //authorId: Author;

    createdAt: Date;
    updatedAt: Date;
}