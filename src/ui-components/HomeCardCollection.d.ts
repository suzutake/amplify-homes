/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HomeCardProps } from "./HomeCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeCardCollectionOverridesProps = {
    HomeCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    HomeCard?: HomeCardProps;
} & EscapeHatchProps;
export declare type HomeCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => HomeCardProps;
} & {
    overrides?: HomeCardCollectionOverridesProps | undefined | null;
}>;
export default function HomeCardCollection(props: HomeCardCollectionProps): React.ReactElement;
