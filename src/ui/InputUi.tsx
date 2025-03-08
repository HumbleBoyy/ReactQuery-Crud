import { InputType } from '@/types/InputType';
import {TextInput} from '@gravity-ui/uikit';
import { FC } from 'react';

const InputUi:FC<InputType> = ({placeholder, view, size, type, name,onChange}) => {
  return (
    <TextInput onChange={onChange} placeholder={placeholder} view={view} type={type} name={name} size={size}/>
  )
}

export default InputUi
