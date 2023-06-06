export interface Question {
  questionnaireId: string;
  question: string;
  answerOptions?: Array<string>;
  correctAnswer: number;
}
