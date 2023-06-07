import { Schema, model } from "mongoose";
import { Participant } from "../interfaces/participant.interface";

const ParticipantSchema = new Schema<Participant>({
  name: Schema,
});

const ParticipantModel = model("participant", ParticipantSchema);

export default ParticipantModel;
