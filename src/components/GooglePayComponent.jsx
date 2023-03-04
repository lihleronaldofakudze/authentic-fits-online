import React from "react";

import GooglePayButton from "@google-pay/button-react";

const GooglePayComponent = () => {
  return (
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
  );
};

export default GooglePayComponent;
