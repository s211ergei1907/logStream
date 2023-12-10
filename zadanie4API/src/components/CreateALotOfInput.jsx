import React, { useState } from "react";
function CreateALotOfInput(props) {
  const [inputData, setInputData] = useState([
    { id: 1, textValue: "", radioValue: "option1" },
    { id: 2, textValue: "", radioValue: "option1" },
    // Дополнительные объекты с идентификаторами и значениями по мере необходимости
  ]);

  const handleChangeText = (id, textValue) => {
    setInputData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, textValue } : item)),
    );
  };

  const handleChangeRadio = (id, radioValue) => {
    setInputData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, radioValue } : item)),
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputData);
  };

  const handleAddInput = () => {
    setInputData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, textValue: "", radioValue: "option1" },
    ]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputData.map((item) => (
          <div key={item.id}>
            <label>
              Input {item.id}:
              <input
                type="text"
                value={item.textValue}
                onChange={(e) => handleChangeText(item.id, e.target.value)}
              />
            </label>
            <div>
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={item.radioValue === "option1"}
                  onChange={() => handleChangeRadio(item.id, "option1")}
                />
                Option 1
              </label>
              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={item.radioValue === "option2"}
                  onChange={() => handleChangeRadio(item.id, "option2")}
                />
                Option 2
              </label>
              {/* Добавьте дополнительные радиокнопки, если необходимо */}
            </div>
          </div>
        ))}
        <br />
        <button type="submit">Отправить форму</button>
      </form>
      <button onClick={handleAddInput}>Добавить еще input</button>
    </div>
  );
}

export default CreateALotOfInput;
