import { useState } from "react";

//입력 받아야 할 것
//1.국가명
//2.금은동 메달 개수

const MedalInputForm = ({ countries, setCountries }) => {
  const [input, setInput] = useState({
    country: "",
    gold: "",
    silver: "",
    bronze: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "country") {
      setInput({
        ...input,
        [name]: value,
      });
    } else {
      const numValue = parseInt(value);
      if (value === "" || (numValue >= 0 && numValue <= 99)) {
        setInput({
          ...input,
          [name]: value,
        });
      }
    }
  };

  {
    /* 국가 추가 누르면 나라와 메달 개수 추가 함수 */
  }
  const onAddCountry = (e) => {
    e.preventDefault();
    if (!input.country || !input.gold || !input.silver || !input.bronze) {
      alert("모두 입력해주셔야 추가가 가능합니다 : )");
      return;
    }

    const exists = countries.some(
      (country) => country.country === input.country
    );
    if (exists) {
      alert("이미 존재하는 국가입니다. 업데이트를 해주세요 : )");
      return;
    }

    setCountries([...countries, { ...input, id: Date.now() }]);
    setInput({ country: "", gold: "", silver: "", bronze: "" });
  };

  
  const onUpdate = (e) => {
    e.preventDefault();
    if (!input.country) {
      alert("메달 수를 업데이트 할 국가를 입력해주세요 : )");
      return;
    }

    const countryIndex = countries.findIndex(
      (country) => country.country === input.country
    );

    if (countryIndex === -1) {
      alert("존재하지 않는 국가입니다 : (");
      return;
    }

    const updatedCountries = [...countries];

    const medals = ['gold', 'silver', 'bronze'];

    updatedCountries[countryIndex] = {
      ...updatedCountries[countryIndex],
      ...medals.reduce((acc, medal) => ({
        ...acc,
        [medal]: input[medal] || updatedCountries[countryIndex][medal]
      }), {})
    };

    setCountries(updatedCountries);
    alert("국가 정보가 업데이트되었습니다 : )");
    setInput({ country: "", gold: "", silver: "", bronze: "" });
  };

  return (
    <form onSubmit={onAddCountry} className="MedalInputForm">
      <div>
        <p>국가명</p>
        <input 
        name="country" 
        value={input.country} 
        onChange={onChange} 
        />
      </div>

      <div>
        <p>금메달</p>
        <input
          name="gold"
          type="number"
          value={input.gold}
          onChange={onChange}
          placeholder="0~99까지 정수 입력"
        />
      </div>

      <div>
        <p>은메달</p>
        <input
          name="silver"
          type="number"
          value={input.silver}
          onChange={onChange}
          placeholder="0~99까지 정수 입력"
        />
      </div>

      <div>
        <p>동메달</p>
        <input
          name="bronze"
          type="number"
          value={input.bronze}
          onChange={onChange}
          placeholder="0~99까지 정수 입력"
        />
      </div>

      <div className="btn-container">
        <button type="submit" className="buttons" onClick={onAddCountry}>
          국가 추가
        </button>

        <button type="button" className="buttons" onClick={onUpdate}>
          업데이트
        </button>
      </div>
    </form>
  );
};

export default MedalInputForm;
