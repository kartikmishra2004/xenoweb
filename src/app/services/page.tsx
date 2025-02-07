import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { GridLayout } from "@livekit/components-react";

export default function CardGrid() {
  return (
    /* From Uiverse.io by 05akalan57 */ 
<div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center" }}>
  {/* Card 1 */}
  <div
    style={{ paddingRight: "5px" }}
    className="relative drop-shadow-xl w-56 h-80 overflow-hidden rounded-xl bg-[#3d3c3d]"
  >
    <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
      CARD 1
    </div>
    <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
  </div>

  {/* Card 2 */}
  <div
    className="relative drop-shadow-xl w-56 h-80 overflow-hidden rounded-xl bg-[#3d3c3d]"
  >
    <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
      CARD 2
    </div>
    <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
  </div>
</div>





    // <div
    //   style={{
    //     display: "flex",
    //     flexWrap: "wrap",
    //     justifyContent: "center",
    //     gap: "50px", // Adjusted spacing
    //     padding: "100px 20px", // Padding around the container
    //   }}
    // >
    //   {/* Row 1 */}
    //   <div style={{ display: "flex", justifyContent: "center", flex: "1 1 45%" }}>
    //     <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
    //       <CardMedia sx={{ height: 140 }} image="https://source.unsplash.com/345x140/?lizard" title="Green Iguana" />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           Lizard
    //         </Typography>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">Share</Button>
    //         <Button size="small">Learn More</Button>
    //       </CardActions>
    //     </Card>
    //   </div>

    //   <div style={{ display: "flex", justifyContent: "center", flex: "1 1 45%"  }}>
    //     <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
    //       <CardMedia sx={{ height: 140 }} image="https://source.unsplash.com/345x140/?lizard" title="Green Iguana" />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           Lizard
    //         </Typography>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">Share</Button>
    //         <Button size="small">Learn More</Button>
    //       </CardActions>
    //     </Card>
    //   </div>

    //   {/* Row 2 */}
    //   <div style={{ display: "flex", justifyContent: "center", flex: "1 1 45%" }}>
    //     <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
    //       <CardMedia sx={{ height: 140 }} image="https://source.unsplash.com/345x140/?lizard" title="Green Iguana" />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           Lizard
    //         </Typography>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">Share</Button>
    //         <Button size="small">Learn More</Button>
    //       </CardActions>
    //     </Card>
    //   </div>

    //   <div style={{ display: "flex", justifyContent: "center", flex: "1 1 45%" }}>
    //     <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
    //       <CardMedia sx={{ height: 140 }} image="https://source.unsplash.com/345x140/?lizard" title="Green Iguana" />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           Lizard
    //         </Typography>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">Share</Button>
    //         <Button size="small">Learn More</Button>
    //       </CardActions>
    //     </Card>
    //   </div>
    // </div>
   
  );}

