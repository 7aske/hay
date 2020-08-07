import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Post } from "./Post";
import { User } from "./User";

@Table({tableName: "comment", timestamps: false})
export class Comment extends Model<Comment> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_comment!: number;

	@ForeignKey(() => User)
	private id_user!: number;

	@ForeignKey(() => Post)
	private id_post!: number;

	@Column
	private comment_body!: string;

	@Column
	private comment_date_posted!: Date;

	get id(): number {
		return this.id_comment;
	}

	set id(value: number) {
		this.id_comment = value;
	}

	get user(): number {
		return this.id_user;
	}

	set user(value: number) {
		this.id_user = value;
	}

	get post(): number {
		return this.id_post;
	}

	set post(value: number) {
		this.id_post = value;
	}

	get body(): string {
		return this.comment_body;
	}

	set body(value: string) {
		this.comment_body = value;
	}

	get date_posted(): Date {
		return this.comment_date_posted;
	}

	set date_posted(value: Date) {
		this.comment_date_posted = value;
	}
}
