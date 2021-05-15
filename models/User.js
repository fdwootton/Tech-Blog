const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPassword) {
    console.log("----BCRYPT PASSWORD------", this.password, loginPassword)
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6], //password must be at least 6 characters long
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData){
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData){
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
      // hooks: {
      //   beforeCreate: async (newUserData) => {
      //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
      //     return newUserData;
      //   },
      //   beforeUpdate: async (updatedUserData) => {
      //     updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      //     return updatedUserData;
      //   },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;