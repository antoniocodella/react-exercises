import { useMemo } from "react";

export function FilteredList({ list }) {
  function listAdult() {
    return list.filter((item) => item.age > 18);
  }

  const adult = useMemo(() => listAdult(), []);

  console.log(adult);

  return (
    <div>
      <ul>
        {adult.map((item) => (
          <li key={item.id}>
            {`${item.name} - `}
            <span>{item.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
