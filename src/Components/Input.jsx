function Input(props) {
    const { type, name, placeholder, onChange, id, label } = props;
    return (
      <div id="Input-Container">
        <label htmlFor="likefor">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          id={id}
        />
      </div>
    );
  }
  export default Input;