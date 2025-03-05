import { DataTypes } from "sequelize"
import sequelize from '../sequelize.js'

const Users = sequelize.define('Users',{
    firstname: {
        type : DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z]+$/,
                msg: "First name can only contain letters."
            },
            len: [1, 50],
            notNull: true
        }

    },
    lastname: {
        type : DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: /^[a-zA-Z]+$/,
                msg: "Last name can only contain letters."
            },
            len: [1, 50],
            notNull: true
        }

    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args:true,
            msg:"Email adress already in use."
        },
        validate: {
            isEmail: {
                msg: "Invalid email address."
            },
            len: [1, 100],
            notNull: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 100],
            notNull: true
        }
    }
})

export default Users;