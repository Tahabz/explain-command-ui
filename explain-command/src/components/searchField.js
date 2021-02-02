import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core"
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) =>
createStyles({

	paper: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
}));


const SearchField = () => {
	const classes = useStyles()

	return (
		<Paper component="form" className={classes.paper}>
			<InputBase
				className={classes.input}
				placeholder="e.g: npm install"
				inputProps={{ 'aria-label': 'e.g: npm install' }}
			/>
			<IconButton color="primary" className={classes.iconButton} aria-label="directions">
				<SearchIcon />
			</IconButton>
		</Paper>
	)
}

export default SearchField
