import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import { User } from "./User";

@Table({tableName: "post", timestamps: false})
export class Post extends Model<Post> {
	@PrimaryKey
	@AutoIncrement
	@Column
	public id_post!: number;

	@ForeignKey(() => User)
	public id_user!: number;

	@Column
	public post_title!: string;

	@Column
	public post_excerpt!: string;

	@Column
	public post_body!: string;

	@Column
	public post_date_posted!: Date;

	@Column
	public post_published!: boolean;

	@Column
	public post_deleted!: boolean;
}
