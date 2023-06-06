import { Schema, model } from "mongoose";
import { Question } from "../interfaces/question.interface";

const QuestionSchema = new Schema<Question>({
  questionnaireId: {
    required: true,
    type: String,
  },
  question: {
    required: true,
    type: String,
  },
  answerOptions: {
    required: true,
    type: Array<String>,
  },
  correctAnswer: {
    required: true,
    type: Number,
  },
});

const QuestionModel = model("question", QuestionSchema);

export default QuestionModel;
