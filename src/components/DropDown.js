import React from 'react';
import Style from 'style-it';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function MenuListComposition(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    React.useEffect(() => { console.log(props.subheaders) }, [])
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Style>
            {  `.navbutton {
                font-family: 'Open Sans';
                text-transform: none;
                color: #373737;
                font-size: 15px;
                font-weight: 400;
                padding: 8px 2px;
                border-radius: 0;
                margin: 6px 20px 0 0px;
            }
            
              .navbutton:hover { 
                 font-weight:600;
                /* text-decoration: underline; */
                
              }
              .subheader{
                font-family: 'Lato', sans-serif;
                color: #555;
                font-size: 15px;
                font-weight: 400;
                padding: 8px 2px;
                border-radius: 0;
                margin: 9px 20px 0 20px;
              }
            ` }
            <div>
                <Button
                    className="navbutton"

                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    href={props.path}

                >
                    {props.title}
                </Button>
                {props.subheaders ? < Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'bottom-start' }}
                        >
                            <Paper /* style={{ width: anchorRef.current.offsetWidth }} */>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        {props.subheaders.map((sh) => <MenuItem href={sh.target} onClick={handleClose}>
                                            <a style={{ color: "black" }} className='subheader' href={sh.target}>{sh.title}</a></MenuItem>)}

                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper> : null}
            </div>
        </Style >

    );
}

