export default function Checkbox({ name, ...rest }) {
  return (
    <input 
      id={name} 
      type="checkbox" 
      name={name} 
      className="form-check-input" 
      role="switch" 
      {...rest}
    />
  )            
}