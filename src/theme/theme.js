import { createTheme } from '@mui/material';

const theme = createTheme({
    direction: 'rtl',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1400,
            xxl: 1920
        }
    },
    typography: {
        fontFamily: [
            'IRANSans',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'sans-serif'
        ].join(','),
        button: {
            fontSize: 16
        }
    },
    palette: {
        primary: {
            main: '#483493',
            light: '#48349322'
        },
        success: {
            main: '#00f673'
        },
        warning: {
            main: '#ffbd06'
        },
        error: {
            main: '#ff3262'
        },
        shadow: {
            1: 'rgba(132, 50, 240, 0.4)',
            2: 'rgba(0, 0, 0, 0.12)',
            3: 'rgba(170, 105, 255, 0.08)',
            4: 'rgba(198, 203, 219, 0.4)'
        },
        grey: {
            300: '#f5f6fa',
            400: '#c0c0c0',
            500: '#787878',
            600: '#5a5a5a',
            700: '#494949'
        },
        blue: {
            100: '#f0f1f5',
            200: '#c6cbdb',
            300: '#9fa6b9',
            400: '#6A6F80',
            800: '#515664'
        },
        purple: {
            100: '#efddff',
            200: '#ab6bff',
            700: '#47089b'
        },
        green: {
            100: '#44ee9f',
            200: '#00f673',
            500: '#217346'
        },
        red: {
            700: '#ff0000'
        }
    },
});

theme.props = {
    MuiFilledInput: {
        disableUnderline: true
    },
    MuiTextField: {
        // size: 'small'
    },
    MuiMenu: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        getContentAnchorEl: null
    }
};

