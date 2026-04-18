import { useState } from "react";

function AddMember({ members, setMembers }) {
  const [name, setName] = useState("");

  const addMember = () => {
    if (!name.trim()) return;

    setMembers([...members, name]);
    setName("");
  };

  return (
    <div className="card">
      <h2>Add Member</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addMember}>Add</button>

      <ul>
        {members.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddMember;