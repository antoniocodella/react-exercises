export const Sum = ({ numbers }) => {
  return (
    <h1>
      {numbers.reduce((sum, current) => {
        return sum + current;
      })}
    </h1>
  );
};
