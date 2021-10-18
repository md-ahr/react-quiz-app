const Checkbox = ({ className, text, ...rest }) => (
  <label className={className}>
    <input type="checkbox" {...rest} />
    <span> {text}</span>
  </label>
);

export default Checkbox;