theme.overrides = {
    MuiButton: {
        root: {
            borderRadius: theme.typography.pxToRem(10),
            textTransform: 'capitalize',
            minWidth: 124
        },
        contained: {
            boxShadow: `0 4px 12px 0 ${theme.palette.shadow['1']}`,
            padding: theme.spacing(1, 2),
            '&:hover': {
                boxShadow: `0 4px 12px 0 ${theme.palette.shadow['1']}`
            }
        },
        textPrimary: {
            '&:hover': {
                backgroundColor: 'transparent'
            }
        }
    },
    MuiIconButton: {
        root: {
            color: theme.palette.common.black
        }
    },
    MuiInputLabel: {
        root: {
            color: theme.palette.grey[500],
            fontSize: theme.typography.pxToRem(14)
        },
        shrink: {
            top: 0
        },
        formControl: {
            // top: -8,
        },
        filled: {
            top: 1,
            '&.MuiInputLabel-shrink': {
                top: 1
            }
        },
        outlined: {
            top: 1,
            '&.MuiInputLabel-shrink': {
                top: 0
            },
            '&.MuiInputLabel-marginDense': {
                top: 0.5
            }
        }
    },
    MuiInputBase: {
        input: {
            fontSize: theme.typography.pxToRem(14),
            color: theme.palette.common.black,
            height: 'auto',
            '&::placeholder': {
                color: '#C0C0C0',
                fontWeight: 400,
                opacity: 1
            }
        }
    },
    MuiTextField: {
        root: {
            width: '100%'
        }
    },
    MuiSelect: {
        icon: {
            height: 24
        }
    },
    MuiFilledInput: {
        root: {
            border: `${theme.typography.pxToRem(0.5)} solid ${theme.palette.grey[600]}`,
            overflow: 'hidden',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderRadius: 10,
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: 'transparent',
            },
            '&$focused': {
                backgroundColor: '#fff',
                borderColor: theme.palette.primary.main
            },
        },
        error: {
            borderColor: `${theme.palette.error.main} !important`
        },
        input: {
            paddingTop: 30,
            paddingBottom: 7
        }
    },
    MuiOutlinedInput: {
        root: {
            borderRadius: theme.typography.pxToRem(8),
            '&$focused .MuiOutlinedInput-notchedOutline': {
                borderWidth: 1,
            }
        },
        notchedOutline: {
            borderWidth: 0.5,
            borderColor: theme.palette.grey[500],
        },
        input: {
            fontWeight: theme.typography.fontWeightMedium,
            paddingTop: 19.5,
            paddingBottom: 19.5
        }
    },
    MuiInputAdornment: {
        root: {
            '& .MuiTypography-body1': {
                fontSize: theme.typography.pxToRem(14),
                color: '#C0C0C0'
            },
            color: theme.palette.blue[400]
        }
    },
    MuiFormControlLabel: {
        label: {
            color: theme.palette.grey[500],
            fontSize: theme.typography.pxToRem(14)
        }
    },
    MuiSwitch: {
        root: {
            width: 47,
            height: 24,
            padding: 0,
        },
        colorPrimary: {
            padding: 2,
            top: 'calc(50% - 12px)',
            '&$checked': {
                transform: 'translateX(23px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: theme.palette.primary.main,
                },
            },
        },
        thumb: {
            width: 20,
            height: 20,
        },
        track: {
            borderRadius: 20,
            backgroundColor: theme.palette.blue[300],
        }
    },
    MuiSlider: {
        track: {
            height: 4,
            borderRadius: 4,
        },
        rail: {
            height: 4,
            borderRadius: 4,
        },
        thumb: {
            height: 16,
            width: 16,
            backgroundColor: theme.palette.common.white,
            border: '3px solid currentColor',
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
        }
    },
    MuiMenu: {
        paper: {
            borderRadius: 8,
            boxShadow: `0 4px 12px 0 ${theme.palette.shadow[2]}`,
            padding: theme.spacing(1, 3)
        }
    },
    MuiPaper: {
        rounded: {
            borderRadius: 12
        },
        elevation1: {
            boxShadow: `0 4px 24px 0 ${theme.palette.shadow[2]}`
        }
    },
    MuiLink: {
        root: {
            color: theme.palette.grey['600']
        }
    },
    MuiBackdrop: {
        root: {
            color: '#fff'
        }
    },
    MuiDrawer: {
        // paper: {
        //     position: 'relative'
        // },
        paperAnchorDockedRight: {
            borderLeft: 'none',
            backgroundColor: 'transparent'
        }
    },
    MuiTableRow: {
        root: {
            '&:last-of-type': {
                '& .MuiTableCell-root': {
                    borderBottom: 'none'
                }
            },
            '&.MuiTableRow-hover:hover': {
                backgroundColor: theme.palette.common.white,
            }
        },
        hover: {
            borderRadius: '8px',
            '&:hover': {
                boxShadow: '0 4px 36px 0 rgba(50, 0, 116, 0.12)'
            },
            '& .MuiTableCell-root': {
                borderBottom: 'none',
            }
        }
    },
    MuiTableCell: {
        root: {
            '&:first-of-type': {
                borderRadius: '8px 0 0 8px'
            },
            '&:last-of-type': {
                borderRadius: '0 8px 8px 0'
            },
            whiteSpace: 'nowrap',
            '& .MuiAvatar-root': {
                width: '54px',
                height: '54px'
            },
            textAlign: 'center',
            wrap: 'wrap'
        },
        head: {
            borderBottom: 'none'
        }
    },
    MuiCheckbox: {
        indeterminate: {
            color: theme.palette.primary.main
        }
    },
    MuiPagination: {
        ul: {
            '& li:last-of-type .MuiButtonBase-root': {
                color: theme.palette.blue[400]
            },
            '& li:first-of-type .MuiButtonBase-root': {
                color: theme.palette.blue[400]
            },
            '& .MuiButtonBase-root': {
                color: theme.palette.blue[300],
            },
            '& .Mui-selected': {
                backgroundColor: 'transparent',
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: '8px',
                color: theme.palette.blue[400]
            }
        }
    },
    MuiStepper: {
        root: {
            padding: theme.spacing(3, 0),
            backgroundColor: 'transparent'
        }
    },
    MuiStepConnector: {
        alternativeLabel: {
            top: 23,
        },
        active: {
            '& $line': {
                backgroundColor: theme.palette.purple[200]
            },
        },
        completed: {
            '& $line': {
                backgroundColor: theme.palette.purple[200]
            },
        },
        line: {
            height: 3,
            border: 'none !important',
            backgroundColor: theme.palette.blue[200],
            borderRadius: 1,
        }
    },
    MuiAccordion: {
        root: {
            width: '100%',
            boxShadow: `0 0 36px ${theme.palette.shadow[3]}`,
            '&::before': {
                height: 0
            },
            marginBottom: '12px',
            '&:last-of-type': {
                marginBottom: 0
            }
        }
    },
    MuiAccordionSummary: {
        root: {
            color: theme.palette.blue[400]
        },
        content: {
            '& > p': {
                fontWeight: theme.typography.fontWeightMedium
            }
        },
        expandIcon: {
            color: theme.palette.blue[400]
        }
    },
    MuiTab: {
        textColorPrimary: {
            color: theme.palette.blue[200]
        }
    },
    MuiDialog: {
        paper: {
            width: '90%'
        }
    }
};

export default theme;
