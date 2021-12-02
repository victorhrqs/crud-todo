import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.ObjectId;

const TasksSchema = mongoose.Schema({
    _id: ObjectId,
    nome: {type: String}
})

const Tasks = mongoose.model('Tasks', TasksSchema)

export default Tasks