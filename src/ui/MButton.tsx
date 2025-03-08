import { ButtonType } from '@/types/ButtonType';
import {Button} from '@gravity-ui/uikit';
import { FC } from 'react';
const MButton:FC<ButtonType> = ({children, size, title, extraClass, view}) => {
  return (
    <Button className={`${extraClass}`} view={view} size={size}>{children}</Button>
  )
}

export default MButton
