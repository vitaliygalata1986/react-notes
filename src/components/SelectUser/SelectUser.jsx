function SelectUser({ changeUser }) {
  return (
    <select name="user" id="user" onChange={changeUser}>
      <option value="1">Антон</option>
      <option value="2">Вася</option>
    </select>
  );
}

export default SelectUser;
