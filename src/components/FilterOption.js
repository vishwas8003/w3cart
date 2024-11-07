const FilterOption = ({ label, id }) => (
    <div className="form-check" style={{display:"flex", padding:"10px"}}>
      <label className="form-check-label stretched-link" htmlFor={id}>
        {label}
      </label>
      <input className="form-check-input" type="checkbox" id={id} />
    </div>
  );

  export default FilterOption