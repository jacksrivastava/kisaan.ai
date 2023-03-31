import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client, urlFor } from "../client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";

function plant() {
  const { query } = useRouter();
  const plantId = query.plant;
  const [plant, setPlant] = useState({});
  useEffect(() => {
    const query = '*[_type=="plants"]';
    client.fetch(query).then((data) => {
      data.map((item) => {
        if (item.name == plantId) {
          setPlant(item);
        }
      });
    });
  }, [plantId]);
  return (
    <>
      <div className="heading">
        <h1
          align="center"
          style={{ fontSize: "40px", fontWeight: "600", color: "#117b13" }}
        >
          🌱 {plant.name}
        </h1>
      </div>

      <div className="main">
        <div>
          <div className="col1">
            <Card
              sx={{ minWidth: 275, maxWidth: "500px", borderRadius: "10px" }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  📅 AGE in days
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {plant.age}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col1">
            <Card
              sx={{ minWidth: 275, maxWidth: "500px", borderRadius: "10px" }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  ❤️‍🩹 HEALTH
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Good
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col1">
            <Card
              sx={{ minWidth: 275, maxWidth: "500px", borderRadius: "10px" }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  ACTION
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Irrigation
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="col2">
          <Card
            sx={{
              minWidth: 275,
              maxWidth: "500px",
              borderRadius: "10px",
              margin: "20px",
            }}
            variant="outlined"
          >
            <CardContent>
              {plant.imgurl && (
                <CardMedia
                  sx={{ height: 400, borderRadius: "10px" }}
                  component="img"
                  image={urlFor(plant.imgurl)}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default plant;
