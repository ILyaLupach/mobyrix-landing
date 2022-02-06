import mongoose, { Document } from 'mongoose'

interface IModel {
  email: string
  date: Date
}

const Schema = mongoose.Schema

const emailSchema = new Schema({
	email: String,
	date: Date,
})

const emailBD = mongoose.model<IModel & Document>('email', emailSchema)

export default emailBD
