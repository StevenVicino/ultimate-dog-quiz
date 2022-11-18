import React, { useState, useEffect } from "react";
import compare from "./compare";

function Quiz() {
  const initialState = {
    breed: "",
  };
  const [picture, setPicture] = useState("");
  const [streak, setStreak] = useState(0);
  const [formData, setFormData] = useState(initialState);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("You can do it!");
  const [goAgain, setGoAgain] = useState(0);

  useEffect(() => {
    async function getPicture() {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      const breedSplit = data.message.split("/");
      breedSplit.pop();
      const dogInfo = breedSplit.pop();
      const lettersDogBreed = dogInfo.toLowerCase().replace(/[^a-z]+/g, "");
      setPicture(data);
      setAnswer(lettersDogBreed);
      setFormData(initialState);
    }
    getPicture();
  }, [goAgain]);

  const onChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputData = formData.breed.toLowerCase().replace(/[^a-z]+/g, "");
    console.log(inputData, answer);
    const correct = compare(inputData, answer);
    if (correct === true) {
      setMessage("Great Job!  Go Again!");
      setStreak(streak + 1);
      setFormData(initialState);
    } else {
      setMessage(`Nice Try!  The correct answer was ${answer}!`);
      setStreak(0);
      setFormData(initialState);
    }
  };

  if (picture) {
    return (
      <div>
        <img
          src={picture.message}
          alt="dog"
          className="img-fluid img-thumbnail col-5 m-3"
        />
        <h2>{message}</h2>
        <h2>Your Current Streak : {streak}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="breed" className="block">
            Guess the Breed!
            <input
              type="text"
              id="breed"
              name="breed"
              placeholder="breed"
              onChange={onChange}
              value={formData.breed}
            />
          </label>
        </form>
        <button
          onClick={() => setGoAgain(goAgain + 1)}
          className="btn btn-warning mr-5"
        >
          Go Again!
        </button>
        <button type="submit" className="btn btn-warning">
          Submit
        </button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Quiz;
