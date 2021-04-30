import React from "react";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Home, Star, Whatshot, Favorite} from "@material-ui/icons";
import { motion } from "framer-motion";
import DrawerItem from "../../small/DrawerItem/DrawerItem";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
  }
}));

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const drawerItems = [
    {
        text: 'Home',
        icon: <Home/>
    },
    {
        text: 'Top Rated',
        icon: <Star/>
    },
    {
        text: 'Popular',
        icon: <Whatshot/>
    },
    {
        text: 'Most Favourited',
        icon: <Favorite/>
    }
]

export default function Drawer() {
    const classes = useStyles();
  return (
    <motion.div variants={variants}>
      <List component="ul" className={classes.root}>
        {drawerItems.map((item, i) => (
          <DrawerItem key={i} icon={item.icon} text={item.text} />
        ))}
      </List>
    </motion.div>
  );
}
