import React from "react";
import ItemCard from "./ItemCard";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Menu = ({ Menu }) => {
  // console.log(Menu);
  const itemcards = Menu?.card?.card?.itemCards;
  // console.log("itemsCard: menu", { itemcards });
  return (
    <div>
      {itemcards ? (
        <Accordion>
          <AccordionSummary
            key={Menu?.card?.card?.title}
            aria-controls={Menu?.card?.card?.title}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="font-bold">
              {Menu?.card?.card?.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {itemcards?.map((item) => (
              // console.log(item)
              <ItemCard foodItem={item}></ItemCard>
            ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        ""
      )}
    </div>
  );
};

export default Menu;
