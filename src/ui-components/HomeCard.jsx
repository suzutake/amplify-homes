/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { amplify, home, overrides, ...rest } = props;
  return (
    <Flex
      gap="1px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeCard")}
      {...rest}
    >
      <Image
        width="2421px"
        height="1020px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "wallpaperbetter(29) copy 1")}
      ></Image>
      <View
        width="2421px"
        height="634px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
        <Text
          fontFamily="Inter"
          fontSize="120px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="120px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="2421px"
          height="390px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="244px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.createdAt}
          {...getOverrideProps(overrides, "Description")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="120px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="120px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="2421px"
          height="244px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={home?.address}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </Flex>
  );
}
