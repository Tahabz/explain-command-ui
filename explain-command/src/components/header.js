import React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { Link } from 'gatsby'

const useStyles = makeStyles({
	navbarDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	navDisplayFlex: {
		display: `flex`,
		justifyContent: `space-between`
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: `white`
	}
});

const Header = () => {
	const classes = useStyles()
	return (
		<AppBar position="static">
			<Toolbar>
				<Container className={classes.navbarDisplayFlex}>
					<IconButton edge="start" color="inherit" aria-label="home">
						<Link style={{ textDecoration: 'none' }} to='/page-2' className={classes.linkText}>
								<Home fontSize="large" />
						</Link>
					</IconButton>
					<List className={classes.navDisplayFlex} component="nav" aria-labelledby="main navigation">
						<Link style={{ textDecoration: 'none' }} to='/page-2' className={classes.linkText}>
							<ListItem button>
								<ListItemText primary="Contact" />
							</ListItem>
						</Link>
						<Link style={{ textDecoration: 'none' }} className={classes.linkText} to='/page-2'>
							<ListItem button>
								<ListItemText primary="About" />
							</ListItem>
						</Link>
					</List>
				</Container>
			</Toolbar>
		</AppBar>
	)
}

export default Header
