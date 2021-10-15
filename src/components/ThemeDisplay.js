import React, {useContext, useState} from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import {ThemeContext} from 'styled-components'
import {lightTheme,darkTheme,crazyTheme} from './Themes'
export default function ThemeDisplay() {
    let theme = useContext(ThemeContext)
    const [themeName, setThemeName] = useState(theme.name)
    function handleSelect(e) {
        setThemeName(e)
    }
    return (
        <DropdownButton variant='dark' title='Select theme' onSelect = {handleSelect} selectedTheme={themeName}>
            <Dropdown.Item eventKey="dark">Dark</Dropdown.Item>
            <Dropdown.Item eventKey="light">Light</Dropdown.Item>
            <Dropdown.Item eventKey="crazy">Random</Dropdown.Item>
        </DropdownButton>
    )
}   
