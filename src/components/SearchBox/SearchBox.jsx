import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeSearch } from "../../redux/filter/slice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filter.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <input
        name="name"
        type="string"
        value={filter}
        onChange={handleChange}
        placeholder="Name or number"
      />
    </div>
  );
};

export default SearchBox;
