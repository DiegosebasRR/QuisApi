import { Response, Request } from "express";
import {
  createQuestion,
  getQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
} from "../services/question";

const postQuestionCtrl = async ({ body }: Request, res: Response) => {
  try {
    const response = await createQuestion(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getQuestionsCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getQuestions();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getQuestionCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getQuestion(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateQuestionCtrl = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateQuestion(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteQuestionCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteQuestion(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  postQuestionCtrl,
  getQuestionCtrl,
  updateQuestionCtrl,
  deleteQuestionCtrl,
  getQuestionsCtrl,
};
