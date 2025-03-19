import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={s.searchBox}>
      <input name="name" type="string" placeholder="Name or number" />
    </div>
  );
};

export default SearchBox;
