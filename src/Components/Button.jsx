function Button(props) {
    const { label,  type } = props;
    return (
      <div id="Button-Container">
        <button type={type}>
          {label}
        </button>
      </div>
    );
  }
  export default Button;
  