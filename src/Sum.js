export const Sum = ({ numbers = [1, 3, 5] }) => {
  return (
    <h1>
      {numbers.reduce((sum, current) => {
        return sum + current;
      })}
    </h1>
  );
};
