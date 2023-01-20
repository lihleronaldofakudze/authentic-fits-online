import {
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClothCarouselComponent from "../components/ClothCarouselComponent";
import GooglePayButton from "@google-pay/button-react";
import sanity, { urlFor } from "../services/sanity";
import { BsWhatsapp } from "react-icons/bs";
import ProductCardComponent from "../components/ProductCardComponent";

const FitPage = () => {
  const { slug } = useParams();
  const [cloth, setCloth] = useState();
  const [clothings, setClothings] = useState([]);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "clothing" && slug.current == "${slug}"]{..., clothCategory->{...}}`
      )
      .then((data) => setCloth(data[0]))
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "clothing" && category == "${cloth?.category}" && title != "${cloth?.title}"][0...4]`
      )
      .then(setClothings)
      .catch(console.log);
  }, [cloth]);

  return (
    <Container sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <img
            src={cloth && urlFor(cloth?.images[0]).url()}
            alt={cloth?.title}
            width="100%"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          {cloth && <ClothCarouselComponent images={cloth.images} />}
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography variant="body1" color="textSecondary">
            {cloth?.category}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {cloth?.title}
          </Typography>
          <Typography>{cloth?.shortDescription}</Typography>
          <Typography variant="h5" my={2}>
            E{cloth?.price}
          </Typography>
          <TextField
            type="text"
            fullWidth
            select
            size="small"
            label="Select Size (Clothing Standard)"
            margin="normal"
          >
            {cloth?.sizes.map((size, index) => (
              <MenuItem key={index} value={size}>
                {size}
              </MenuItem>
            ))}
          </TextField>
          <GooglePayButton
            buttonType="order"
            style={{
              width: "100%",
            }}
            environment="TEST"
            buttonSizeMode="fill"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "mpgs",
                      gatewayMerchantId:
                        "i4T_YSDLi1RxnxmXkTq2MwAxKH8iFLYDJ28ksKRF0a2ca6eb!5b36adff925d4114954fd74468048da00000000000000000",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "BCR2DN4T4SF2JML3",
                merchantName: "Lihle Fakudze",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "25.00",
                currencyCode: "USD",
                countryCode: "US",
              },
            }}
            onLoadPaymentData={(paymentData) => {
              console.log(
                "TODO: send order to server",
                paymentData.paymentMethodData
              );
            }}
          />
          <Button
            fullWidth
            sx={{ mt: 1 }}
            variant="contained"
            color="success"
            startIcon={<BsWhatsapp />}
          >
            Order On WhatsApp
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        textAlign="center"
        gutterBottom
        mt={5}
      >
        {cloth?.category.toLocaleUpperCase()} RELATED FITS
      </Typography>
      <Grid container sx={{ my: 2 }}>
        <Grid item md={3} xs={12}>
          {clothings?.map((cloth, index) => (
            <ProductCardComponent key={index} cloth={cloth} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default FitPage;
