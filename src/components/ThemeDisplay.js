import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function ThemeDisplay() {
    return (
        <DropdownButton variant='dark' title='Select theme'>
            <Dropdown.Item>Dark</Dropdown.Item>
            <Dropdown.Item>Light</Dropdown.Item>
            <Dropdown.Item>Random</Dropdown.Item>
        </DropdownButton>
    )
}
