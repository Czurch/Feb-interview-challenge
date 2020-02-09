import React from "react";
import classNames from "classnames";
import { Card as Base, CardHeader, CardContent } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./ListCard.module.scss";

function ListCard({ theme, cardHeader, cardItems }) {
  const themeCheck = style =>
    classNames(style, { [styles.dark]: theme === "dark" });

  return (
    <Base
      classes={{
        root: themeCheck(styles.listCard)
      }}
    >
      <CardHeader
        title={cardHeader}
        classes={{
          root: themeCheck(styles.headerSpace),
          title: themeCheck(styles.headerTitle)
        }}
      />
      <CardContent
        classes={{
          root: themeCheck(styles.itemSpace)
        }}
        component="ul"
      >
        {cardItems.map(item => (
          <li className={styles.listItem} key={item.key}>
            - {item}
          </li>
        ))}
      </CardContent>
    </Base>
  );
}

ListCard.propTypes = {
  cardHeader: PropTypes.string,
  cardItems: PropTypes.arrayOf(PropTypes.string)
};

export default ListCard;
