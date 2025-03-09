import { ButtonType } from '@/types/ButtonType';
import {Button} from '@gravity-ui/uikit';
import { FC } from 'react';
const MButton:FC<ButtonType> = ({children, size,  type, extraClass, view, onClick}) => {
  return (
    <Button type={type} onClick={onClick} className={`${extraClass}`} view={view} size={size}>{children}</Button>
  )
}

export default MButton
