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

const getBlog = async (req, res) => {
    try {
      const blogs = await BlogPost.find();
  
      if (!blogs || blogs.length === 0) {
        return res.status(404).json({
          status: 404,
          message: "No blogs found."
        });
      }
  
      console.log(blogs);
      
      return res.status(200).json({
        status: 200,
        message: "Successfully fetched blogs",
        data: blogs
      });
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({
        status: 500,
        message: "Unable to fetch the data.",
        error: error.message 
      });
    }
};

const getSpecificBlog = async (req, res) => {
    try {
      const { _id } = req.params; 
      const blog = await BlogPost.findById(_id); 
  
      if (!blog) {
        
        return res.status(404).json({
          status: 404,
          message: 'Blog not found',
        });
      }
  
      return res.status(200).json({
        status: 200,
        message: 'Successfully fetched the blog',
        blog,
      });
    } catch (error) {
      console.error('Error fetching the blog:', error);
      return res.status(500).json({
        status: 500,
        message: 'Error fetching the blog',
      });
    }
  };
  
  
export {
    setBlog,
    getBlog,
    getSpecificBlog
}