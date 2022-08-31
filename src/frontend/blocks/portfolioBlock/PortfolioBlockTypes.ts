import {IBlockProps} from "../BlocksTypes";
import {ISocialProps} from "../../components/social/SocialTypes";

export interface IPortfolioBlockProps extends IBlockProps {
  works: ISocialProps[];
}
