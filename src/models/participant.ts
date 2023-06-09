import { Schema, model } from "mongoose";
import { Participant } from "../interfaces/participant.interface";

const ParticipantSchema = new Schema<Participant>({
  name: { type: String, required: true },
});

const ParticipantModel = model("participant", ParticipantSchema);

export default ParticipantModel;
