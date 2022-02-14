import { MenuItem, Paper, Popper, TextField } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import _ from 'lodash';
import React, { useCallback, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { OptionType } from './widgetsInterfaces';

interface AutosuggestProps {
    placeHolder: string,
    label: string,
    error?: string,
    isLoading?: boolean
    onChange: Function,
    onSelected: Function,
    suggestions?: OptionType[] | undefined,
    value: string | undefined
    icon?: any,
    renderOption?: any,
    renderValueHolder?: any,
    showCustomView?: boolean,
    isDisabled?: boolean,
    mandatory?: boolean,
    maxLength?: number,
    toolTip?: Function
    handleSuggestionsFetchRequested?: any
}

function renderInputComponent(inputProps: any) {
    const { classes, inputRef = () => { }, ref, error, ...other } = inputProps;

    return (
        <TextField
            fullWidth
            helperText={error || ""}
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
            }}
            {...other}
        />
    );
}


function getSuggestionValue(suggestion: OptionType) {
    return suggestion.label;
}

const useStyles = makeStyles(() =>
    createStyles({
        suggestion: {
            display: 'block',
        },
        suggestionsList: {
            margin: 0,
            padding: 0,
            listStyleType: 'none',
            whiteSpace: 'inherit',
            maxHeight: 300,
            overflowX: "hidden"
        },
    }),
);



export default function AutoSuggest(props: AutosuggestProps) {

    const classes = useStyles();
    const { value, suggestions, handleSuggestionsFetchRequested, error, isDisabled, mandatory, maxLength, renderOption } = props;
    const [anchorEl, setAnchorEl] = React.useState<any>(null);
    const [stateSuggestions, setSuggestions] = React.useState<OptionType[]>([]);;

    useEffect(() => {
        setSuggestions(suggestions ? suggestions : []);
    }, [suggestions])

    const onSuggestionSelected = (event: any, { suggestion, suggestionValue, index, method }: any) => {
        event.preventDefault();
        props.onSelected(suggestion);
    }

    const handleSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const handleChange = (name: any) => (
        event: React.ChangeEvent<{}>,
        { newValue }: Autosuggest.ChangeEvent,
    ) => {
        // if (event.type !== 'click') {
        if (maxLength && maxLength > 0) {
            (newValue.length < maxLength) && props.onChange(newValue)
        } else {
            props.onChange(newValue)
        }
        // }

    };

    const suggestionsFetchRequested = useCallback(_.debounce(({ value }: any) => {
        if (handleSuggestionsFetchRequested) {
            handleSuggestionsFetchRequested({ value })
        } else {
            setSuggestions(getSuggestions(value));
        }
    }, 300), []);

    function renderDefaultSuggestion(optionProps: any) {
        return (
            <div className="row no-gutters menu-options lane-wrap-text">
                <span className=" col menu-options-item word-wrap">{optionProps.label}</span>
            </div>
        )
    }

    function renderSuggestion(
        suggestion: OptionType,
        { query, isHighlighted }: Autosuggest.RenderSuggestionParams,
    ) {
        // const matches = match(suggestion.label, query);
        // const parts = parse(suggestion.label, matches);

        return (
            <MenuItem
                component="div"
                id={"wrapp-text"}
            >
                {renderOption ? renderOption(suggestion) : renderDefaultSuggestion(suggestion)}
            </MenuItem>
        );
    }
    const autosuggestProps = {
        renderInputComponent,
        suggestions: stateSuggestions || props.suggestions,
        onSuggestionsFetchRequested: suggestionsFetchRequested,
        onSuggestionsClearRequested: handleSuggestionsClearRequested,
        getSuggestionValue,
        renderSuggestion,
    };

    useEffect(() => {
        error && anchorEl && anchorEl.focus();
    },
        // eslint-disable-next-line
        [error]);
    return (
        <div className="autosuggest-wrap">
            <label className="d-flex align-items-center">
                {props.label}
                {mandatory && <span className="mandatory-flied">*</span>}
                <span>{props.toolTip && props.toolTip()}</span>
            </label>
            <Autosuggest
                ref={storeInputReference}
                {...autosuggestProps}
                inputProps={{
                    placeholder: props.placeHolder,
                    disabled: isDisabled,
                    value: value || "",
                    onChange: handleChange('popper'),
                }}
                onSuggestionSelected={onSuggestionSelected}
                theme={{
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderSuggestionsContainer={(options: any) => (
                    <Popper
                        id="word-br"
                        {...options.containerProps}
                        style={{
                            zIndex: 9999,
                            whiteSpace: 'inherit'
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(options.children)}>
                        <Paper
                            square
                            {...options.containerProps}
                            style={{ width: anchorEl ? anchorEl.clientWidth : undefined }}
                        >
                            {options.children}
                        </Paper>
                    </Popper>
                )}
            />
            {error && <label className="error"
            >{error}</label>}
        </div>
    );

    function storeInputReference(autosuggest: any) {
        if (autosuggest !== null) {
            setAnchorEl(autosuggest.input)
        }
    }

    function getSuggestions(value: string) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;

        return inputLength === 0
            ? []
            : (props.suggestions && props.suggestions.filter((suggestion) => {
                const keep = (suggestions && suggestions.length > 5) ?
                    count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue :
                    suggestions;

                if (keep) {
                    count += 1;
                }

                return keep;
            })) || [];
    }
}