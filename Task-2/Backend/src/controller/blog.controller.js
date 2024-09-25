import { BlogPost } from "../model/blog.model.js";


const setBlog = async(req,res) => {
    const {title,desc,category,author} = req.body;
    if([title,desc,category,author].some((field)=> field?.trim() === "")){
        throw new Error(401,"All fields are required.")
    }
    try {

        const isExist = await BlogPost.findOne({title});
        if(isExist){
            throw new Error(401,"You are trying to post blog with existed title name.")
        }
        const savedBlog = await BlogPost.create({
            title,
            desc,
            category,
            author,
        })

        if(!savedBlog){
            return res.status(402).json({
                staus:401,
                message:"Blogs are not saving in the database."
            })
        }
        return res.status(201).json({status:201,message:"success",savedBlog})
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            status:401,
            message:"Something went wrong while saving blog post to database."
        })
    }
}

const getBlog = async(req,res) => {
    try {
        let blogs = BlogPost.find();
        if(!blogs){
            throw new Error(401,"No blogs are found.")
        }
        console.log(blogs);
        return res.status(201).json({
            status:201,
            message:"Successfully fetched blogs",
            blogs
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status:400,
            message:"No able to fetch the data."
        })
    }
}

export {
    setBlog,
    getBlog
}