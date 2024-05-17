import { ImageSourcePropType } from "react-native";

export interface User {
    id: number;
    fullName: string;
    lastMessage: string;
    photo: ImageSourcePropType;
    timestamp: string;
  }