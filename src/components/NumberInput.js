export function NumberInput({label, value, name, onChange}) {


    return (
        <label htmlFor={name}>
            {/* {label} */}
            
            <input type="number" name={name} id={name} value={value} onChange={onChange}/>
        </label>
    )
}

