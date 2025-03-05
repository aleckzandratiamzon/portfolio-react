import User from '../models/Users.js';
import bcrypt from 'bcrypt';


export const addUser = async (req, res) => {
    const { firstname, lastname, email, password, passwordConfirm } = req.body;
    
    if (password !== passwordConfirm){
        return res.status(400).json({message: "Passwords do not match"});
    }

    try {
        const hashedPassword = await bcrypt.hash(password,10);

        const user = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });
        
        const newUser = await user.save();
        res.status(201).json({messge: "Registered successfully", newUser});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const loginUser = async (req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.findOne({where:{
            email : email,
    }})
    if (user && await bcrypt.compare(password, user.password)){
        res.status(200).json({message: "Login successful"});
    }else {
        res.status(401).json({message: "Invalid password or email"});
    }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}