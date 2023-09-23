const Input = ({label, state, setState, type='text'}) => {
  return (
    <div class="form-floating">
        <input type={type} class="form-control" id="floatingInput" placeholder={label} 
        value={state} onChange={e => setState(e.target.value)}/>
        <label for={label}>{label}</label>
    </div>
  )
}

export default Input