import { task } from "../model/task.model.js";

const addTask = async (req, res) => {
    const { name, desc } = req.body;

    // Check if fields are empty
    if ([name, desc].some((field) => field.trim() === "")) {
        return res.status(400).json({
            message: "All fields are required",
            status: 400
        });
    }

    try {
        // Log to check the received request
        console.log("Received task:", { name, desc });

        // Check if task with the same name already exists
        const existingTask = await task.findOne({ name });
        if (existingTask) {
            return res.status(400).json({
                message: "Task with the same name already exists",
                status: 400
            });
        }

        // Create a new task
        const savedTask = await task.create({
            name,
            desc
        });

        // Check if the task is saved correctly
        if (!savedTask) {
            return res.status(500).json({
                message: "Error while saving to the database",
                status: 500
            });
        }

        // Log the saved task
        console.log("Saved task:", savedTask);

        // Respond with the saved task
        res.status(201).json({
            message: "Task created successfully",
            status: 201,
            savedTask
        });
    } catch (error) {
        console.log("Error in addTask:", error);
        return res.status(500).json({
            message: "Something went wrong in the controller",
            status: 500
        });
    }
};

const getTask = async (req, res) => {
    try {
        // Fetch all tasks from the database
        const tasks = await task.find();

        // Log the fetched tasks
        console.log("Fetched tasks:", tasks);

        // Send the response with tasks
        res.status(200).json({
            status: 200,
            message: "Success",
            tasks
        });
    } catch (error) {
        console.log("Error in getTask:", error);
        return res.status(500).json({
            message: "Error fetching tasks",
            status: 500
        });
    }
};

const deleteTask = async(req,res) => {
    try {
        const taskId = req.params.id;
        if(!taskId){
            throw new Error(400,"Task Id not received.")
        }
        await task.findByIdAndDelete(taskId);
        res.status(201).json({
            message: "Task deleted successfully.",
            status: 500
        })
    } catch (error) {
        console.log(error);
    }
}

export { addTask, getTask, deleteTask };
