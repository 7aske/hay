import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Media } from "./Media";
import { Post } from "./Post";

@Table({tableName: "post_media", timestamps: false})
export class PostMedia extends Model<PostMedia> {
	@ForeignKey(()=> Post)
	@Column
	private id_post!: number;

	@ForeignKey(()=> Media)
	@Column
	private id_media!: number;
}
