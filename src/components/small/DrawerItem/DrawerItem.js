import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {useRouter} from 'next/router'

export default function DrawerItem({ icon, text, link }) {
  const router = useRouter();
  const clickHandler = (link) => () => {
    router.push(link)
  }
  return (
      <ListItem button onClick={clickHandler(link)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItem>
  );
}
