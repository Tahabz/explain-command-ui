import React from "react"
import { Link } from "gatsby"
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SearchField from '../components/searchField'


const useStyles = makeStyles((theme) =>
	createStyles({

		title: {
			fontFamily: 'xirod',
			textAlign: 'center'
		},
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


const IndexPage = () => {
	const classes = useStyles()

	return (
		<Layout>
			<div className={classes.root}>
				<Typography variant="h3" component="h2" className={classes.title} gutterBottom>
					Explain Command
				</Typography>
			</div>
			<SearchField/>
		</Layout>
	)
}

export default IndexPage
