import Icon from "./icon";


export default function InputCheckbox({...props}) {
    return (
        <label>
            <input type="checkbox" {...props} />
            <Icon svg={CheckIcon}/>
        </label>
    )
}