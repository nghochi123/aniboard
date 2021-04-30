import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { motion } from "framer-motion";
import * as styles from "./DrawerItem.module.css";

const variants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function DrawerItem({ icon, text }) {
  return (
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
  );
}
