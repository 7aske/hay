import { AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Post } from "./Post";
import { PostMedia } from "./PostMedia";

@Table({tableName: "media", timestamps: false})
export class Media extends Model<Media> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_media!: number;

	@Column
	private media_filepath!: string;

	@BelongsToMany(() => Post, () => PostMedia)
	private media_post!: Post[];

	get id(): number {
		return this.id_media;
	}

	set id(value: number) {
		this.id_media = value;
	}

	get filepath(): string {
		return this.media_filepath;
	}

	set filepath(value: string) {
		this.media_filepath = value;
	}
}
