import mongoose from "mongoose";
const Schema = mongoose.Schema;

let House = new Schema({
  _id: { type: String },
  name: { type: String },
  mascot: { type: String },
  headOfHouse: { type: String },
  houseGhost: { type: String },
  founder: { type: String },
  school: { type: String },
  members: [{ type: Schema.Types.ObjectId, ref: "characters" }],
  values: [{ type: String }],
  colors: [{ type: String }],
});

export default mongoose.model("houses", House);