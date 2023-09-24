/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCardOverridesProps = {
    HomeCard?: PrimitiveOverrideProps<FlexProps>;
    "wallpaperbetter(29) copy 1"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomeCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    amplify?: String;
    home?: any;
} & {
    overrides?: HomeCardOverridesProps | undefined | null;
}>;
export default function HomeCard(props: HomeCardProps): React.ReactElement;
