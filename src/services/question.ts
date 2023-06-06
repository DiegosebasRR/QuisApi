import QuestionModel from "../models/question";
import { Question } from "../interfaces/question.interface";

const createQuestion = async (question: Question) => {
  const responseCreate = await QuestionModel.create(question);
  return responseCreate;
};
const getQuestions = async () => {
  const responseGet = await QuestionModel.find({});
  return responseGet;
};
const getQuestion = async (id: string) => {
  const responseGet = await QuestionModel.findOne({ _id: id });
  return responseGet;
};
const updateQuestion = async (id: string, data: Question) => {
  const responseUpdate = await QuestionModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseUpdate;
};
const deleteQuestion = async (id: string) => {
  const responseDelete = await QuestionModel.deleteOne({ _id: id });
  return responseDelete;
};

export {
  createQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
};
