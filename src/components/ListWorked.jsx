import { useState } from "react";

import "./ListWorked.css";

const ListWorked = (props) => {
  const { workers, setWorkers } = props;

  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  return (
    <ul>
      <h2>Personel Maaş Sonuçları</h2>

      {workers.map((worker) => (
        <li key={worker.id} onClick={() => deleteWorker(worker.id)}>
          <span>{worker.name}</span>
          <span>{worker.wage} ₺</span>
        </li>
      ))}
    </ul>
  );
};

export default ListWorked;
