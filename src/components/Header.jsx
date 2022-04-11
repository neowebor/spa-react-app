import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Container} from "./Container";
import {IoMoon, IoMoonOutline} from 'react-icons/io5'
import {themeActionCreator} from "../reducers/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.appTheme.theme)

    const toggleTheme = () => {
        let themeColor = theme === 'light' ? 'dark' : 'light';
        dispatch(themeActionCreator(themeColor))
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])


    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <IoMoonOutline size="14px"/>
                        ) : (
                            <IoMoon size="14px"/>
                        )}
                        <span style={{marginLeft: '0.75rem'}}>{theme} theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};
