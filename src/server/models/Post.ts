import {
	AllowNull,
	AutoIncrement,
	BelongsToMany,
	Column,
	ForeignKey,
	Model,
	PrimaryKey,
	Table,
} from "sequelize-typescript";
import { Category } from "./Category";
import { Media } from "./Media";
import { PostMedia } from "./PostMedia";
import { User } from "./User";

@Table({tableName: "post", timestamps: false})
export class Post extends Model<Post> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_post!: number;

	@ForeignKey(() => User)
	@AllowNull(false)
	@Column
	private id_user!: number;

	@BelongsToMany(() => Media, () => PostMedia)
	private post_media!: Media[];

	@ForeignKey(() => Category)
	@Column
	private id_category!: number;

	@Column
	private post_title!: string;

	@Column
	private post_excerpt!: string;

	@Column
	private post_body!: string;

	@Column
	private post_date_posted!: Date;

	@Column
	private post_published!: boolean;

	@Column
	private post_deleted!: boolean;

	@Column
	private post_views!: number;


	get id(): number {
		return this.id_post;
	}

	set id(value: number) {
		this.id_post = value;
	}

	get user(): number {
		return this.id_user;
	}

	set user(value: number) {
		this.id_user = value;
	}

	get media(): Media[] {
		return this.post_media;
	}

	set media(value: Media[]) {
		this.post_media = value;
	}

	get category(): number {
		return this.id_category;
	}

	set category(value: number) {
		this.id_category = value;
	}

	get title(): string {
		return this.post_title;
	}

	set title(value: string) {
		this.post_title = value;
	}

	get excerpt(): string {
		return this.post_excerpt;
	}

	set excerpt(value: string) {
		this.post_excerpt = value;
	}

	get body(): string {
		return this.post_body;
	}

	set body(value: string) {
		this.post_body = value;
	}

	get date_posted(): Date {
		return this.post_date_posted;
	}

	set date_posted(value: Date) {
		this.post_date_posted = value;
	}

	get published(): boolean {
		return this.post_published;
	}

	set published(value: boolean) {
		this.post_published = value;
	}

	get deleted(): boolean {
		return this.post_deleted;
	}

	set deleted(value: boolean) {
		this.post_deleted = value;
	}

	get views(): number {
		return this.post_views;
	}

	set views(value: number) {
		this.post_views = value;
	}
}
