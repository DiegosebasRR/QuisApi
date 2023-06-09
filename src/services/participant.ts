import ParticipantModel from "../models/participant";
import { Participant } from "../interfaces/participant.interface";

const createParticipant = async (participant: Participant) => {
  const responseCreate = await ParticipantModel.create(participant);
  return responseCreate;
};
const getParticipants = async () => {
  const responseGet = await ParticipantModel.find({});
  return responseGet;
};
const getParticipant = async (id: string) => {
  const responseGet = await ParticipantModel.findOne({ _id: id });
  return responseGet;
};
const updateParticipant = async (id: string, data: Participant) => {
  const responseUpdate = await ParticipantModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};
const deleteParticipant = async (id: string) => {
  const responseDelete = await ParticipantModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createParticipant,
  deleteParticipant,
  getParticipant,
  getParticipants,
  updateParticipant,
};
