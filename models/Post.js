const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    post_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
            }
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: 'post'
  }
);

module.exports = Post;