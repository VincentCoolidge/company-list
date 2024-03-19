import { Container } from "./styled";

const ErrorPage = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <Container>
      <p>Произошла непредвиденная ошибка</p>
      <button onClick={reloadPage}>Обновить страницу</button>
    </Container>
  );
};

export default ErrorPage;
