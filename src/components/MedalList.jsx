import React from "react";

const MedalList = ({ countries, onDelete }) => {
  const sortedCountries = [...countries].sort((a, b) => {
    const totalA = Number(a.gold);
    const totalB = Number(b.gold);
    return totalB - totalA;
  });

  return (
    <div className="medal-list-container">
      <table className="list-table">
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>합계</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {sortedCountries.map((country) => {
            const totalMedals =
              Number(country.gold) +
              Number(country.silver) +
              Number(country.bronze);

            return (
              <tr key={country.id}>
                <td>{country.country}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>{totalMedals}</td>
                <td>
                  <button
                    onClick={() => onDelete(country.id)}
                    className="delete-btn"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {countries.length === 0 && (
        <p className="empty-country">등록된 국가가 없습니다 : )</p>
      )}
    </div>
  );
};

export default MedalList;

