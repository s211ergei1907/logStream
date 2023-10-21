export const Card = ({ title, body, userId }) => {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="headerCard">
          <h3>Пост создал:</h3>
          <p>{userId}</p>
        </div>
        <div className="bodyCard">
          <h3>Тело карточки:</h3>
          <div className="title">{title}</div>
          <div className="body">{body}</div>
        </div>
      </div>
    </div>
  );
};
