import React from "react";
import { List, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Home,
  Star,
  Whatshot,
  Favorite,
  TrendingUp,
  Book,
} from "@material-ui/icons";
import { motion } from "framer-motion";
import DrawerItem from "../../small/DrawerItem/DrawerItem";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
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
    text: "Home",
    icon: <Home />,
    link: "/",
  },
  {
    text: "Popular",
    icon: <Whatshot />,
    link: "/sortby/POPULARITY_DESC",
  },
  {
    text: "Top Rated",
    icon: <Star />,
    link: "/sortby/SCORE_DESC",
  },
  {
    text: "Trending",
    icon: <TrendingUp />,
    link: "/sortby/TRENDING_DESC",
  },
  {
    text: "Most Favourited",
    icon: <Favorite />,
    link: "/sortby/FAVOURITES_DESC",
  },
];

const drawerItems2 = [
  {
    text: "My list",
    icon: <Book />,
    link: "/account/mylist",
  },
];

export default function Drawer() {
  const classes = useStyles();
  return (
    <motion.div variants={variants}>
      <List component="ul" className={classes.root}>
        {drawerItems.map((item, i) => (
          <DrawerItem
            key={i}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
        <Divider />
        {drawerItems2.map((item, i) => (
          <DrawerItem
            key={i}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
      </List>
    </motion.div>
  );
}
