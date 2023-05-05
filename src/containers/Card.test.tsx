import { render, fireEvent } from "@testing-library/react";
import { Card } from "./Card";
describe("Card component", () => {
  it("renders the question and answer options", () => {
    const data = {
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["London", "Berlin", "Madrid"],
    };
    const onHandleNext = jest.fn();
    const { getByText } = render(
      <Card data={data} handleNext={onHandleNext} finish={false} />
    );
    const questionElement = getByText(/What is the capital of France?/i);
    expect(questionElement).toBeInTheDocument();
    const optionElements = getByText(/Paris/i);
    expect(optionElements).toBeInTheDocument();
    const optionElements2 = getByText(/London/i);
    expect(optionElements2).toBeInTheDocument();
    const optionElements3 = getByText(/Berlin/i);
    expect(optionElements3).toBeInTheDocument();
    const optionElements4 = getByText(/Madrid/i);
    expect(optionElements4).toBeInTheDocument();
  });

  it("calls the onHandleClick function when an option is clicked", () => {
    const onHandleNext = jest.fn();
    const data = {
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["London", "Berlin", "Madrid"],
    };

    const { getByText } = render(
      <Card data={data} handleNext={onHandleNext} finish={false} />
    );
    const optionElement = getByText(/Paris/i);
    fireEvent.click(optionElement);
    const buttonElement = getByText(/Next/i);
    fireEvent.click(buttonElement);
    expect(onHandleNext).toHaveBeenCalled();
  });
});
